import { useState } from 'react';
import { GifList } from './components/GifList';
import { Header } from './components/Header';
import { PreviousSearches } from './components/PreviousSearches';
import { SearchBar } from './components/SearchBar';
import { getGifsByQuery } from './actions/get-gifs-by-query.action';
import type { Gif } from './interfaces/gif.interface';

export const GifsApp = () => {
  const [previousSearches, setPreviousSearches] = useState<string[]>([]);
  const [gifs, setGifs] = useState<Gif[]>([]);

  const handleLabelClicked = (search: string) => {
    console.log('Label clicked:', search);
  };

  const handleSearch = async (search: string) => {
    search = search.trim().toLowerCase();

    if (search === '') return;
    if (previousSearches.includes(search)) return;

    setPreviousSearches((prevSearches) =>
      [search, ...prevSearches].slice(0, 8),
    );

    setGifs(await getGifsByQuery(search));
  };

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
      <PreviousSearches
        searches={previousSearches}
        onLabelClicked={handleLabelClicked}
      />

      {/* Gifs */}
      <GifList gifs={gifs} />
    </>
  );
};
