import React, { useEffect, useState } from "react";
import SideBarItem from "./Component/SideBarItem";
import { HomeWrapper, NavbarWrapper, ProductWrapper } from "./style";
import { connect } from "react-redux";
import { data } from "./data";
import { handleInitProduct } from "./actions";
import SortList from "./Component/SortList";
import _ from 'lodash';
import _reverse from "lodash/reverse";
import ProductItem from "./Component/ProductItem";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { addProductCart } from "../Cart/actions";
import Slider from "react-slick";
const Home = ({ handleInitProduct, product, handleAddProductToCart, history }) => {
    const Navbars = [
        {
            id: 1,
            name: 'Loại Súng',
            subNavbar: [
                {
                    id: 1,
                    name: "Súng Ngắn"
                },
                {
                    id: 2,
                    name: "Súng Trường Dùng Điện"
                },
                {
                    id: 3,
                    name: "Súng Trường Dùng Gas"
                },
                {
                    id: 4,
                    name: "Súng Bắn Tỉa"
                },
                {
                    id: 5,
                    name: "Súng Cổ"
                }
            ]
        },
        {
            id: 2,
            name: 'Nhà Sản Xuất',
            subNavbar: [
                {
                    id: 6,
                    name: "WE Tech"
                },
                {
                    id: 7,
                    name: "Cybergun"
                },
                {
                    id: 8,
                    name: "Umarex"
                },
                {
                    id: 9,
                    name: "ARES"
                },
                {
                    id: 10,
                    name: "ARCTURUS"
                },
                
            ]
        }
    ]

    useEffect(() => {
        handleInitProduct(data);
    }, []);
    const { listProduct } = product;

    const [active, setActive] = useState("");
    const [selectSort, setSelectSort] = useState([]);
    const [groupProduct, setGroupProduct] = useState('');
    const handleClickActive = name => {
        setSelectSort(0)
        setActive(name);
        const filterProduct = _.filter(listProduct, item => item.type === name || item.manufacturer === name);
        setGroupProduct(filterProduct);
    }
    const datas = groupProduct ? groupProduct : listProduct;
    const handleClickAddToCart = item => {
        handleAddProductToCart(item);
    }

    const compareScore = (o1, o2) => {
        if (o1.price > o2.price) {
          return 1;
        } else if (o1.price < o2.price) {
          return -1;
        }
        return 0;
      };
    
      const compareName = (o1, o2) => {
        if (o1.name > o2.name) {
          return 1;
        } else if (o1.name < o2.name) {
          return -1;
        }
        return 0;
      };
    
      const handleSelectSort = (event) => {
        setActive("")
        const { value } = event.target;
        setSelectSort(+value);
        let newList = [];
        if (+value === 1) {
          newList = [...listProduct].sort(compareScore);
        } else if (+value === 2) {
          newList = _reverse([...listProduct.sort(compareScore)]);
        } else if (+value === 3) {
          newList = [...listProduct].sort(compareName);
        } else if (+value === 4) {
          newList = _reverse([...listProduct].sort(compareName));
        } else {
          newList = data;
        }
        setGroupProduct(newList)
      };

      const slider = {
        fade: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000,
        cssEase: "linear"
      };
      
      const listCarousel = [
        "/Assets/Images/Banner/banner-1.png",
        "/Assets/Images/Banner/banner-2.png",
        "/Assets/Images/Banner/banner-3.png",
        "/Assets/Images/Banner/banner-4.png",
        "/Assets/Images/Banner/banner-5.png",
        "/Assets/Images/Banner/banner-6.png",
        "/Assets/Images/Banner/banner-7.png",
      ]

    return (
        <HomeWrapper className="container home">
            <div className="banner-carousel">
            <Slider {...slider}>
            {listCarousel.map((item) => (
              <img src={item} />
            ))}
          </Slider>
            </div>
            <div className="content">
            <NavbarWrapper className="navbar">
                <h4 className="text">Lọc Sản Phẩm</h4>
                <ul>
                    {Navbars.map(item => <SideBarItem
                        handleClickActive={handleClickActive}
                        products={listProduct}
                        sideBarItem={item}
                        key={item.id}
                        active={active}
                    />)
                    }
                </ul>
                <h4 className="text">Sắp Xếp Sản Phẩm</h4>
                    <SortList
                    selectSort={selectSort}
                    handleSelectSort={handleSelectSort}
                    />
            </NavbarWrapper>
            <ProductWrapper className="row">
                {datas.map(item =>
                    <ProductItem
                        history={history}
                        className="col-lg-3 col-md-6 product-item"
                        productItem={item}
                        key={item.id}
                        onClick={() => handleClickAddToCart(item)}
                    />)
                }
            </ProductWrapper>
            </div>
        </HomeWrapper>
    );
}
const mapStateToProps = state => {
    return {
        product: state.product,
    }
}
const mapDispatchToProps = dispatch => {
    return {
        handleInitProduct: data => dispatch(handleInitProduct(data)),
        handleAddProductToCart: data => dispatch(addProductCart(data)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);

