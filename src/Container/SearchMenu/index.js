import React, { useState, useEffect } from "react";
import { SearchMenuWrapper } from "./style";
import { useHistory } from "react-router-dom";
import { data } from "../Home/data";
import ProductItem from "../Home/Component/ProductItem";
import { connect } from "react-redux";
import { addProductCart } from "../Cart/actions";

const SearchMenu = ({ handleAddProductToCart }) => {
  const [searchResult, setSearchResult] = useState([]);
  const history = useHistory();

  let searchText = history.location.pathname;
  let res = searchText.slice(8);

  useEffect(() => {
    const newValue = res.toLowerCase();
    const dataFilter = data.filter((item) =>
      item.name.toLowerCase().includes(newValue)
    );
    setSearchResult(dataFilter);
  }, [searchText]);

  const handleClickAddToCart = (item) => {
    handleAddProductToCart(item);
  };

  return (
    <SearchMenuWrapper>
      <div className="window-wrapper">
        <div className="list-item">
          {searchResult.map((item) => (
            <ProductItem
              history={history}
              className="product-item"
              productItem={item}
              key={item.id}
              onClick={() => handleClickAddToCart(item)}
            />
          ))}
        </div>
      </div>
    </SearchMenuWrapper>
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

export default connect(mapStateToProps, mapDispatchToProps)(SearchMenu);
