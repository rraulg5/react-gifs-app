import { GifList } from './components/GifList';
import { Header } from './components/Header';
import { PreviousSearches } from './components/PreviousSearches';
import { SearchBar } from './components/SearchBar';
import { mockGifs } from './mock-data/gifs.mock';

export const GifsApp = () => {
  return (
    <>
      {/* Header */}
      <Header
        title="Buscador de Gifs"
        description="Descubre y comparte tus gifs favoritos"
      />

      {/* Search */}
      <SearchBar placeholder="Busca lo que quieras" />

      {/* Previous Searches */}
      <PreviousSearches searches={['Goku', 'Saitama', 'Demon Slayer']} />

      {/* Gifs */}
      <GifList gifs={mockGifs} />
    </>
  );
};
