
import React from 'react';
import Title from './components/Title';
import Description from './components/Description';
import Products from './components/Products';

const App = () => {
  return (
    <div>
      <Title>Tela de Produtos</Title>
      <Description>Seleção de Produtos</Description>
      <Products />
    </div>
  );
};

export default App;
