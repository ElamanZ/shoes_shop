
import Header from './components/Header-Footer/Header';
import HomePage from './pages/HomePage/HomePage';
import ProductPage from './pages/ProductPage/ProductPage';
import Footer from './components/Header-Footer/Footer';
import CartItem from './components/CartItem';





function App() {
  return (
    <div className="App">
      {/* <CartItem/> */}
      <Header/>
      <HomePage/>
      <ProductPage/>
      <Footer/>
      
    </div>
  );
}

export default App;
