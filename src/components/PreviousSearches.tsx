interface PreviousSearchesProps {
  searches: string[];
}

export const PreviousSearches = ({ searches }: PreviousSearchesProps) => {
  return (
    <div className="previous-searches">
      <h2>Busquedas anteriores</h2>
      <ul className="previous-searches-list">
        {searches.map((search, index) => (
          <li key={index}>{search}</li>
        ))}
      </ul>
    </div>
  );
};
