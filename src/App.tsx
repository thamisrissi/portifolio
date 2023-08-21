import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import MainContent from './components/MainContent';

const App: React.FC = () => {
  return (
    <div className="App">
      <Header name={headerData.name} title={headerData.title} />
      <MainContent title={mainContentData.title} content={mainContentData.content} />
    </div>
  );
};

const headerData = {
  name: 'Seu Nome',
  title: 'Desenvolvedor Web',
};

const mainContentData = {
  title: 'Sobre Mim',
  content: 'Eu sou um desenvolvedor web apaixonado por...',
};
export default App;
