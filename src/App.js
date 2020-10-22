import React from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Router, Routes,Link, Route} from 'react-router-dom'
import {Header} from './component/Header';
import {Home} from './component/Home';
import {Products} from './component/Products';
import {ProductDetails} from './component/ProductDetails';
import {NotFound} from './component/NotFound';
import {ProductIndex} from './component/ProductIndex';

function App() {
  return (
    <BrowserRouter>
     <Header/>
          <Routes>
              <Route path="/" element={<Home/>}></Route>
              <Route path="products" element={<Products/>}>
                <Route path="/" element={<ProductIndex/>}></Route>
                <Route path=":productid" element={<ProductDetails/>}></Route>
                </Route>
                <Route path="*" element={<NotFound/>}></Route>
          </Routes>
    </BrowserRouter>     
   
  );
}

export default App;
