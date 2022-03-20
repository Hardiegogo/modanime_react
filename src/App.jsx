import "./App.css";
import {Routes,Route} from 'react-router-dom'
import Navbar from './components/navbar-component/Navbar'
import Homepage from "./pages/home-page/Homepage";
import ProductList from "./pages/product-listing-page/ProductList";
import Footer from "./components/footer-component/Footer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path='/' element={<Homepage/>}/>  
        <Route path='/products' element={<ProductList/>}/>     

      </Routes>
      <Footer />


      
    </div>
  );
}

export default App;
