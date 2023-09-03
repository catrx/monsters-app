import React, { useMemo, useState } from 'react';
import useMonsters from './hooks/useMonsters';
import Loader from './components/Loader/Loader';
import { Monster } from './types';
import Toast from './components/Toast/Toast';
import MonstersList from './components/MonstersList/MonstersList';
import SearchBar from './components/SearchBar/SearchBar';

const API_URL = 'https://api.open5e.com/v1/monsters/?format=json'

function App() {
  const { data, loading, error } = useMonsters(API_URL);
  const [searchTerm, setSearchTerm] = useState<string | null>(null);

  const filteredMonsters = useMemo(() => {
    if(!searchTerm) return null
    return data
      .sort((a,b) => Object.keys(b.skills).length - Object.keys(a.skills).length)
      .filter(monster => monster.name.includes(searchTerm))
  }, [data, searchTerm])

  return (
    <div className='flex justify-center p-4'>
      <Content
        data={filteredMonsters}
        loading={loading}
        error={error}
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
      />
    </div>
  );
}

interface IContentProps {
  data: Monster[] | null,
  loading: boolean,
  error: any,
  searchTerm: string | null,
  setSearchTerm: (input: string) => void
}

const Content = ({data, loading, error, searchTerm, setSearchTerm}: IContentProps) => {
  if(loading) return <Loader />

  if(error) return <Toast message={error.message} />

  return (
    <div>
      <div className="pb-2">
        <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      </div>
      <MonstersList monsters={data} />
    </div>
  )
}

export default App;
