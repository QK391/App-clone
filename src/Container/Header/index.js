import React, { useEffect, useState } from "react";
import { HeaderWrapper } from "./style";
import Input from "./../../Component/Input";
import Button from "./../../Component/Button";
import { Link, useHistory } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { connect } from "react-redux";
import { data } from "../Home/data";
import _ from "lodash";
import { handleInitProductSearch } from "./actions";
import PropTypes from "prop-types";
const Header = (props) => {
  const { handleInitProductSearch, products, carts } = props;

  const history = useHistory();
  const handleClickToCart = () => {
    history.push(`/gio-hang`);
  };
  const { cartStore } = carts;
  useEffect(() => {
    handleInitProductSearch(data);
  }, []);

      const [inputSearch, setInputSearch] = useState("")

    const handleInputSearch = (event) => {
        const value = event.target.value;
        setInputSearch(value)
      }

      const handleRedirectToSearch = (event) => {
           if (event.key === "Enter") {
            history.push(`/search/${inputSearch}`)
           }
      }

  return (
    <HeaderWrapper quantity={cartStore.length}>
      <div className="window-wrapper">
        <Link to="">
        <img src="/Assets/Images/Logo/newlogo.jpg" className="image" /> 
        <h1 className="namestort">QK Stort Airsoft Game</h1>
        </Link>
        
        <Input
          className="input"
          type="text"
          placeholder="Tìm sản phẩm"
          value={inputSearch}
          onChange={handleInputSearch}
          onKeyPress={handleRedirectToSearch}
        />
        <Button
          name={<FontAwesomeIcon icon={faShoppingCart} />}
          type="cart"
          className="cart-btn"
          onClick={handleClickToCart}
        />
      </div>
    </HeaderWrapper>
  );
};
const mapStateToProps = (state) => {
  return {
    products: state.searchProduct,
    carts: state.cartsReducer,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    handleInitProductSearch: (data) => dispatch(handleInitProductSearch(data)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
Header.propTypes = {
  handleInitProductSearch: PropTypes.func.isRequired,
  products: PropTypes.object,
  carts: PropTypes.object,
};
