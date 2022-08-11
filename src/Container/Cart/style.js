import styled, {keyframes} from "styled-components";
const animationModal = keyframes`
    from {
        transform: scale(0);
    }
    to {
        transform: scale(1);
    }
`
export const CartWrapper = styled.div`
    padding: 3rem 0 6rem 0;
    position: relative;
    .empty {
        width: 50%;
        margin: 4rem auto;
        display: flex;
        flex-direction: column;
        align-items: center;
        & > img {
            width: 35%;
        }
        .name-empty {
            color: #cacaca;
            margin: .35rem 0;
        }
    }
    .sum {
        font-size: 2rem;
        margin: 1rem .35rem;
        font-weight: 700;
        color: red;
        text-align: right;
        &:before {
            content: 'Tổng:';
            color: #000;
        }
    }
    .btn-buy {
        padding: .75rem 3rem;
        border-radius: 5px;
        font-weight: 700;
        text-transform: uppercase;
        float: right;
    }
    .modal-buy {
        width: 80%;
        height: 80vh;
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        z-index: 999;
        background: #fff;
        border-radius: 5px;
        box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
        transition: .35s;
        overflow: auto;
        animation: animationModal 3s linear forwards;
        & > div .right input{
            display: none;
        }
        .close {
            position: -webkit-sticky;
            position: sticky;
            top: 10px;
            right: 10px;
            text-align: right;
            z-index: 9999;
            font-size: 1.5rem;
            display: block;
            padding: .75rem 1rem;
            & > svg {
                cursor: pointer;
            }
        }
    }
`