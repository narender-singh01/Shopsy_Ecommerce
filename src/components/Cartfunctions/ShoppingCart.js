import React from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { toggle } from "../../redux/slice/uiSlice";
import {
  IncreaseItem,
  decreaseItem,
  clearCart,
  removeItem,
} from "../../redux/slice/CartSlice";
import { cartTotalPriceSelector } from "../../redux/Selectors";
import {
  CartProductAction,
  CartProductSubtotal,
  ActionButton,
  CartProductQuantity,
  CartTotal,
  Mask,
  EmptyCart,
} from "./CartFunctions";
import basket from "../../assets/images/basket.jpg";
import EmptyCarts from "../EmptyCart/EmptyCarts";
const ShoppingCart = () => {
  const products = useSelector((state) => state.cart);
  const ui = useSelector((state) => state.ui);
  const dispatch = useDispatch();
  // const totalPrice = useSelector(cartTotalPriceSelector);
  const totalPrice = products.cart.reduce(
    (a, c) => a + c?.quantity * c?.price,
    0
  );
  return (
    <>
      <section className="breadcrumb-option">
        <div className="container">
          <div className="row">
            <div className="breadcrumb__links">
              <Link to="/home">Home</Link>
              <Link to="/shop">Shop</Link>
              <span>Shopping Cart</span>
            </div>
          </div>
        </div>
      </section>
      {products.cart.length > 0 ? (
        <section className="shopping-cart spad">
          <div className="container">
            <div className="row">
              <div className="col-lg-8">
                <div className="shopping__cart__table">
                  <table>
                    <thead>
                      <tr>
                        <th>Product</th>
                        <th>Quantity</th>
                        <th>Total</th>
                        <th />
                      </tr>
                    </thead>
                    {products.cart.map((cartItem) => {
                      return (
                        <>
                          <tbody>
                            <tr key={cartItem.id}>
                              <td className="product__cart__item">
                                <div className="product__cart__item__pic">
                                  <img
                                    className=""
                                    src={cartItem.thumbnail}
                                    alt=""
                                  />
                                </div>
                                <div className="product__cart__item__text">
                                  <h6>{cartItem.title}</h6>
                                  <h5>{cartItem.price}</h5>
                                </div>
                              </td>
                              <td className="quantity__item">
                                <div className="quantity">
                                  <div className="pro-qty-2">
                                    <CartProductAction>
                                      <ActionButton
                                        disabled={cartItem.quantity === 1}
                                        onClick={() => {
                                          dispatch(decreaseItem(cartItem));
                                        }}
                                      >
                                        -
                                      </ActionButton>
                                      <CartProductQuantity>
                                        {cartItem.quantity}
                                      </CartProductQuantity>

                                      <ActionButton
                                        disabled={cartItem.quantity === 10}
                                        onClick={() => {
                                          dispatch(IncreaseItem(cartItem));
                                        }}
                                      >
                                        +
                                      </ActionButton>
                                    </CartProductAction>
                                  </div>
                                </div>
                              </td>
                              <td className="cart__price">
                                {" "}
                                <CartProductSubtotal>
                                  $ {cartItem.quantity * cartItem.price}
                                </CartProductSubtotal>
                              </td>

                              <td className="cart__close">
                                <i
                                  className="fa fa-close"
                                  onClick={() => {
                                    dispatch(removeItem(cartItem));
                                  }}
                                />
                              </td>
                            </tr>
                          </tbody>
                        </>
                      );
                    })}
                  </table>
                </div>
                <div className="row">
                  <div className="col-lg-6 col-md-6 col-sm-6">
                    <div className="continue__btn">
                      <Link to="/shop">Continue Shopping</Link>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6 col-sm-6">
                    <div className="continue__btn update__btn">
                      <Link
                        to="#"
                        onClick={() => {
                          dispatch(clearCart());
                        }}
                      >
                        <i className="fa fa-spinner" /> Update cart
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="cart__discount">
                  <h6>Discount codes</h6>
                  <form action="#">
                    <input type="text" placeholder="Coupon code" />
                    <button type="submit">Apply</button>
                  </form>
                </div>
                <div className="cart__total">
                  <h6>Cart total</h6>
                  <ul>
                    {products.cart.map((catItem) => {
                      return (
                        <>
                          <li key={catItem.id}>
                            {catItem.title}
                            <span>
                              <CartProductSubtotal>
                                {catItem.quantity * catItem.price}
                              </CartProductSubtotal>
                            </span>
                          </li>
                          <hr style={{ backgroundColor: "black" }} />
                        </>
                      );
                    })}

                    <li>
                      {totalPrice > 0 && (
                        <CartTotal>Total $ {totalPrice}</CartTotal>
                      )}
                    </li>
                  </ul>
                  <Link to="/checkout" className="primary-btn">
                    Proceed to checkout
                  </Link>
                  {/* {ui.cartDrawerVisible && (
                  <Mask
                    onClick={() => {
                      dispatch(toggle());
                    }}
                  />
                )} */}
                </div>
              </div>
            </div>
          </div>
        </section>
      ) : (
        <>
          <EmptyCart>Your Cart is Empty</EmptyCart>
          <EmptyCarts />
        </>
      )}
    </>
  );
};

export default ShoppingCart;
