import React from 'react';
import Image from 'next/image';

const HeroCard = ({ hero, onSelect, isSelected }) => {
  return (
    <div
      className={`bg-gray-900 text-white rounded-lg shadow-lg p-4 cursor-pointer ${isSelected ? 'border-4 border-yellow-500' : ''}`}
      onClick={() => onSelect(hero)}
    >
      <div className="w-full h-48 mb-4 relative">
        <Image
          src={hero.images.md}
          alt={hero.name}
          layout="fill"
          objectFit="cover"
          className="rounded-md"
        />
      </div>
      <h2 className="text-lg font-bold">{hero.name}</h2>
    </div>
  );
};

export default HeroCard;
