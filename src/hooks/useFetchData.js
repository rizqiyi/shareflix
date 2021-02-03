import { useEffect, useState } from "react";

const useFetchData = (params, cond = false) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const res = await fetch(params);

      const data = await res.json();

      setData(cond ? data : data.results);
      setLoading(false);
    };

    fetchData();
  }, [params, cond]);

  return [data, loading];
};

export default useFetchData;
