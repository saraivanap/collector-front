// src/pages/album/Album1.js
import React from 'react';
import album1Image from '../../imagens/album/album1.jpg';

const albums = [
  { id: 1, title: '17 carat', imageUrl: album1Image },
];

const Album1 = () => {
  return (
    <div className="flex flex-col items-center p-4 bg-white min-h-screen">
      <div className="flex flex-col md:flex-row items-center bg-white rounded-lg p-4">
        <img src={album1Image} alt="17 carat" className="w-full md:w-auto h-80 object-cover rounded-lg" />
        <div className="md:ml-8 mt-4 md:mt-0">
          <h1 className="text-4xl font-bold text-gray-500 mb-8">17 carat</h1>
          <p className="text-lg">
            17 carat é o álbum de estreia do grupo Seventeen, lançado em 2015. O álbum inclui faixas como "Adore U" e "Shining Diamond".
          </p>
          <p className="mt-4 text-lg">
            <strong>Data de lançamento:</strong> 29 de maio de 2015<br/>
            <strong>Gênero:</strong> K-pop, Dance, Hip-hop<br/>
            <strong>Duração:</strong> 17:13
          </p>
        </div>
      </div>

      <hr className="w-full mt-8 border-t-2 border-gray-300 mb-8" />
      <h1 className="text-4xl font-bold text-gray-500">O 17 carat possui apenas uma versão.</h1>
    </div>
  );
};

export default Album1;
