import { useCallback } from 'react';

interface ISearchBarProps {
  searchTerm: string | null;
  setSearchTerm: (input: string) => void;
}

const SearchBar = ({ searchTerm, setSearchTerm }: ISearchBarProps) => {
  const handleChange = useCallback(
    (e: { target: HTMLInputElement }) => {
      setSearchTerm(e.target.value);
    },
    [setSearchTerm],
  );

  return (
    <form>
      <input
        data-testid='search-bar'
        type='text'
        className='p-2 rounded border border-gray-200 focus:bg-white focus:outline-none focus:ring-2 focus:border-transparent box-border w-full'
        placeholder='Rechercher un monstre par son nom...'
        value={searchTerm || ''}
        onChange={handleChange}
      />
    </form>
  );
};

export default SearchBar;
