import React, { useEffect, useState } from "react";
import { SliderBarItems } from "./style";
import _ from 'lodash';
import PropTypes from 'prop-types';
const SubNavbarItem = ({subNavbarItem: {name}, className, onClick, products}) => {
    const [quantity, setQuantity] = useState([]);
    useEffect(() => {
        const data = _.filter(products, item => item.type === name || item.manufacturer === name);
        setQuantity(data.length)
    },[quantity])
    return(
        <li className={`sub-navbar-item ${className}`} onClick={onClick}>
            {name}
            <span className="quantity">
                ({quantity})
            </span>
        </li>
    );
}
const SideBarItem = ({sideBarItem, products, handleClickActive,active}) => {
    const {id, name, subNavbar} = sideBarItem;
    return(
        <SliderBarItems className="sidebar-item">
            <h4 className="name-sidebar">
                {name}
            </h4>
            <ul className="sub-navbar">
                {subNavbar.map(item =>
                <SubNavbarItem
                products={products}
                className={active === item.name && active && 'active'}
                onClick={() => handleClickActive(item.name)}
                subNavbarItem={item}
                key={item.id}/>)}
            </ul>
        </SliderBarItems>
    );
}
export default SideBarItem;
SideBarItem.propTypes = {
    sideBarItem: PropTypes.object,
    products: PropTypes.array,
    handleClickActive: PropTypes.func,
    active: PropTypes.string
}
SubNavbarItem.propTypes = {
    subNavbarItem: PropTypes.object,
    className: PropTypes.bool,
    onClick: PropTypes.func,
    products: PropTypes.array
}