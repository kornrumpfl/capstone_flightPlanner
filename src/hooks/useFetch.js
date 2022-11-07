import { useEffect, useState } from "react";

export default function useFetch(url) {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData();
  }, [url]);

  async function fetchData() {
    try {
      const response = await fetch(url);
      const newData = await response.json();
      setData(newData);
    } catch (error) {
      console.log(error);
    }
  }

  return [data, fetchData];
}
