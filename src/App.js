import './App.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { lazy, Suspense } from 'react';
import { classNames } from './components/classNames';
import { useTheme } from './components/mode/useTheme';
import useHook from './components/hook/useHook';
import { useEffect, useState } from 'react';
import Preloader from './components/Preloader/Preloader';
import CallBackForm from './components/form/CallbackForm';

const Header = lazy(() => import('./components/Header/Header'));
const About = lazy(() => import('./components/about/About'));
const Category = lazy(() => import('./components/category/Category'));
const Catalog = lazy(() => import('./components/catalog/Catalog'));
const Contacts = lazy(() => import('./components/contacts/Contacts'));
const MainBlock = lazy(() => import('./components/mainBlock/MainBlock'));
const FAQ = lazy(() => import('./components/faq/faq'));

function App() {

  const { theme } = useTheme()

  const [loading, setLoading] = useState(true);
  const { getItems: getNums, items: numItems } = useHook("news")
  const { getItems: getQ, items: QItems } = useHook("products")

  useEffect(() => {
    getNums();
    getQ();

    // Имитируем немного дольше отображение лоадера
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000); // Добавляем 1 секунду

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={classNames('App', {}, [theme])}>
      {loading ? (
        <Preloader />
      ) : (
        <Suspense fallback={<Preloader />}>
          <Header />
          <MainBlock />
          <About />
          <Category />
          <Catalog />
          <FAQ title={"ЭТАПЫ РАБОТЫ:"} data={numItems} isNum={true} />
          <FAQ title={"У НАС ЧАСТО СПРАШИВАЮТ:"} data={QItems} />
          <Contacts />
        </Suspense>
      )}
    </div>
  );
}

export default App;
