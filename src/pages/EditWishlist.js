import React, { useState } from 'react';

const EditWishlist = ({ wishlistPhotocards = [], wishlistAlbums = [], onSave, onCancel }) => {
  const [currentWishlistPhotocards, setCurrentWishlistPhotocards] = useState(wishlistPhotocards);
  const [currentWishlistAlbums, setCurrentWishlistAlbums] = useState(wishlistAlbums);
  const [activeTab, setActiveTab] = useState('photocards');

  const availablePhotocards = [
    {
      id: 4,
      name: 'Photocard 1',
      member: 'Membro A',
      album: 'Álbum X',
      version: 'Versão 1',
      image: 'https://via.placeholder.com/150',
    },
    {
      id: 5,
      name: 'Photocard 2',
      member: 'Membro B',
      album: 'Álbum Y',
      version: 'Versão 2',
      image: 'https://via.placeholder.com/150',
    },
    {
      id: 6,
      name: 'Photocard 3',
      member: 'Membro C',
      album: 'Álbum Z',
      version: 'Versão 3',
      image: 'https://via.placeholder.com/150',
    },
  ];

  const availableAlbums = [
    {
      id: 7,
      name: 'Álbum 1',
      album: 'Álbum X',
      version: 'Versão 1',
      image: 'https://via.placeholder.com/150',
    },
    {
      id: 8,
      name: 'Álbum 2',
      album: 'Álbum Y',
      version: 'Versão 2',
      image: 'https://via.placeholder.com/150',
    },
    {
      id: 9,
      name: 'Álbum 3',
      album: 'Álbum Z',
      version: 'Versão 3',
      image: 'https://via.placeholder.com/150',
    },
  ];

  const [searchTerm, setSearchTerm] = useState('');

  const filteredPhotocards = availablePhotocards.filter(
    (item) =>
      item.member.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.album.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.version.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const filteredAlbums = availableAlbums.filter(
    (item) =>
      item.album.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.version.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const addItem = (item, type) => {
    if (type === 'photocards') {
      if (!currentWishlistPhotocards.find((wishlistItem) => wishlistItem.id === item.id)) {
        setCurrentWishlistPhotocards([...currentWishlistPhotocards, item]);
      }
    } else if (type === 'albums') {
      if (!currentWishlistAlbums.find((wishlistItem) => wishlistItem.id === item.id)) {
        setCurrentWishlistAlbums([...currentWishlistAlbums, item]);
      }
    }
  };

  const removeItem = (id, type) => {
    if (type === 'photocards') {
      setCurrentWishlistPhotocards(currentWishlistPhotocards.filter((item) => item.id !== id));
    } else if (type === 'albums') {
      setCurrentWishlistAlbums(currentWishlistAlbums.filter((item) => item.id !== id));
    }
  };

  const saveChanges = () => {
    onSave(currentWishlistPhotocards, currentWishlistAlbums);
  };

  const cancelChanges = () => {
    onCancel();
  };

  const renderTabContent = () => {
    if (activeTab === 'photocards') {
      return (
        <>
          <div className="space-y-4">
            {currentWishlistPhotocards.map((item) => (
              <div key={item.id} className="flex items-center justify-between bg-gray-50 p-4 rounded-lg">
                <div className="flex items-center">
                  <img src={item.image} alt={item.name} className="w-16 h-16 object-cover rounded-lg mr-4" />
                  <div>
                    <p className="text-gray-700 font-semibold">{item.name}</p>
                    <p className="text-gray-500 text-sm">Membro: {item.member}</p>
                    <p className="text-gray-500 text-sm">Álbum: {item.album}</p>
                    <p className="text-gray-500 text-sm">Versão: {item.version}</p>
                  </div>
                </div>
                <button
                  onClick={() => removeItem(item.id, 'photocards')}
                  className="text-red-600 hover:text-red-800 transition duration-300"
                >
                  Remover
                </button>
              </div>
            ))}
          </div>

          <div className="mt-8">
            <h3 className="text-xl font-semibold mb-2 text-gray-900">Adicionar Novo Photocard</h3>
            <div className="grid grid-cols-2 gap-4">
              {filteredPhotocards.map((item) => (
                <div
                  key={item.id}
                  onClick={() => addItem(item, 'photocards')}
                  className="cursor-pointer bg-gray-50 p-4 rounded-lg hover:bg-gray-100 transition duration-300"
                >
                  <img src={item.image} alt={item.name} className="w-full h-32 object-cover rounded-md mb-2" />
                  <p className="text-gray-700 font-semibold">{item.name}</p>
                  <p className="text-gray-500 text-sm">Membro: {item.member}</p>
                  <p className="text-gray-500 text-sm">Álbum: {item.album}</p>
                  <p className="text-gray-500 text-sm">Versão: {item.version}</p>
                </div>
              ))}
            </div>
          </div>
        </>
      );
    } else if (activeTab === 'albums') {
      return (
        <>
          <div className="space-y-4">
            {currentWishlistAlbums.map((item) => (
              <div key={item.id} className="flex items-center justify-between bg-gray-50 p-4 rounded-lg">
                <div className="flex items-center">
                  <img src={item.image} alt={item.name} className="w-16 h-16 object-cover rounded-lg mr-4" />
                  <div>
                    <p className="text-gray-700 font-semibold">{item.name}</p>
                    <p className="text-gray-500 text-sm">Álbum: {item.album}</p>
                    <p className="text-gray-500 text-sm">Versão: {item.version}</p>
                  </div>
                </div>
                <button
                  onClick={() => removeItem(item.id, 'albums')}
                  className="text-red-600 hover:text-red-800 transition duration-300"
                >
                  Remover
                </button>
              </div>
            ))}
          </div>

          <div className="mt-8">
            <h3 className="text-xl font-semibold mb-2 text-gray-900">Adicionar Novo Álbum</h3>
            <div className="grid grid-cols-2 gap-4">
              {filteredAlbums.map((item) => (
                <div
                  key={item.id}
                  onClick={() => addItem(item, 'albums')}
                  className="cursor-pointer bg-gray-50 p-4 rounded-lg hover:bg-gray-100 transition duration-300"
                >
                  <img src={item.image} alt={item.name} className="w-full h-32 object-cover rounded-md mb-2" />
                  <p className="text-gray-700 font-semibold">{item.name}</p>
                  <p className="text-gray-500 text-sm">Álbum: {item.album}</p>
                  <p className="text-gray-500 text-sm">Versão: {item.version}</p>
                </div>
              ))}
            </div>
          </div>
        </>
      );
    }
  };

  return (
    <div className="bg-gray-100 min-h-screen p-8">
      <div className="max-w-3xl mx-auto bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold mb-4 text-gray-900">Editar Wishlist</h2>

        {/* Tabs */}
        <div className="flex space-x-4 border-b border-gray-300 mb-4">
          <button
            className={`pb-2 ${activeTab === 'photocards' ? 'border-b-2 border-indigo-500 text-indigo-500' : 'text-gray-500'}`}
            onClick={() => setActiveTab('photocards')}
          >
            Photocards
          </button>
          <button
            className={`pb-2 ${activeTab === 'albums' ? 'border-b-2 border-indigo-500 text-indigo-500' : 'text-gray-500'}`}
            onClick={() => setActiveTab('albums')}
          >
            Álbuns
          </button>
        </div>

        {/* Pesquisa */}
        <div className="mb-4">
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder={`Pesquisar por ${activeTab === 'photocards' ? 'membro, álbum, ou versão' : 'álbum ou versão'}`}
            className="border p-2 rounded-lg focus:outline-none focus:border-indigo-500 w-full"
          />
        </div>

        {/* Conteúdo da Aba Ativa */}
        {renderTabContent()}

        {/* Botões de Salvar e Cancelar */}
        <div className="mt-8 text-right space-x-4">
          <button
            onClick={cancelChanges}
            className="bg-gray-400 text-white px-4 py-2 rounded-full hover:bg-gray-500 transition duration-300"
          >
            Cancelar
          </button>
          <button
            onClick={saveChanges}
            className="bg-green-500 text-white px-4 py-2 rounded-full hover:bg-green-400 transition duration-300"
          >
            Salvar Alterações
          </button>
        </div>
      </div>
    </div>
  );
};

export default EditWishlist;
