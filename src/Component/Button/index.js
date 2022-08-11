import React from "react";
import { ButtonWrapper } from "./style";
import PropTypes from 'prop-types';
const Button = ({ icon,type, onClick, name, className}) => {
    return(
        <ButtonWrapper type={type} className={className} onClick={onClick}>
            {icon} {name}
        </ButtonWrapper>
    );
}
export default Button;
Button.propTypes = {
    icon: PropTypes.object,
    type: PropTypes.string,
    onClick: PropTypes.func,
    name: PropTypes.object,
    className: PropTypes.string
}
