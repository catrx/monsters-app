import React, { useMemo } from 'react';
import useMonsters from './hooks/useMonsters';
import Loader from './components/Loader/Loader';
import { Monster } from './types';
import Toast from './components/Toast/Toast';
import MonstersList from './components/MonstersList/MonsterList';

function App() {
  const { data, loading, error } = useMonsters('https://api.open5e.com/v1/monsters/?format=json');

  const filteredMonsters = useMemo(() => {
    return data.sort((a,b) => Object.keys(b.skills).length - Object.keys(a.skills).length)
  }, [data])

  return (
    <div className='flex justify-center items-center min-h-screen p-4'>
      <Content
        data={filteredMonsters}
        loading={loading}
        error={error}
      />
    </div>
  );
}

interface IContentProps {
  data: Monster[],
  loading: boolean,
  error: any,
}

const Content = ({data, loading, error}: IContentProps) => {
  if(loading) return <Loader />

  if(error) return <Toast message={error.message} />

  return (
    <div>
      <MonstersList monsters={data} />
    </div>
  )
}

export default App;
