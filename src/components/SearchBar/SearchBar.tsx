import { useCallback } from 'react';

interface ISearchBarProps {
  searchTerm: string | null,
  setSearchTerm: (input: string) => void
}

const SearchBar = ({ searchTerm, setSearchTerm }: ISearchBarProps) => {

  const handleChange = useCallback((e: { target: HTMLInputElement }) => {
    setSearchTerm(e.target.value)
  }, [setSearchTerm])

  return(
      <input type="text"
             className="p-2 rounded border border-gray-200 focus:bg-white focus:outline-none focus:ring-2 focus:border-transparent md:w-[500px] w-full"
             placeholder="Rechercher un monstre par son nom..." value={searchTerm || ''} onChange={handleChange} />
  )
}

export default SearchBar;