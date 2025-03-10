import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import HomePage from './landing_page\'/home/HomePage';
import Signup from './landing_page\'/signup/Signup.js';
import AboutPage from './landing_page\'/about/Aboutpage.js';
import ProductsPage from './landing_page\'/product/ProductsPage.js';
import SupportPage from './landing_page\'/support/Supportpage.js';
import Navbar from './Navbar';
import NotFound from './landing_page\'/NotFound.js';
import Footer from './Footer';
import Equity from './landing_page\'/pricing/Equity.js';
import Commodity from './landing_page\'/pricing/Commodity.js';
import Currency from './landing_page\'/pricing/Currency.js';
import Login from './landing_page\'/signup/Login.js';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 <BrowserRouter>
 <Navbar/>
 <Routes>
  <Route path='/' element={<HomePage />} />
  <Route path='/Signup' element={<Signup/>} />
  <Route path='/Login' element={<Login/>} />
  <Route path='/About' element={<AboutPage/>} />
  <Route path='/Products' element={<ProductsPage/>} />
  <Route path='/Pricing/Equity' element={<Equity/>} />
  <Route path='/Support' element={<SupportPage/>} />
  <Route path="*" element={<NotFound/>} />
  <Route path='/Pricing/Equity' element={<Equity/>}/>
  <Route path='/Pricing/Currency' element={<Currency/>}/>
  <Route path='/Pricing/Commodity' element={<Commodity/>}/>
 </Routes>
 <Footer/>
 </BrowserRouter>
);


