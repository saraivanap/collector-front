import React from 'react';
import photocard10 from '../../imagens/photocard/photocard10.jpg';
import album1 from '../../imagens/album/album1.jpg';
import album2 from '../../imagens/album/album2.jpg';
import album3 from '../../imagens/album/album3.jpg';
import album4 from '../../imagens/album/album4.jpg';
import album5 from '../../imagens/album/album5.jpg';
import album6 from '../../imagens/album/album6.jpg';
import album7 from '../../imagens/album/album7.jpg';
import album8 from '../../imagens/album/album8.jpg';
import album9 from '../../imagens/album/album9.jpg';
import album10 from '../../imagens/album/album10.jpg';
import album11 from '../../imagens/album/album11.jpg';
import album12 from '../../imagens/album/album12.jpg';
import album13 from '../../imagens/album/album13.jpg';
import album14 from '../../imagens/album/album14.jpg';
import album15 from '../../imagens/album/album15.jpg';
import album16 from '../../imagens/album/album16.jpg';
import album17 from '../../imagens/album/album17.jpg';
import album18 from '../../imagens/album/album18.jpg';
import album19 from '../../imagens/album/album19.jpg';
import album20 from '../../imagens/album/album20.jpg';

const Photocard10 = () => {
  const albums = [
    { id: 1, title: '17 carat', imageUrl: album1 },
    { id: 2, title: 'Boys Be', imageUrl: album2 },
    { id: 3, title: 'Love & Letter', imageUrl: album3 },
    { id: 4, title: 'Going Seventeen', imageUrl: album4 },
    { id: 5, title: 'AL1', imageUrl: album5 },
    { id: 6, title: 'Teen, Age', imageUrl: album6 },
    { id: 7, title: 'Directors Cut', imageUrl: album7 },
    { id: 8, title: 'You Make My Day', imageUrl: album8 },
    { id: 9, title: 'You Make My Dawn', imageUrl: album9 },
    { id: 10, title: 'An Ode', imageUrl: album10 },
    { id: 11, title: 'Heng:Gare', imageUrl: album11 },
    { id: 12, title: 'Semicolon', imageUrl: album12 },
    { id: 13, title: 'Your Choice', imageUrl: album13 },
    { id: 14, title: 'ATTACCA', imageUrl: album14 },
    { id: 15, title: 'FACE THE SUN', imageUrl: album15 },
    { id: 16, title: 'SECTOR 17', imageUrl: album16 },
    { id: 17, title: 'FML', imageUrl: album17 },
    { id: 18, title: 'HEAVEN', imageUrl: album18 },
    { id: 19, title: '17 IS RIGHT HERE', imageUrl: album19 },
    { id: 20, title: 'comeback-outubro', imageUrl: album20 },
  ];

  return (
    <div className="flex flex-col items-center p-4 bg-white min-h-screen">
      <div className="flex flex-col md:flex-row items-center bg-white rounded-lg p-4">
        <img src={photocard10} alt="The8" className="w-full md:w-auto h-80 object-cover rounded-lg" />
        <div className="md:ml-8 mt-4 md:mt-0">
          <h1 className="text-4xl font-bold text-gray-500 mb-8">The8 - Xu Minghao (徐明浩)</h1>
          <p className="text-lg">
            Xu Minghao, known by his stage name The8, is a member of the South Korean boy group Seventeen under Pledis Entertainment. He is a dancer and part of the Performance unit in the group.
          </p>
          <p className="mt-4 text-lg">
            <strong>Birthday:</strong> November 7, 1997<br/>
            <strong>Position:</strong> Lead Dancer, Sub Vocalist, Sub Rapper<br/>
            <strong>Nationality:</strong> Chinese
          </p>
        </div>
      </div>

      <hr className="w-full mt-8 border-t-2 border-gray-300 mb-8" />
      <h1 className="text-4xl font-bold text-gray-500">Selecionar Album</h1>

      <div className="flex items-center bg-white rounded-lg p-4">
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
    </div>
  );
};

export default Photocard10;
