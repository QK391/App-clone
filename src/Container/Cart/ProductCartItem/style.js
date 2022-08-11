import styled from "styled-components";
export const ProductCartItems = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 1.5rem 1rem;
    border-bottom: 1px solid #ccc;
    .left {
        display: flex;
    }
    .right {
        font-size: 1.5rem;
        font-weight: bold;
        .price {
            color: red;
            &:after {
                content: 'đ';
                margin-left: .25rem;
            }
            &:before {
                content: 'Giá:';
                margin-right: .35rem;
                color: #000
            }
        }
        .wait {
            color: #2a26ff
        }
    }

    .image {
        width: 350px;
        height: 200px;
    }

    .button {
        color: #000;
        width: 35px;
        margin: 0 5px;
        border: 1px solid;
        &:hover {
            background-color: #2596be;
        }
    }

    .checkProduct {
        width: 25px;
        height: 25px;
        margin: 0 10px;
    }
`
