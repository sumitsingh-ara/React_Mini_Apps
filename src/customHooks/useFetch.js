import { useEffect, useState } from "react";
import {debounce} from "../utilis/debounce"
export const useFetch = (url) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [data, setData] = useState([]);

  useEffect(() => {
    if(!url) return
    
    const makeApiCall = async () => {
      setLoading(true);
      // console.log("APi Called")
      try{
        let data = await fetch(url);
        data = await data.json();
        if(data.Search)setData(data.Search);
        else setData([])
        setLoading(false)
      }catch(err){
        setLoading(false);
        setError(true);
      }
    }
    debounce(makeApiCall,700);
  }, [url]);
  return {
    data,
    error,
    loading,
  };
};
