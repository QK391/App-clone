import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import _, { set } from "lodash";
import { DetailWrapper } from "./style";
import { addProductCart } from "../Cart/actions";
import ProductItem from "../Home/Component/ProductItem";
import PropTypes from "prop-types";
import Button from "../../Component/Button";
const Detail = ({
  match: {
    params: { id },
  },
  product: { listProduct },
  history,
  handleAddProductToCart,
}) => {
  const [product, setProduct] = useState([]);
  useEffect(() => {
    setProduct(listProduct);
  }, []);
  const productFind = _.find(product, (item) => +item.id === +id);
  if (!productFind) return <div>Không tìm thấy sản phẩm</div>;
  const {
    src,
    name,
    code,
    weight,
    long,
    price,
    material,
    use,
    power,
    BlowBack,
    HopUp,
    FiringMode,
    SafeMode,
    AmmoTapes,
    ammo,
    manufacturer,
    type,
  } = productFind;
  let relatedProducts = [];
  _.forEach(product, (item) => {
    relatedProducts = [
      ...relatedProducts,
      product[Math.floor(Math.random() * product.length)],
    ];
  });
  const productNews = _.slice(_.uniq(relatedProducts), 0, 4);
  const handleClickAddToCart = (item) => {
    handleAddProductToCart(item);
  };

  const formatPrice = new Intl.NumberFormat().format(price);
  return (
    <DetailWrapper className="container">
      <div className="info-product">
        <img src={src} alt={name} className="image"/>
        <div className="info">
          <h3 className="name-product">{name}</h3>
          <Button className="add-btn" name="Thêm vào giỏ hàng" type="add to cart" onClick={() => handleClickAddToCart(productFind)}/>
          <table className="table">
            <tr>
              <td className="product-info">Mã sản phẩm</td>
              <td>{code}</td>
            </tr>
            <tr>
              <td className="product-info">Cân nặng</td>
              <td>{weight}</td>
            </tr>
            <tr>
              <td className="product-info">Chiều Dài</td>
              <td>{long}</td>
            </tr>
            <tr>
              <td className="product-info">Giá Tiền</td>
              <td>{formatPrice}đ</td>
            </tr>
          <tr>
            <td className="product-info">Vật Liệu</td>
            <td>{material}</td>
          </tr>
          <tr>
            <td className="product-info">Sử Dụng</td>
            <td>{use}</td>
          </tr>
          <tr>
            <td>Sức Mạnh</td>
            <td>{power}</td>
          </tr>
          <tr>
            <td className="product-info">BlowBack</td>
            <td>{BlowBack}</td>
          </tr>
          <tr>
            <td className="product-info">HopUp</td>
            <td>{HopUp}</td>
          </tr>
          <tr>
            <td className="product-info">Chế Độ Bắn</td>
            <td>{FiringMode}</td>
          </tr>
          <tr>
            <td className="product-info">Chế Độ An Toàn</td>
            <td>{SafeMode}</td>
          </tr>
          <tr>
            <td className="product-info">Băng Đạn</td>
            <td>{AmmoTapes}</td>
          </tr>
          <tr>
            <td className="product-info">Loaị Đạn</td>
            <td>{ammo}</td>
          </tr>
          <tr>
            <td>Hẫng Sản Xuất</td>
            <td>{manufacturer}</td>
          </tr>
          <tr>
            <td className="product-info">Loại Súng</td>
            <td>{type}</td>
          </tr>
          </table>
        </div>
      </div>
      <div className="related-products">
        <h3 className="title">Sản phẩm liên quan</h3>
        <div className="row">
          {productNews.map((item) => (
            <ProductItem
              history={history}
              className="col-lg-3 col-md-6 product-item"
              productItem={item}
              key={item.id}
              onClick={() => handleClickAddToCart(item)}
            />
          ))}
        </div>
      </div>
    </DetailWrapper>
  );
};
const mapStateToProps = (state) => {
  return {
    product: state.product,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    handleAddProductToCart: (data) => dispatch(addProductCart(data)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Detail);
Detail.propTypes = {
  match: PropTypes.object.isRequired,
  product: PropTypes.object,
  history: PropTypes.object,
  handleAddProductToCart: PropTypes.func.isRequired,
};
