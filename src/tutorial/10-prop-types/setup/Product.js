import React from "react";

const Product = ({ name, image, price }) => {
  console.log(name, image, price);

  return (
    <article className="product">
      {/* <img src={image.url} alt={name} />
    <h4>{name}</h4>
    <p>${price}</p> */}

      <h4>Single Product</h4>
    </article>
  );
};

export default Product;
