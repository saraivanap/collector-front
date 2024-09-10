import React from 'react';
import photocard10 from '../../imagens/photocard/photocard10.jpg';
import HaoPC from '../../components/HaoPC';

const Photocard10 = () => {

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

      <HaoPC />
      
    </div>
  );
};

export default Photocard10;
