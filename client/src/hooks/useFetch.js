import { useEffect, useState } from "react";
import axios from "axios";

// Your backend API URL
const BASE_URL = "https://make-my-trip-api.onrender.com";

const useFetch = (endpoint) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true); 
  const [error, setError] = useState(null);     

  const fetchData = async () => {
    setLoading(true);
    try {
      const res = await axios.get(`${BASE_URL}${endpoint}`, { withCredentials: true });
      setData(res.data);
      setError(null);
    } catch (err) {
      setError(err);
      setData(null);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, [endpoint]); // 🔥 renamed to endpoint

  const reFetch = () => {
    fetchData();
  };

  return { data, loading, error, reFetch };
};

export default useFetch;
