import React from 'react';
import './app.css';
import ProductForm from './components/ProductForm';
import ProductList from './components/ProductList';

const App = () => {
  return (
    <main className='container'>
      <ProductForm />
      <ProductList />
    </main>
  );
};

export default App;
