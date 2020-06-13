import { useState, useEffect } from 'react';
import axios from 'axios';

function useDataFetching(dataSource, data = {}) {
  const [loading, setLoading] = useState(true);
  const [results, setResults] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    axios
      .post(dataSource, data)
      .then((response) => {
        setResults(response.data);
        setLoading(false);
      })
      .catch((error) => {
        setLoading(false);
        setError(error);
      });
  }, [dataSource, data]);

  return {
    loading,
    results,
    error,
  };
}

export default useDataFetching;
