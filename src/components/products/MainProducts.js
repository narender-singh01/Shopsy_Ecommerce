import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { addToCart } from "../../redux/slice/CartSlice";
import { productsFetch } from "../../redux/slice/productSlice";
import { useDispatch, useSelector } from "react-redux";
import { STATUS } from "../../context/Status";
import Detail from "../../utils/skeleton/Detail";
import { ActionButton } from "../Cartfunctions/CartFunctions";
import { addToWishList } from "../../redux/slice/WishListSlice";

const MainProducts = () => {
  const dispatch = useDispatch();
  const { products, status } = useSelector((state) => state.products);
  useEffect(() => {
    dispatch(productsFetch());
  }, []);
  if (status === STATUS.LOADING) {
    return <Detail />;
  }
  if (status !== STATUS.LOADING && status === STATUS.ERROR) {
    return <h2>{status}</h2>;
  }

  return (
    <>
    
      {/* <div className="row">
        <div className="gallery">
          {products.products?.map((item) => {
            return (
              <>
                <div className="content">
                  <Link to="/shop-details" state={{ data: item }}>
                    <img className="imgs" src={item.thumbnail} />
                  </Link>
                  <h3 className="h3s">{item.title}</h3>
                  <p className="ps">{}</p>
                  <h6 className="h6s">${item.price}</h6>
                  <ul className="uls">
                    <li className="lis">
                      <i className="fa fa-star" aria-hidden="true" />
                    </li>
                    <li className="lis">
                      <i className="fa fa-star" aria-hidden="true" />
                    </li>
                    <li className="lis">
                      <i className="fa fa-star" aria-hidden="true" />
                    </li>
                    <li className="lis">
                      <i className="fa fa-star-o" aria-hidden="true" />
                    </li>
                    <li className="lis">
                      <i className="fa fa-star-o" aria-hidden="true" />
                    </li>
                    <li className="lis">
                      <i className="fa fa-heart"  onClick={() => {
                      dispatch(addToWishList(item));
                    }} aria-hidden="true" />
                    </li>
                   
                  </ul>

                  <button
                    className="buttons"
                    onClick={() => {
                      dispatch(addToCart(item));
                    }}
                    
                  >
                    Add To Cart
                  </button>
                  
                </div>
              </>
            );
          })}
        </div>
      </div> */}
      <div className="card-body">
        <div className="row">
          {products?.products?.map((item) => {
            return (
              <>
                <div className="col-md-3 mb-3">
                  <div className="card">
                    <Link to="/shop-details" state={{ data: item }}>
                      <img
                        className="card-img-top"
                        style={{ height: "160px", width: "" }}
                        src={item.thumbnail}
                        alt=""
                      />
                    </Link>
                    <div className="card-body">
                      <p className="h6">
                        <small className="text-muted">{item.brand}</small>
                        <br />
                        {item.title}
                      </p>
                      {item.rating <= 4.5 ? (
                        <p className="m-0">
                          <i className="fa-xs fa fa-star" />
                          <i className="fa-xs fa fa-star" />
                          <i className="fa-xs fa fa-star" />
                          <i className="fa-xs fa fa-star" />
                          <i className="fa fa-star-o" />
                        </p>
                      ) : (
                        <p className="m-0">
                          <i className="fa-xs fa fa-star" />
                          <i className="fa-xs fa fa-star" />
                          <i className="fa-xs fa fa-star" />
                          <i className="fa-xs fa fa-star" />
                          <i className="fa-xs fa fa-star" />
                        </p>
                      )}
                      {/* <span style={{backgroundColor:"green", color:"white"}}>{item.rating}  
                                  <i className="fa fa-star-o"/>
                                  
                                   </span> */}
                      <p className="h5 m-0">${item.price}</p>
                    </div>
                    <div className="card-footer p-0">
                      <div className="btn-group" role="group">
                        <button
                          type="button"
                          className="btn btn-light"
                          onClick={() => {
                            dispatch(addToCart(item));
                          }}
                        >
                          <span>Add Cart</span>
                          {/* <i
                            style={{ color: "#EC473F" }}
                            className="fa fa-cart-plus"
                          /> */}
                        </button>
                        <button type="button" className="btn btn-light">
                          <i
                            style={{ color: "#EC473F" }}
                            className="fa fa-shopping-cart"
                          />
                        </button>
                        <button
                          type="button"
                          className="btn btn-light"
                          onClick={() => {
                            dispatch(addToWishList(item));
                          }}
                        >
                          <i
                            style={{ color: "#EC473F" }}
                            className="fa fa-heart"
                          />
                        </button>
                        <button type="button" className="btn btn-light">
                          <i
                            style={{ color: "#EC473F" }}
                            className="fa fa-exchange"
                          />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </div>
      
    </>
  );
};

export default MainProducts;
{
  /* <div className="content">
<img className="imgs" src="earphone.png" />
<h3 className="h3s">Earphone</h3>
<p className="ps">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
<h6 className="h6s">$40.00</h6>
<ul className="uls">
  <li>
    <i className="fa fa-star" aria-hidden="true" />
  </li>
  <li>
    <i className="fa fa-star" aria-hidden="true" />
  </li>
  <li>
    <i className="fa fa-star" aria-hidden="true" />
  </li>
  <li>
    <i className="fa fa-star" aria-hidden="true" />
  </li>
  <li>
    <i className="fa fa-star" aria-hidden="true" />
  </li>
</ul>
<button className=" buttons">Buy Now</button>
</div>
<div className="content">
<img className="imgs" src="watch.png" />
<h3 className="h3s">Watch</h3>
<p className="ps">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
<h6 className="h6s">$70.84</h6>
<ul className="uls">
  <li>
    <i className="fa fa-star" aria-hidden="true" />
  </li>
  <li>
    <i className="fa fa-star" aria-hidden="true" />
  </li>
  <li>
    <i className="fa fa-star" aria-hidden="true" />
  </li>
  <li>
    <i className="fa fa-star" aria-hidden="true" />
  </li>
  <li>
    <i className="fa fa-star" aria-hidden="true" />
  </li>
</ul>
<button className="buttons">Buy Now</button>
</div> */
}
