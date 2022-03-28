import React from 'react';
import Footer from './Base/Footer';
import Header from './Base/Header';
import SideBar from './SideBar';
import ProductList from './ProductList';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <SideBar />
      <ProductList />
      <Footer />
    </div>
  );
}

export default App;