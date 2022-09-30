import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { ProductsPage } from './components/ProductsPage';
import { About } from './components/About';
import { Product } from './components/Product';


const products = {
    "air-jordan-3-valor-blue": {
      name: "VALOUR BLUE",
      img:
        "https://secure-images.nike.com/is/image/DotCom/CT8532_104_A_PREM?＄SNKRS_COVER_WD＄&align=0,1"
    },
    "jordan-mars-270-london": {
      name: "JORDAN MARS 270 LONDON",
      img:
        "https://secure-images.nike.com/is/image/DotCom/CV3042_001_A_PREM?＄SNKRS_COVER_WD＄&align=0,1"
    },
    "air-jordan-1-zoom-racer-blue": {
      name: "RACER BLUE",
      img:
        "https://secure-images.nike.com/is/image/DotCom/CK6637_104_A_PREM?＄SNKRS_COVER_WD＄&align=0,1"
    }
};

const Home = () => <h2><p>Welcome to the Home Component</p></h2>;

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <h1>React Router useParams Hook Demo</h1>
          <div className="navbar">
            <Link to="/">Home</Link>
            <Link to="/products">Products</Link>
            <Link to="/about">About</Link>
          </div>
          
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/products" element={<ProductsPage products={products} />}></Route>
            <Route path="/about" element={<About />}></Route>
            <Route path='product/:id' element={<Product products={products} />}></Route>
          </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
