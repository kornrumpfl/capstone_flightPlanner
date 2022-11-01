import { useEffect, useState } from "react";

export default function useFetch(url) {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData();
  },[]);
 
  async function fetchData(newUrl) {
    const response = await fetch(url);
    const newData = await response.json();
    if (response.status === 200) {
        console.log("got here")
      setData(newData?.name?.value);
    } else {
      console.error("Opps, something went wrong!");
    }
  }

  return [data, fetchData];
}