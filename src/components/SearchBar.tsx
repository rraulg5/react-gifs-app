import { useEffect, useState } from "react";

interface SearchBarProps {
  placeholder?: string;
  onSearch: (search: string) => void;
}

export const SearchBar = ({
  placeholder = 'Buscar gifs...',
  onSearch
}: SearchBarProps) => {

  const [search, setSearch] = useState('');
  useEffect(() => {
    const timeOutId = setTimeout(() => {
      onSearch(search);
    }, 700);

    return () => clearTimeout(timeOutId);

  }, [search, onSearch]);

  const handleSearch = () => {
    onSearch(search)
    setSearch('');
  }

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if(event.key === 'Enter') {
      handleSearch();
    }
  }

  return (
    <div className="search-container">
      <input type="text" placeholder={placeholder} className="search-input" value={search} onChange={(event) => setSearch(event.target.value)} onKeyDown={handleKeyDown} />
      <button className="search-button" onClick={handleSearch}>Buscar</button>
    </div>
  );
};
