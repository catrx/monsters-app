import { useEffect, useState } from 'react';
import { Monster } from '../types';

interface IUseMonsters {
  data: Monster[];
  loading: boolean;
  error: any;
}

const useMonsters = (url: string): IUseMonsters => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<any>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url);

        if (response.ok) {
          const json = await response.json();

          setData(json.results);
          setLoading(false);
        } else {
          throw new Error(`Error with status ${response.status}`);
        }
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };

    fetchData();
  }, [url]);

  return { data, loading, error };
};

export default useMonsters;
