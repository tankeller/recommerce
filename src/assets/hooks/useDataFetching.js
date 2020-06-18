import { useState, useEffect } from 'react';
import axios from 'axios';

function useDataFetching(dataSource, data) {
  const [loading, setLoading] = useState(true);
  const [results, setResults] = useState([]);
  const [error, setError] = useState('');
  const [requestData] = useState(data);

  useEffect(() => {
    axios
      .post(dataSource, requestData)
      .then((response) => {
        setResults(response.data);
        setLoading(false);
      })
      .catch((error) => {
        setLoading(false);
        setError(error);
      });
  }, [dataSource, requestData]);

  return {
    loading,
    results,
    error,
  };
}

export default useDataFetching;
