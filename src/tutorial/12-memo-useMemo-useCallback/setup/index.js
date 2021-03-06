import React, { useState, useEffect, useCallback, useMemo } from "react";
import { useFetch } from "../../9-custom-hooks/setup/2-useFetch";

// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = "https://course-api.com/javascript-store-products";

// every time props or state changes, component re-renders

const calculateMostExpensive = (data) => {
  console.log("boop");
  return (
    data.reduce((initialValue, currentValue) => {
      //item is each element of data array that is an object
      const price = currentValue.fields.price;

      if (price >= initialValue) {
        initialValue = price;
      }
      return initialValue;
    }, 0) / 100
  );
};

const Index = () => {
  const { products } = useFetch(url);
  const [count, setCount] = useState(0);

  const [cart, setCart] = useState(0);

  // console.log(cart);

  const addToCart = useCallback(() => {
    setCart(cart + 1);
  }, [cart]);

  const mostExpensive = useMemo(
    () => calculateMostExpensive(products),
    [products]
  );

  return (
    <>
      <h1>Count : {count}</h1>
      <button className="btn" onClick={() => setCount(count + 1)}>
        click me
      </button>
      <h1 style={{ marginTop: "3rem" }}>Cart: {cart}</h1>
      <h1> Most Expensive: ${mostExpensive}</h1>
      <BigList products={products} addToCart={addToCart} />
    </>
  );
};

const BigList = React.memo(({ products, addToCart }) => {
  useEffect(() => {
    console.log("big list called");
  });
  return (
    <section className="products">
      {products.map((product) => {
        return (
          <SingleProduct
            key={product.id}
            {...product}
            addToCart={addToCart}
          ></SingleProduct>
        );
      })}
    </section>
  );
});

const SingleProduct = ({ fields, addToCart }) => {
  useEffect(() => {
    console.count("single product called");
  });
  let { name, price } = fields;
  price = price / 100;
  const image = fields.image[0].url;

  return (
    <article className="product">
      <img src={image} alt={name} />
      <h4>{name}</h4>
      <p>${price}</p>
      <button onClick={addToCart}>Add to cart</button>
    </article>
  );
};
export default Index;
