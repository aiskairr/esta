import './App.css';
import Header from './components/Header/Header';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import About from './components/about/About';
import Category from './components/category/Category';
import Catalog from './components/catalog/Catalog';
import Contacts from './components/contacts/Contacts';

function App() {
 
  return (
    <div className="App">
      <Header />
      <About />
      <Category />
      <Catalog />
      <Contacts />
    </div>
  );
}

export default App;
