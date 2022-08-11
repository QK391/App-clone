import styled from "styled-components";
export const SliderBarItems = styled.li`
    .name-sidebar {
        background: #ee4f4f;
        padding: .2rem 0;
        text-align: center;
        text-transform: capitalize;
        color: #fff;
        font-size: 1.1rem;
        border-radius: 5px;
    }
    .sub-navbar .sub-navbar-item {
        background: transparent;
        cursor: pointer;
        padding: .35rem 1.2rem;
        color: #000;
        display: flex;
        justify-content: space-between;
        &.active {
            color: #71a1e0;
        }
    }

`