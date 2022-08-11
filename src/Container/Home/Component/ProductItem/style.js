import styled from "styled-components";
export const ProductItems = styled.div`
    padding: .2rem 1rem;
    .content {
        border: 1px solid #ccc;
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: .5rem  1rem;
        & > img {
            width: 100%;
            object-fit: fill;
            cursor: pointer;
            min-height: 198px;
            margin: .3rem 0;
        }
        hr {
            width: 100%;
            margin: .2rem 0;
        }
        .name-product {
            font-size: 1rem;
            min-height: 40px;
            cursor: pointer;
            width: 200px;
            margin: 0 auto;
            text-align: center;
        }
        .price {
            color: #71a1e0;
            font-weight: bold;
            display: block;
            width: 100%;
            text-align: right;
            margin: .3rem 0;
        }
        .btn-cart {
            padding: .2rem 0;
            width: 100%;
            font-weight: 500;
            text-transform: capitalize;
            border-radius: 5px;
            & > svg {
                margin-right: .2rem;
            }
        }
    }
`