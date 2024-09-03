// src/pages/album/Album2.js
import React from 'react';
import album2Image from '../../imagens/album/album2.jpg';
import album1 from '../../imagens/album/album1.jpg';
import album3 from '../../imagens/album/album3.jpg';
import album4 from '../../imagens/album/album4.jpg';
import album5 from '../../imagens/album/album5.jpg';
import album6 from '../../imagens/album/album6.jpg';

const albums = [
  { id: 1, title: '17 carat', imageUrl: album1 },
  { id: 2, title: 'Boys Be', imageUrl: album2Image },
  { id: 3, title: 'Love & Letter', imageUrl: album3 },
  { id: 4, title: 'Going Seventeen', imageUrl: album4 },
  { id: 5, title: 'AL1', imageUrl: album5 },
  { id: 6, title: 'Teen, Age', imageUrl: album6 },
];

const Album2 = () => {
  return (
    <div className="flex flex-col items-center p-4 bg-white min-h-screen">
      <div className="flex flex-col md:flex-row items-center bg-white rounded-lg p-4">
        <img src={album2Image} alt="Boys Be" className="w-full md:w-auto h-80 object-cover rounded-lg" />
        <div className="md:ml-8 mt-4 md:mt-0">
          <h1 className="text-4xl font-bold text-gray-500 mb-8">Boys Be</h1>
          <p className="text-lg">
            Boys Be é o segundo mini-álbum do grupo Seventeen, lançado em 2015. O álbum inclui faixas como "Mansae" e "Fronting".
          </p>
          <p className="mt-4 text-lg">
            <strong>Data de lançamento:</strong> 10 de setembro de 2015<br/>
            <strong>Gênero:</strong> K-pop, Dance, Hip-hop<br/>
            <strong>Duração:</strong> 19:00
          </p>
        </div>
      </div>

      <hr className="w-full mt-8 border-t-2 border-gray-300 mb-8" />
      <h1 className="text-4xl font-bold text-gray-500">Versões do Album</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-4 mt-8">
        {albums.map(album => (
          <div key={album.id} className="bg-white rounded-lg p-4">
            <div className="w-full h-64 flex items-center justify-center">
              <img src={album.imageUrl} alt={album.title} className="w-full h-full object-cover rounded-lg" />
            </div>
            <div className="mt-4 text-center">
              <h2 className="text-xl font-semibold">{album.title}</h2>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Album2;
