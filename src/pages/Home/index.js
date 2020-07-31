import React, { useEffect, useState } from 'react';
import BannerMain from './../../components/BannerMain';
import Carousel from './../../components/Carousel';
import categoriasRepository from "./../../repositories/categorias";
import PageDefault from '../../components/PageDefault';

function Home() {
  // http://localhost:8080/categorias?_embed=videos
  useEffect(() => {
    categoriasRepository.getAllWithVideos()
      .then((categoriasComVideos) => {
        setDadoisInicias(categoriasComVideos);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);
  
  const [dadosIniciais, setDadoisInicias] = useState([]);

  return (
    <PageDefault paddingAll={0}>
      {dadosIniciais.length === 0 && (<div>Loading...</div>)}
      {dadosIniciais.map((categoria, indice) => {
        if (indice === 0) {
          return (
            <div key={categoria.id}>
              <BannerMain
                videoTitle={dadosIniciais[0].videos[0].titulo}
                url={dadosIniciais[0].videos[0].url}
                videoDescription={dadosIniciais[0].videos[0].description}
              />

              <Carousel
                ignoreFirstVideo
                category={dadosIniciais[0]}
              />
            </div>
          );
        }

        return (
          <Carousel
            key={categoria.id}
            category={categoria}
          />
        );
      })}
      {/* <BannerMain
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
      /> */}
    </PageDefault>
  );
}

export default Home;
