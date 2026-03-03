interface SearchBarProps {
  placeholder?: string;
}

export const SearchBar = ({
  placeholder = 'Buscar gifs...',
}: SearchBarProps) => {
  return (
    <div className="search-container">
      <input type="text" placeholder={placeholder} className="search-input" />
      <button className="search-button">Buscar</button>
    </div>
  );
};
