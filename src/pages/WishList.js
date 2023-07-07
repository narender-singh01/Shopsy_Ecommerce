import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../redux/slice/CartSlice";
import {
  clearWishList,
  removeItemFromWishList,
} from "../redux/slice/WishListSlice";
import { EmptyCart } from "../components/Cartfunctions/CartFunctions";
import EmptyCarts from "../components/EmptyCart/EmptyCarts";
import { Link } from "react-router-dom";

const WishList = () => {
  const dispatch = useDispatch();
  const WishListProducts = useSelector((state) => state.wishList);
  return (
    <div>
      {WishListProducts.wishList.length > 0 ? (
        <div className="cart-wrap">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                {/* <div className="main-heading mb-10">My wishlist</div> */}
                <div className="table-wishlist">
                  <table
                    cellPadding={0}
                    cellSpacing={0}
                    border={0}
                    width="100%"
                  >
                    <thead>
                      <tr>
                        <th width="45%">Product Name</th>
                        <th width="15%">Unit Price</th>
                        <th width="15%">Stock Status</th>
                        <th width="15%" />
                        <th width="10%" />
                      </tr>
                    </thead>
                    {WishListProducts?.wishList?.map((item) => {
                      return (
                        <>
                          <tbody>
                            <tr>
                              <td width="45%">
                                <div className="display-flex align-center">
                                  <div className="img-product">
                                    <img
                                      src={item.thumbnail}
                                      alt=""
                                      className="mCS_img_loaded"
                                    />
                                  </div>
                                  <div className="name-product">
                                    {item.title}
                                  </div>
                                </div>
                              </td>
                              <td width="15%" className="price">
                                $ {item.price}
                              </td>
                              <td width="15%">
                                <span className="in-stock-box">
                                  {item.stock}
                                </span>
                              </td>
                              <td width="15%">
                                <button
                                  className="round-black-btn small-btn"
                                  onClick={() => {
                                    dispatch(addToCart(item));
                                  }}
                                >
                                  Add to Cart
                                </button>
                              </td>
                              <td width="15%">
                                <button
                                  className="round-black-btn small-btn"
                                  onClick={() => {
                                    dispatch(removeItemFromWishList(item));
                                  }}
                                >
                                  Remove
                                </button>
                              </td>
                              <td width="10%" className="text-center">
                                <a href="#" className="trash-icon">
                                  <i className="far fa-trash-alt" />
                                </a>
                              </td>
                            </tr>
                          </tbody>
                        </>
                      );
                    })}
                    <div>
                      <div className="continue__btn update__btn">
                        <Link
                          onClick={() => {
                            dispatch(clearWishList());
                          }}
                        >
                          {" "}
                          Update WishList
                        </Link>
                      </div>
                    </div>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <>
          <EmptyCart>Your Cart is Empty</EmptyCart>
          <EmptyCarts />
        </>
      )}
    </div>
  );
};

export default WishList;
