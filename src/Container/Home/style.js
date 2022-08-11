import styled from "styled-components";
export const HomeWrapper = styled.div `
    padding: 1rem 0;
    flex-wrap: wrap;
    .content {
        display: flex;
    }

    .banner-carousel {
      width: 100%;
      height: fit-content;
      border-radius: 5px;
      cursor: pointer;
      overflow: hidden;
      &:hover .slick-prev,
      &:hover .slick-next {
        opacity: 1;
        visibility: visible;
      }
      .slick-prev,
      .slick-next {
        width: 40px;
        height: 40px;
        z-index: 3;
        background: rgba(255, 255, 255, 0.5);
        margin: 20px;
        border-radius: 3px;
        overflow: hidden;
        color: transparent;
        opacity: 0;
        visibility: visible;

        &:before {
          font-family: "Fontawesome";
          width: 100%;
          height: 100%;
          position: absolute;
          top: 0;
          left: 0;
          content: "abc";
          display: flex;
          justify-content: center;
          align-items: center;
          color: #000;
        }
      }
      .slick-prev {
        left: 0;
        &:before {
          content: "\f104";
        }
      }
      .slick-next {
        right: 0;
        &:before {
          content: "\f105";
        }
      }
    }
`
export const NavbarWrapper = styled.div`
margin-top: 15px;
    height: 100%;
    padding: .75rem;
    background: #eeeeee;
    width: 20%;
    & > ul {
        width: 100%;
    }

    .text {
        margin: 0 auto 10px;
    }

`
export const ProductWrapper = styled.div`
    flex: 1;
    padding: .75rem;
`