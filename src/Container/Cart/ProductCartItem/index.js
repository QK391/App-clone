import React, { useState } from "react";
import { ProductCartItems } from "./style";
import Input from './../../../Component/Input';
import Button from "../../../Component/Button";
const ProductCartItem = ({ productCartItem, onChange, wait, onIncrease, onDecrease }) => {

    return (
        <ProductCartItems className="a">
            <div className="left">
                <img src={productCartItem.src} alt="" className="image"/>
                <div className="info">
                    <h3 className="name-product">
                        {productCartItem.name}
                    </h3>
                    <h4 className="name-genre">
                        Mã sản phẩm: {productCartItem.code}
                    </h4>
                    <h4 className="name-genre">
                        Loại Súng: {productCartItem.type}
                    </h4>
                </div>

            </div>
            <div className="right">
                <p>Số lượng: {productCartItem.quantity}</p>
                <p className="price">
                    {new Intl.NumberFormat().format(productCartItem.price)}
                </p>
                <Input
                    type="checkbox"
                    name="checkProduct"
                    className="checkProduct"
                    value=""
                    onChange={() => onChange(productCartItem)}
                    checked={productCartItem.length || productCartItem.status}
                />
                <Button name="+" className="button" onClick={() => onIncrease(productCartItem)}/>
                <Button name="-" className="button" onClick={() => onDecrease(productCartItem)}/>
                <span className="wait">
                    {wait}
                </span>
            </div>
        </ProductCartItems>
    );
}

export default ProductCartItem;
