import React from "react";
import { ProductItems } from "./style";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import Button from "./../../../../Component/Button";
import PropTypes from "prop-types";
const ProductItem = ({ productItem, className, onClick, history }) => {
  const { id, src, name, price} = productItem;
  const formatPrice = new Intl.NumberFormat().format(price);
  const handleClickToDetail = (id) => {
    history.push(`/thong-tin-san-pham/${id}`);
  };
  return (
    <ProductItems className={className}>
      <div className="content">
        <img src={src} alt={name} onClick={() => handleClickToDetail(id)} />
        <hr />
        <h3 className="name-product" onClick={() => handleClickToDetail(id)}>
          {name}
        </h3>
        <span className="price">{formatPrice}</span>
        <Button
          name="Thêm vào giỏ hàng"
          type="add to cart"
          className="btn-cart"
          icon={<FontAwesomeIcon icon={faShoppingCart} />}
          onClick={onClick}
        />
      </div>
    </ProductItems>
  );
};
export default ProductItem;
ProductItem.propTypes = {
  productItem: PropTypes.object,
  className: PropTypes.string,
  onClick: PropTypes.func,
  history: PropTypes.object
};
