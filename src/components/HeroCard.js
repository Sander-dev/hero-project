import React from 'react';
import Image from 'next/image'

const HeroCard = ({ hero }) => {
  return (
    <div className="bg-gray-900 text-white rounded-lg shadow-lg p-4">
      <Image
        src={hero.images.md}
        alt={hero.name}
        width={800}
        height={500}
        className="w-full h-48 object-cover mb-4 rounded-md"
      />
      <h2 className="text-lg font-bold">{hero.name}</h2>
    </div>
  );
};

export default HeroCard;
