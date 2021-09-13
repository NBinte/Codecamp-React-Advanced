import { useState, useEffect, useCallback } from "react";

export const useFetch = (url) => {
  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState([]);

  const getProducts = useCallback(async () => {
    console.log("inside getProducts");
    const response = await fetch(url);
    const products = await response.json();

    setProducts(products);
    setLoading(false);
  }, [url]);

  useEffect(() => {
    console.log("inside useEffect");
    getProducts();
  }, [url, getProducts]);

  return { loading, products };
};
