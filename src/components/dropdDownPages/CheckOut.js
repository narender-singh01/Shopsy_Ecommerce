import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { cartTotalPriceSelector } from "../../redux/Selectors";
import { CartProductSubtotal, CartTotal } from "../Cartfunctions/CartFunctions";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Toster from "../../utils/toster";
import CartSlider from "../Cartfunctions/CartSlider";
import { useForm } from "react-hook-form";
// import { clear } from "../../redux/slice/CartSlice";

const CheckOut = () => {
  const product = useSelector((state) => state.cart);
  const ui = useSelector((state) => state.ui);
  const dispatch = useDispatch();
  const totalPrice = product.cart.reduce(
    (a, c) => a + c?.quantity * c?.price,
    0
  );
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors, isDirty, isValid },
    watch,
    reset,
  } = useForm();

  const submitForm = async (data) => {
    console.log(data);
    if (data) {
      Toster.Showsuccess("Order Placed");
      // dispatch(clear());
      reset();
    }
    // try {
    //   if (result.success) {
    //     navigate("/login", { replace: true });
    //   } else {
    //     console.log("first");
    //   }
    // } catch (error) {
    //   // console.log('error user Login', error);
    // }
  };
  return (
    <>
      <CartSlider />
      <section className="breadcrumb-option">
        <div className="container">
          <div className="row">
            <div className="breadcrumb__links">
              <Link to="/home">Home</Link>
              <Link to="/shop">Shop</Link>
              <span>Check Out</span>
            </div>
          </div>
        </div>
      </section>
      <section className="checkout spad">
        <div className="container">
          <div className="checkout__form">
            <form onSubmit={handleSubmit(submitForm)}>
              <div className="row">
                <div className="col-lg-8 col-md-6">
                  <h6 className="coupon__code">
                    <span className="icon_tag_alt" /> Have a coupon?{" "}
                    <Link to="#">Click here</Link> to enter your code
                  </h6>
                  <h6 className="checkout__title">Billing Details</h6>
                  <div className="row">
                    <div className="col-lg-6">
                      <div className="checkout__input">
                        <p>
                          Fist Name<span>*</span>
                        </p>
                        <input
                          type="text"
                          name="firstname"
                          {...register("firstname", {
                            required: {
                              value: true,
                              message: "First Name is required",
                            },
                          })}
                        />
                        <span style={{ color: "red" }}>
                          {errors?.firstname?.message}
                        </span>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="checkout__input">
                        <p>
                          Last Name<span>*</span>
                        </p>
                        <input
                          type="text"
                          name="lastname"
                          {...register("lastname", {
                            required: {
                              value: true,
                              message: "Lirst Name is required",
                            },
                          })}
                        />
                        <span style={{ color: "red" }}>
                          {errors?.lastname?.message}
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="checkout__input">
                    <p>
                      Country<span>*</span>
                    </p>
                    <input
                      type="text"
                      name="country"
                      {...register("country", {
                        required: {
                          value: true,
                          message: "Country is required",
                        },
                      })}
                    />
                    <span style={{ color: "red" }}>
                      {errors?.country?.message}
                    </span>
                  </div>
                  <div className="checkout__input">
                    <p>
                      Address<span>*</span>
                    </p>
                    <input
                      type="text"
                      placeholder="Street Address"
                      className="checkout__input__add"
                      name="address"
                      {...register("address", {
                        required: {
                          value: true,
                          message: "address is required",
                        },
                      })}
                    />
                    <span style={{ color: "red" }}>
                      {errors?.address?.message}
                    </span>

                    <input
                      type="text"
                      placeholder="Apartment, suite, unite ect (optinal)"
                    />
                  </div>
                  <div className="checkout__input">
                    <p>
                      Town/City<span>*</span>
                    </p>
                    <input
                      type="text"
                      name="city"
                      {...register("city", {
                        required: {
                          value: true,
                          message: "city is required",
                        },
                      })}
                    />
                    <span style={{ color: "red" }}>
                      {errors?.city?.message}
                    </span>
                  </div>
                  {/* <div className="checkout__input">
                    <p>
                      Country/State<span>*</span>
                    </p>
                    <input
                      type="text"
                      name="country"
                      value={values.country}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    {errors.country && touched.country ? (
                      <p className="required">{errors.country}</p>
                    ) : (
                      ""
                    )}
                  </div> */}
                  <div className="checkout__input">
                    <p>
                      Postcode / ZIP<span>*</span>
                    </p>
                    <input
                      type="text"
                      name="postalCode"
                      {...register("postalCode", {
                        required: {
                          value: true,
                          message: "postalCode is required",
                        },
                      })}
                    />
                    <span style={{ color: "red" }}>
                      {errors?.postalCode?.message}
                    </span>
                  </div>
                  <div className="row">
                    <div className="col-lg-6">
                      <div className="checkout__input">
                        <p>
                          Phone<span>*</span>
                        </p>
                        <input
                          type="text"
                          name="phone"
                          {...register("phone", {
                            required: {
                              value: true,
                              message: "phone is required",
                            },
                          })}
                        />
                        <span style={{ color: "red" }}>
                          {errors?.phone?.message}
                        </span>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="checkout__input">
                        <p>
                          Email<span>*</span>
                        </p>
                        <input
                          type="text"
                          name="email"
                          {...register("email", {
                            required: {
                              value: true,
                              message: "Email is required",
                            },
                            pattern: {
                              value:
                                /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                              message: "Email must be valid",
                            },
                          })}
                        />
                        <span style={{ color: "red" }}>
                          {errors.email?.message}
                        </span>
                      </div>
                    </div>
                  </div>
                                </div>
                <div className="col-lg-4 col-md-6">
                  <div className="checkout__order">
                    <h4 className="order__title">Your order</h4>
                    <div className="checkout__order__products">
                      Product <span>Total</span>
                    </div>
                    {product.cart.map((cartProducts) => {
                      return (
                        <>
                          <ul className="checkout__total__products">
                            <img
                              style={{ width: "20%", height: "20%" }}
                              src={cartProducts.thumbnail}
                            />
                            <li>
                              01. {cartProducts.title}
                              <span>
                                $ {cartProducts.quantity * cartProducts.price}
                              </span>
                            </li>
                          </ul>
                          <hr style={{backgroundColor:"black"}}/>
                        </>
                      );
                    })}
                    <ul className="checkout__total__all">
                      {/* <li>
                        Subtotal <span> <CartProductSubtotal>
                              $： {catItem.quantity * catItem.price}
                            </CartProductSubtotal></span>
                      </li> */}
                      <li>
                        {" "}
                        <span>
                          {totalPrice > 0 && (
                            <CartTotal>Total $ {totalPrice}</CartTotal>
                          )}
                        </span>
                      </li>
                    </ul>

                    <Link to="/register">
                      <div className="checkout__input__checkbox">
                        <label htmlFor="acc-or">
                          Create an account?
                          <input type="checkbox" id="acc-or" />
                          <span className="checkmark" />
                        </label>
                      </div>
                    </Link>

                    <li>Easy Return & Replacement</li>
                    <li>Cash on delivery</li>
                    <li>Geneiune Products</li>
                    <br></br>

                    <div className="checkout__input__checkbox">
                      <label htmlFor="payment">
                        Check Payment
                        <input type="checkbox" id="payment" />
                        <span className="checkmark" />
                      </label>
                    </div>
                    <div className="checkout__input__checkbox">
                      <label htmlFor="paypal">
                        Paypal
                        <input type="checkbox" id="paypal" />
                        <span className="checkmark" />
                      </label>
                    </div>
                   
                    <button type="submit" className="site-btn">
                      PLACE ORDER
                    </button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
        <ToastContainer />
      </section>
    </>
  );
};

export default CheckOut;
