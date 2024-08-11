import './App.css';
import Header from './components/Header/Header';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import About from './components/about/About';
import Category from './components/category/Category';
import Catalog from './components/catalog/Catalog';
import Contacts from './components/contacts/Contacts';
import MainBlock from './components/mainBlock/MainBlock';
import FAQ from './components/faq/faq';
import { classNames } from './components/classNames';
import { useTheme } from './components/mode/useTheme';
import useHook from './components/hook/useHook';
import { useEffect } from 'react';

function App() {

  const { theme } = useTheme()
  const faqItems1 = [
    {
      question: 'Минимальная партия?',
      answer: 'ОТ 400 ЕДИНИЦ',
      answer2: 'КОМПЛЕКТЫ СПОРТИВНЫЕ И КЛАССИЧЕСКИЕ',
      answer3: 'ОТ 500 ЕДИНИЦ',
      answer4: '‌ПИДЖАКИ, БРЮКИ, ПЛАТЬЯ, РУБАШКИ',
      answer5: '1000 ЕДИНИЦ',
      answer6: '‌ФУТБОЛКИ, ЛОНГСЛИВЫ, ТОПЫ',
    },
    {
      question: 'Как посчитать конечную стоимость изделий?',
      answer: 'Конечная цена изделия будет известна после пошива образца и утверждения размерной сетки. ',
      answer2: 'Мы сможем посчитать расход ткани и фурнитуры. ',
      listTitle: 'Разработка',
      list: ['-Изготовление лекал', '-Пошив образца', '-Ткань + фурнитура ', '-Конструирование изделия (доработка) ']
    },
    {
      question: 'Сертификаты',
      answer: 'Мы готовы предоставить собственные декларации соответствия на изделия, производимые на нашей фабрике'
    },
  ];

  const faqItems2 = [
    {
      question: 'Заявка и консультация',
      answer: 'На первой встрече мы узнаем все ваши пожелания, расскажем о всех производственных процессах на швейной фабрике, проконсультируем вас по срокам и примерной стоимости изделий.'
    },
    {
      question: 'Разработка конструкции и изготовление образца-эталона.',
      answer: 'на основе вашего запроса конструкторы строят по нему  лекала. Мы изготавливаем тестовый образец.'
    },
    {
      question: 'Расчет сроков и стоимости.',
      answer: 'Предоплата.',
      answer2: 'Помогаем оптимизировать цену изделий за счет кроя или отделки: подбираем оптимальные по цене материалы и фурнитуру.',
      answer3: 'Согласовываем объем партии, размерный ряд и сроки производства.'
    },
    {
      question: 'Производство партии',
    },
    {
      question: 'Контроль качества, упаковка.',
    },
    {
      question: 'Финальная оплата',
    },
    {
      question: 'Отгрузка',
    },
  ];

  const { getItems: getNums, items: numItems } = useHook("news")
  const { getItems: getQ, items: QItems } = useHook("products")

  useEffect(() => {
    getNums()
    getQ();
  }, [])

  return (
    <div className={classNames('App', {}, [theme])}>
      <Header />
      <MainBlock />
      <About />
      <Category />
      <Catalog />
      <FAQ title={"ЭТАПЫ РАБОТЫ:"} data={numItems} isNum={true} />
      <FAQ title={"У НАС ЧАСТО СПРАШИВАЮТ:"} data={QItems} />
      <Contacts />
    </div>
  );
}

export default App;
