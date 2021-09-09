import React from "react";
import PropTypes from "prop-types";
import defaultImage from "../../../assets/default-image.jpeg";

const Product = ({ name, image, price }) => {
  // console.log(name, image, price);

  const url = image && image.url;

  return (
    <article className="product">
      <img src={url || defaultImage} alt={name || "default alt name"} />
      <h4>{name || "default name"}</h4>
      <p>${price || 3.99}</p>

      {/* <h4>Single Product</h4> */}
    </article>
  );
};

Product.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.object.isRequired,
  price: PropTypes.number.isRequired,
};

// Product.defaultProps = {
//   name: "dafault name",
//   image: { defaultImage },
//   price: 3.99,
// };

export default Product;
