// src/pages/album/Album19.js
import React from 'react';
import album19Image from '../../imagens/album/album19.jpg';
import album1 from '../../imagens/1917IRH/here.jpg';
import album2 from '../../imagens/1917IRH/hear.jpg';
import album3 from '../../imagens/1917IRH/deluxe.jpg';
import album4 from '../../imagens/1917IRH/dear.jpg';

const albums = [
  { id: 1, title: 'Here', imageUrl: album1 },
  { id: 2, title: 'Hear', imageUrl: album2 },
  { id: 3, title: 'Deluxe', imageUrl: album3 },
  { id: 4, title: 'Dear - Carat', imageUrl: album4 },
];

const Album19 = () => {
  return (
    <div className="flex flex-col items-center p-4 bg-white min-h-screen">
      <div className="flex flex-col md:flex-row items-center bg-white rounded-lg p-4">
        <img src={album19Image} alt="17 Is Right Here" className="w-full md:w-auto h-80 object-cover rounded-lg" />
        <div className="md:ml-8 mt-4 md:mt-0">
          <h1 className="text-4xl font-bold text-gray-500 mb-8">17 Is Right Here</h1>
          <p className="text-lg">
            17 Is Right Here é um dos álbuns do grupo Seventeen, lançado em 2024. O álbum inclui faixas como "Track 1" e "Track 2".
          </p>
          <p className="mt-4 text-lg">
            <strong>Data de lançamento:</strong> 27 de julho de 2024<br/>
            <strong>Gênero:</strong> K-pop, Dance, Hip-hop<br/>
            <strong>Duração:</strong> 42:00
          </p>
        </div>
      </div>

      <hr className="w-full mt-8 border-t-2 border-gray-300 mb-8" />
      <h1 className="text-4xl font-bold text-gray-500">Versões do Album</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-8">
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

export default Album19;
