
import { useState, useEffect } from "react";
import localProducts from "./produkter.json";

function useProductData() {
  const [products, setProducts] = useState([]);

  useEffect(() => {

    const fetchProducts = async () => {

      setTimeout(() => {
        setProducts(localProducts);
      }, 1000);
    };
    fetchProducts();
  }, []);

  return products;
}

export default useProductData;