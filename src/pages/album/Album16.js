// src/pages/album/Album16.js
import React from 'react';
import album16Image from '../../imagens/album/album16.jpg';
import album1 from '../../imagens/16SECTOR17/beginning.jpg';
import album2 from '../../imagens/16SECTOR17/heights.jpg';
import album3 from '../../imagens/16SECTOR17/compact.jpg';
import album4 from '../../imagens/16SECTOR17/kihno.jpg';
import album5 from '../../imagens/16SECTOR17/weverse.jpg';

const albums = [
  { id: 1, title: 'New Beginning', imageUrl: album1 },
  { id: 2, title: 'New Heights', imageUrl: album2 },
  { id: 3, title: 'Compact', imageUrl: album3 },
  { id: 4, title: 'KiT Kihno', imageUrl: album4 },
  { id: 5, title: 'WEVERSE', imageUrl: album5 },
];

const Album16 = () => {
  return (
    <div className="flex flex-col items-center p-4 bg-white min-h-screen">
      <div className="flex flex-col md:flex-row items-center bg-white rounded-lg p-4">
        <img src={album16Image} alt="Sector 17" className="w-full md:w-auto h-80 object-cover rounded-lg" />
        <div className="md:ml-8 mt-4 md:mt-0">
          <h1 className="text-4xl font-bold text-gray-500 mb-8">Sector 17</h1>
          <p className="text-lg">
            Sector 17 é um dos álbuns do grupo Seventeen, lançado em 2022. O álbum inclui faixas como "World" e "_World".
          </p>
          <p className="mt-4 text-lg">
            <strong>Data de lançamento:</strong> 18 de julho de 2022<br/>
            <strong>Gênero:</strong> K-pop, Dance, Hip-hop<br/>
            <strong>Duração:</strong> 40:00
          </p>
        </div>
      </div>

      <hr className="w-full mt-8 border-t-2 border-gray-300 mb-8" />
      <h1 className="text-4xl font-bold text-gray-500">Versões do Album</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 mt-8">
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

export default Album16;
