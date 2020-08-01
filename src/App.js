import React from 'react';
import './App.css';
import Menu from './components/Menu';
import BannerMain from './components/BannerMain';
import dadosIniciais from './data/dados_iniciais.json'


function App() {
  return (
    <div className="App">
      <Menu/>

      <BannerMain 
        videoTitle={dadosIniciais.categorias[0].videos[0].titulo}
        url={dadosIniciais.categorias[0].videos[0].url}
        videoDescription={"O que é frontend?"}
      />



    </div>
  );
}

export default App;
