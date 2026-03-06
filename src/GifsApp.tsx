import { GifList } from './components/GifList';
import { Header } from './components/Header';
import { PreviousSearches } from './components/PreviousSearches';
import { SearchBar } from './components/SearchBar';
import { useGifs } from './hooks/useGifs';

export const GifsApp = () => {
  const { gifs, previousSearches, handleSearch, handleLabelClicked } =
    useGifs();

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
