import React, { useState } from 'react';

const EditProfile = ({ userProfile, onSave }) => {
  const [name, setName] = useState(userProfile.name);
  const [username, setUsername] = useState(userProfile.username);
  const [bio, setBio] = useState(userProfile.bio);
  const [tags, setTags] = useState(userProfile.tags);
  const [profilePic, setProfilePic] = useState(userProfile.profilePic);
  const [coverPic, setCoverPic] = useState(userProfile.coverPic || 'https://via.placeholder.com/1920x600');
  const [newTag, setNewTag] = useState('');

  const handleAddTag = () => {
    if (newTag && !tags.includes(newTag)) {
      setTags([...tags, newTag]);
      setNewTag('');
    }
  };

  const handleRemoveTag = (tagToRemove) => {
    setTags(tags.filter((tag) => tag !== tagToRemove));
  };

  const handleProfilePicChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfilePic(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleCoverPicChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setCoverPic(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSave = () => {
    onSave({
      name,
      username,
      bio,
      tags,
      profilePic,
      coverPic,
    });
  };

  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="max-w-3xl mx-auto p-4 bg-white rounded-lg shadow-md">
        {/* Editar Foto de Capa */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Foto de Capa</label>
          <div className="relative">
            <img
              src={coverPic}
              alt="Cover"
              className="w-full h-48 object-cover rounded-lg"
            />
            <input
              type="file"
              accept="image/*"
              onChange={handleCoverPicChange}
              className="absolute inset-0 opacity-0 cursor-pointer"
            />
          </div>
        </div>

        {/* Editar Foto de Perfil */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Foto de Perfil</label>
          <div className="relative">
            <img
              src={profilePic}
              alt="Profile"
              className="w-32 h-32 object-cover rounded-full border-2 border-gray-300"
            />
            <input
              type="file"
              accept="image/*"
              onChange={handleProfilePicChange}
              className="absolute inset-0 opacity-0 cursor-pointer"
            />
          </div>
        </div>

        {/* Editar Nome */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Nome</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
          />
        </div>

        {/* Editar Username */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Username</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
          />
        </div>

        {/* Editar Biografia */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Biografia</label>
          <textarea
            value={bio}
            onChange={(e) => setBio(e.target.value)}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
          ></textarea>
        </div>

        {/* Editar Tags */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Tags</label>
          <div className="flex space-x-2 mb-2">
            {tags.map((tag, index) => (
              <span
                key={index}
                className="inline-block bg-blue-100 text-blue-800 text-sm font-semibold px-3 py-1 rounded-full cursor-pointer hover:bg-blue-200 transition duration-300"
                onClick={() => handleRemoveTag(tag)}
              >
                {tag} &times;
              </span>
            ))}
          </div>
          <div className="flex">
            <input
              type="text"
              value={newTag}
              onChange={(e) => setNewTag(e.target.value)}
              className="flex-grow p-2 border border-gray-300 rounded-md"
              placeholder="Adicionar nova tag"
            />
            <button
              onClick={handleAddTag}
              className="ml-2 bg-indigo-500 text-white px-4 py-2 rounded-full hover:bg-indigo-400 transition duration-300"
            >
              Adicionar
            </button>
          </div>
        </div>

        {/* Botões de Ação */}
        <div className="flex justify-end space-x-2">
          <button
            onClick={handleSave}
            className="bg-indigo-500 text-white px-4 py-2 rounded-full hover:bg-indigo-400 transition duration-300"
          >
            Salvar
          </button>
          <button
            onClick={() => onSave(userProfile)}
            className="bg-gray-200 text-gray-700 px-4 py-2 rounded-full hover:bg-gray-300 transition duration-300"
          >
            Cancelar
          </button>
        </div>
      </div>
    </div>
  );
};

export default EditProfile;
