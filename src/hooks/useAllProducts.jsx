import axios from "axios";
import { useEffect, useState } from "react";

const useAllProducts = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get("https://api.restful-api.dev/objects").then((res) => {
      setProducts(res.data);
    });
  }, []);
  return [products];
};

export default useAllProducts;
