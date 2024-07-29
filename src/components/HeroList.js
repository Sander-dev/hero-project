'use client'

import React, { useState, useEffect } from 'react';
import { getHeroes } from '../services/api';
import HeroCard from './HeroCard';
import SearchBar from './SearchBar';

const HeroList = () => {
  const [heroes, setHeroes] = useState([]);
  const [filteredHeroes, setFilteredHeroes] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      const data = await getHeroes();
      setHeroes(data);
      setFilteredHeroes(data);
    };

    fetchData();
  }, []);

  useEffect(() => {
    setFilteredHeroes(
      heroes.filter(hero =>
        hero.name.toLowerCase().includes(searchTerm.toLowerCase())
      )
    );
  }, [searchTerm, heroes]);

  return (
    <div>
      <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {filteredHeroes.map(hero => (
          <HeroCard key={hero.id} hero={hero} />
        ))}
      </div>
    </div>
  );
};

export default HeroList;
