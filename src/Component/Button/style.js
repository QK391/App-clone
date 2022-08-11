import styled from "styled-components";
const setBackground = type => {
    switch (type) {
        case 'add to cart': {
            return '#af0007';
        }
        case 'btn-buy': {
            return '#6699CC'
        }
        default: {
            return 'transparent';
        }
    }
}
const setColor = type => {
    switch (type) {
        default: {
            return '#fff'
        }
    }
}
export const ButtonWrapper = styled.button`
    border: 0;
    background: ${props => setBackground(props.type)};
    color: ${props => setColor(props.type)};
    outline: none;

`