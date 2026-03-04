import { useState } from 'react';
import { GifList } from './components/GifList';
import { Header } from './components/Header';
import { PreviousSearches } from './components/PreviousSearches';
import { SearchBar } from './components/SearchBar';
import { mockGifs } from './mock-data/gifs.mock';

export const GifsApp = () => {
  
  const [previousSearches, setPreviousSearches] = useState(['Goku', 'Saitama', 'Demon Slayer']);

  const handleLabelClicked = (search: string) => {
    console.log('Label clicked:', search);
  };

  const handleSearch = (search: string) => {
    search = search.trim().toLowerCase();

    if(search === '') return;
    if(previousSearches.includes(search)) return;

    setPreviousSearches(prevSearches => [search, ...prevSearches].slice(0, 8));

  }

  return (
    <>
      {/* Header */}
      <Header
        title="Buscador de Gifs"
        description="Descubre y comparte tus gifs favoritos"
      />

      {/* Search */}
      <SearchBar placeholder="Busca lo que quieras" onSearch={handleSearch} />

      {/* Previous Searches */}
      <PreviousSearches searches={previousSearches} onLabelClicked={handleLabelClicked} />

      {/* Gifs */}
      <GifList gifs={mockGifs} />
    </>
  );
};
