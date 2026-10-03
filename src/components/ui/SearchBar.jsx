import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";

const SearchBar = ({ value, onChange }) => {
  return (
    <label className="search-box">
      <span className="sr-only">Buscar por marca o modelo</span>
      <MagnifyingGlassIcon className="search-icon" />
      <input
        type="search"
        value={value}
        onChange={(event) => onChange(event.target.value)}
        placeholder="Buscar por marca o modelo..."
      />
    </label>
  );
}

export default SearchBar;
