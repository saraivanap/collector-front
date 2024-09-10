import React from 'react';

const HaoPC = () => {
  const albums = [
    { title: 'Boys Be', img: 'https://via.placeholder.com/400x200?text=Boys+Be' },
    { title: 'Love & Letter', img: 'https://via.placeholder.com/400x200?text=Love+%26+Letter' },
    { title: 'Going Seventeen', img: 'https://via.placeholder.com/400x200?text=Going+Seventeen' },
    { title: 'AL1', img: 'https://via.placeholder.com/400x200?text=AL1' },
    { title: 'Teen Age', img: 'https://via.placeholder.com/400x200?text=Teen+Age' },
    { title: "Director's Cut", img: 'https://via.placeholder.com/400x200?text=Directors+Cut' },
    { title: 'You Make My Day', img: 'https://via.placeholder.com/400x200?text=You+Make+My+Day' },
    { title: 'You Made My Dawn', img: 'https://via.placeholder.com/400x200?text=You+Made+My+Dawn' },
    { title: 'An Ode', img: 'https://via.placeholder.com/400x200?text=An+Ode' },
    { title: 'Heng:Garae', img: 'https://via.placeholder.com/400x200?text=Heng+Garae' },
    { title: 'Semicolon', img: 'https://via.placeholder.com/400x200?text=Semicolon' },
    { title: 'Your Choice', img: 'https://via.placeholder.com/400x200?text=Your+Choice' },
    { title: 'Attacca', img: 'https://via.placeholder.com/400x200?text=Attacca' },
    { title: 'Face The Sun', img: 'https://via.placeholder.com/400x200?text=Face+The+Sun' },
    { title: 'Sector 17', img: 'https://via.placeholder.com/400x200?text=Sector+17' },
    { title: 'FML', img: 'https://via.placeholder.com/400x200?text=FML' },
    { title: 'Heaven', img: 'https://via.placeholder.com/400x200?text=Heaven' },
    { title: '17 Is Right Here', img: 'https://via.placeholder.com/400x200?text=17+Is+Right+Here' },
  ];

  return (
    <div className="container mx-auto">
      {albums.map((album, index) => (
        <div key={index} className="text-center">
          <hr className="w-full mt-8 border-t-2 border-gray-300 mb-8" />
          <h1 className="text-4xl font-bold text-gray-500">{album.title}</h1>
          <img src={album.img} alt={album.title} className="w-full max-w-md mx-auto mt-4 mb-8" />
        </div>
      ))}
    </div>
  );
};

export default HaoPC;
