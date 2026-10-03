const SearchBar = ({ value, onChange }) => (
  <label className="search-box">
    <span className="sr-only">Buscar por marca o modelo</span>
    <input
      type="search"
      value={value}
      onChange={(event) => onChange(event.target.value)}
      placeholder="Buscar por marca o modelo..."
    />
  </label>
);

export default SearchBar;
