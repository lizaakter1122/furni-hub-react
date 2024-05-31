/* eslint-disable react/prop-types */

import "./Product.css";

function Product({ product, handleAddToCart }) {
  const { name, image, price, in_stock, description, category } = product;



  return (
    <div className="card card-compact w-96 bg-base-100 shadow-xl">
      <figure>
        <img
          src={image}
          alt="Shoes"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <h2 className="card-subtitle">{in_stock}</h2>
        <h2 className="card-subtitle">{category}</h2>
        <h2 className="card-subtitle">{price}</h2>
        <p>{description}</p>
        <div className="card-actions justify-end">
          <button onClick={()=>handleAddToCart(product)} className="btn btn-primary">Add To Cart</button>
        </div>
      </div>
    </div>
  );
}

export default Product;
