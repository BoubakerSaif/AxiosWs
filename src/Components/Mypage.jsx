import axios from "axios";
import { useEffect, useState } from "react";

const Mypage = () => {
  const [products, setProducts] = useState();

  const fetchData = async () => {
    try {
      const { data } = await axios.get("https://fakestoreapi.com/products");
      setProducts(data);
    } catch (error) {
      // Handle error
      console.error(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div>
      {products?.map((el) => (
        <img src={el.image} key={el.id} width={"100px"} />
      ))}
    </div>
  );
};

export default Mypage;
