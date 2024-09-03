import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const Home = () => {
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
    ]
  };

  return (
    <div className="flex flex-col items-center justify-center h-full space-y-8">
      
      {/* Banner de Destaque */}
      <div className="w-full h-64 bg-cover bg-center" style={{ backgroundImage: "url('/imagens/home/banner1.jpg')" }}>
        <div className="bg-black bg-opacity-50 w-full h-full flex items-center justify-center">
          <h1 className="text-4xl font-bold text-white">Explore sua coleção SEVENTEEN</h1>
        </div>
      </div>
      
      {/* Seção de Novidades */}
      <div className="w-11/12 text-center">
        <h2 className="text-2xl font-semibold text-gray-700">Novidades</h2>
        <p className="text-gray-500 mb-4">Confira os lançamentos mais recentes do SEVENTEEN.</p>
        <Slider {...sliderSettings}>
          <div className="h-64 bg-cover bg-center" style={{ backgroundImage: "url('imagens/home/novidade1.jpg')" }}></div>
          <div className="h-64 bg-cover bg-center" style={{ backgroundImage: "url('imagens/home/novidade2.jpg')" }}></div>
          <div className="h-64 bg-cover bg-center" style={{ backgroundImage: "url('imagens/home/novidade3.jpg')" }}></div>
        </Slider>
      </div>

      {/* Galeria de Álbuns */}
      <div className="w-11/12">
        <h2 className="text-2xl font-semibold text-gray-700 text-center">Álbuns Disponíveis</h2>
        <Slider {...sliderSettings}>
          <div className="h-64 bg-cover bg-center" style={{ backgroundImage: "url('imagens/home/album1.jpg')" }}></div>
          <div className="h-64 bg-cover bg-center" style={{ backgroundImage: "url('imagens/home/album2.jpg')" }}></div>
          <div className="h-64 bg-cover bg-center" style={{ backgroundImage: "url('imagens/home/album3.jpg')" }}></div>
        </Slider>
      </div>

      {/* Coleção de Photocards */}
      <div className="w-11/12">
        <h2 className="text-2xl font-semibold text-gray-700 text-center">Photocards do SEVENTEEN</h2>
        <Slider {...sliderSettings}>
          <div className="h-48 bg-cover bg-center" style={{ backgroundImage: "url('/src/imagens/home/photocard1.jpg')" }}></div>
          <div className="h-48 bg-cover bg-center" style={{ backgroundImage: "url('/src/imagens/home/photocard2.jpg')" }}></div>
          <div className="h-48 bg-cover bg-center" style={{ backgroundImage: "url('/src/imagens/home/photocard3.jpg')" }}></div>
        </Slider>
      </div>

      {/* Call to Action */}
      <div className="w-11/12 flex justify-center space-x-4">
        <button className="mb-10 px-4 py-2 bg-blue-300 text-white font-bold rounded hover:bg-blue-400 transition duration-300">Explore  Albuns</button>
        <button className="mb-10 px-4 py-2 bg-blue-300 text-white font-bold rounded hover:bg-blue-400 transition duration-300">Explore Photocards</button>
      </div>
      
    </div>
  );
};

export default Home;
