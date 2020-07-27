import React from 'react';
import Menu from './components/Menu';
import BannerMain from './components/BannerMain';
import Carousel from './components/Carousel';
import Footer from './components/Footer';
import dadoisInicias from "./data/dados_iniciais.json";

function App() {
  return (
    <div style={{ background: "#141414" }}>
      <Menu />
      <BannerMain
        videoTitle={dadoisInicias.categorias[0].videos[0].titulo}
        url={dadoisInicias.categorias[0].videos[0].url}
        videoDescription={"O que é Front-end? Trabalhando na área"}
      />

      <Carousel
        ignoreFirstVideo
        category={dadoisInicias.categorias[0]}
      />

      <Carousel
        category={dadoisInicias.categorias[1]}
      />

      <Carousel
        category={dadoisInicias.categorias[2]}
      />

      <Carousel
        category={dadoisInicias.categorias[3]}
      />

      <Footer/>
    </div>
  );
}

export default App;
