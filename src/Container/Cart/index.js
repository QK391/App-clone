import React, { useEffect, useState } from 'react';
import { CartWrapper } from './style';
import { connect } from 'react-redux'
import ProductCartItem from './ProductCartItem';
import { deleteProductCart, handleChangeStatus, increaseQuantity, decreaseQuantity  } from './actions';
import _ from 'lodash';
import Button from './../../Component/Button';
import PropTypes from 'prop-types';
const Cart = ({ carts: { cartStore }, handleChangeStatus, handleIncreaseQuantity, handleDecreaseQuantity}) => {
    const [sum, setSum] = useState(0);
    const [check, setCheck] = useState(false)
    const handleChangeInput = (event) => {
        handleChangeStatus(event)
        setCheck(!check);
    }
    useEffect(() => {
        let sumPrice = 0;
        _.forEach(cartStore, item => {
            if (item.status) {
                sumPrice += item.price * item.quantity
            }
        })
        setSum(sumPrice);
    }, [cartStore]);
    const handleClickBuy = () => {
        alert("Đơn hàng của bạn đã được gửi đi");
    }


    const handleIncrease = (item) => {       
        handleIncreaseQuantity(item)
    }

    const handleDecrease = (item) => {
        handleDecreaseQuantity(item)
    }
    
    return (
        <CartWrapper className="container">
            {!cartStore.length &&
                <div className="empty">
                    <img src="https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg/assets/9bdd8040b334d31946f49e36beaf32db.png" alt="empty" />
                    <h3 className="name-empty">
                        Không có sản phẩm trong giỏ hàng
                    </h3>
                </div>}
            {
                cartStore.length ? cartStore.map((item, index) =>
                    <ProductCartItem
                        onChange={handleChangeInput}
                        productCartItem={item}
                        key={index}
                        onIncrease={handleIncrease}
                        onDecrease={handleDecrease}
                    />) : ''
            }
            {cartStore.length ? <p className="sum"> {new Intl.NumberFormat().format(sum)} đ</p> : ''}
            {cartStore.length ? <Button
                className="btn-buy"
                name="Mua"
                type="btn-buy"
                onClick={() => handleClickBuy(cartStore)}
            /> : ''}
        </CartWrapper>
    );
}
const mapStateToProps = state => {
    return {
        carts: state.cartsReducer
    }
}
const mapDispatchToProps = dispatch => {
    return {
        handleChangeStatus: data => dispatch(handleChangeStatus(data)),
        handleDeleteProductCart: data => dispatch(deleteProductCart(data)),
        handleIncreaseQuantity: (data) => dispatch(increaseQuantity(data)),
        handleDecreaseQuantity: (data) => dispatch(decreaseQuantity(data))

    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Cart);
Cart.propTypes = {
    carts: PropTypes.object,
    handleChangeStatus: PropTypes.func.isRequired,
    handleDeleteProductCart: PropTypes.func.isRequired
}