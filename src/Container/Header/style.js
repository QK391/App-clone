import styled from "styled-components";
export const HeaderWrapper = styled.div`
  height: 80px;
  background-color: #000;
  .window-wrapper {
    width: 1300px;
    margin: 0 auto;
    display: flex;
  align-items: center;
  }
.namestort{
  color: #fff;
  font-size: 25px;
  margin: -57px 100px 0;
}
  .image {
    width: 70px;
    height: 80px;
    margin-right: 50px;
  }

  .input {
    width: 500px;
    padding: 0 8px;
    margin: 17px 0 -45px;
  }

  .cart-btn {
    margin: 26px 115px 0;
    color: #fff;
    position: relative;
    font-size: 1.1rem;
    &:after {
      position: absolute;
      top: -20px;
      right: -10px;
      content: "${(props) => props.quantity}";
      min-width: 25px;
      min-height: 25px;
      border-radius: 50%;
      background: yellow;
      display: flex;
      justify-content: center;
      align-items: center;
      color: #000;
    }
  }
`;
