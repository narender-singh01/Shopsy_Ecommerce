import React from "react";
import { Link, useLocation } from "react-router-dom";
import ShoppingDetailRelated from "../../pages/ShopDetailRelated";
import thumb_1 from "../../assets/images/shop-details/thumb-1.png";
import thumb_2 from "../../assets/images/shop-details/thumb-1.png";
import thumb_3 from "../../assets/images/shop-details/thumb-1.png";
import thumb_4 from "../../assets/images/shop-details/thumb-1.png";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../redux/slice/CartSlice";
import { addToWishList } from "../../redux/slice/WishListSlice";
const ShopDetails = () => {
  let location = useLocation();
  const detail = location.state.data;
  const [img, setImg] = React.useState(detail.thumbnail);
  const products = useSelector((state) => state.products);
  const dispatch = useDispatch();

  return (
    <>
      <section className="shop-details">
        <div className="product__details__pic">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="product__details__breadcrumb">
                  <Link to="./index.html">Home</Link>
                  <Link to="/shop">Shop</Link>
                  <span>Product Details</span>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-3 col-md-3">
                {detail.images.map((item, index) => {
                  return (
                    <>
                      <ul className="nav nav-tabs" role="tablist">
                        <li className="nav-item">
                          <span
                            className="nav-link active"
                            data-toggle="tab"
                            onClick={() => {
                              setImg(item);
                            }}
                            role="tab"
                          >
                            <div
                              className="product__thumb__pic set-bg"
                              data-setbg="img/shop-details/thumb-1.png"
                              key={index}
                            >
                              <img src={item} />
                            </div>
                          </span>
                        </li>
                      </ul>
                    </>
                  );
                })}
              </div>
              <div className="col-lg-6 col-md-9">
                <div className="tab-content">
                  <div className="tab-pane active" id="tabs-1" role="tabpanel">
                    <div>
                      <img src={img} />
                    </div>
                  </div>
                  <div className="tab-pane" id="tabs-2" role="tabpanel">
                    <div className="product__details__pic__item">
                      <img src={detail.thumbnail} alt="" />
                    </div>
                  </div>
                  <div className="tab-pane" id="tabs-3" role="tabpanel">
                    <div className="product__details__pic__item">
                      <img src={detail.thumbnail} alt="" />
                    </div>
                  </div>
                  <div className="tab-pane" id="tabs-4" role="tabpanel">
                    <div className="product__details__pic__item">
                      <img src={detail.thumbnail} alt="" />
                      <Link
                        to="https://www.youtube.com/watch?v=8PJ3_p7VqHw&list=RD8PJ3_p7VqHw&start_radio=1"
                        className="video-popup"
                      >
                        <i className="fa fa-play" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="product__details__content">
          <div className="container">
            <div className="row d-flex justify-content-center">
              <div className="col-lg-8">
                <div className="product__details__text">
                  <h4>{detail.title}</h4>
                  <div className="rating">
                    <i className="fa fa-star" />
                    <i className="fa fa-star" />
                    <i className="fa fa-star" />
                    <i className="fa fa-star" />
                    <i className="fa fa-star-o" />
                    <span>{detail.rating}</span>
                  </div>
                  <h3>
                    ${detail.price} <span>{detail.discountPercentage}%</span>
                  </h3>
                  <p className="description">{detail.description}</p>
                  {detail.category == "Clothes" ? (
                    <div className="product__details__option">
                      <div className="product__details__option__size">
                        <span>Size:</span>
                        <label htmlFor="xxl">
                          xxl
                          <input type="radio" id="xxl" />
                        </label>
                        <label className="active" htmlFor="xl">
                          xl
                          <input type="radio" id="xl" />
                        </label>
                        <label htmlFor="l">
                          l
                          <input type="radio" id="l" />
                        </label>
                        <label htmlFor="sm">
                          s
                          <input type="radio" id="sm" />
                        </label>
                      </div>
                      <div className="product__details__option__color">
                        <span>Color:</span>
                        <label className="c-1" htmlFor="sp-1">
                          <input type="radio" id="sp-1" />
                        </label>
                        <label className="c-2" htmlFor="sp-2">
                          <input type="radio" id="sp-2" />
                        </label>
                        <label className="c-3" htmlFor="sp-3">
                          <input type="radio" id="sp-3" />
                        </label>
                        <label className="c-4" htmlFor="sp-4">
                          <input type="radio" id="sp-4" />
                        </label>
                        <label className="c-9" htmlFor="sp-9">
                          <input type="radio" id="sp-9" />
                        </label>
                      </div>
                    </div>
                  ) : (
                    ""
                  )}
                  <div className="product__details__cart__option">
                    <div className="quantity">
                      <button
                        onClick={() => {
                          dispatch(addToWishList(detail));
                        }}
                        className="primary-btn"
                      >
                        <i className="fa fa-heart" />
                        add to WishList
                      </button>
                      {/* <input type="text" defaultValue={1} /> */}
                    </div>
                    <button
                      // to="/shopping-cart"
                      onClick={() => {
                        dispatch(addToCart(detail));
                      }}
                      className="primary-btn"
                    >
                      <i className="fa fa-cart-plus" />
                      add to cart
                    </button>
                  </div>
                  {/* <div className="product__details__btns__option">
                  <Link to="#">
                      <i className="fa fa-heart" /> add to wishlist
                      </Link>
                    <Link to="#">
                      <i className="fa fa-exchange" /> Add To Compare
                    </Link>
                  </div> */}
                  <div className="product__details__last__option">
                    <h5>
                      <span>Guaranteed Safe Checkout</span>
                    </h5>
                    <img src="img/shop-details/details-payment.png" alt="" />
                    <ul>
                      <li>
                        <span>SKU:</span> {detail.id}
                      </li>
                      <li>
                        <span>Categories:</span> {detail.category}
                      </li>
                      <li>
                        <span>Stock:</span>Hurry Up Only {detail.stock} Left
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-12">
                <div className="product__details__tab">
                  <ul className="nav nav-tabs" role="tablist">
                    <li className="nav-item">
                      <Link
                        className="nav-link active"
                        data-toggle="tab"
                        to="#tabs-5"
                        role="tab"
                      >
                        Description
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link
                        className="nav-link"
                        data-toggle="tab"
                        to="#tabs-6"
                        role="tab"
                      >
                        Customer Previews(5)
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link
                        className="nav-link"
                        data-toggle="tab"
                        to="#tabs-7"
                        role="tab"
                      >
                        Additional information
                      </Link>
                    </li>
                  </ul>
                  <div className="tab-content">
                    <div
                      className="tab-pane active"
                      id="tabs-5"
                      role="tabpanel"
                    >
                      <div className="product__details__tab__content">
                        <p className="note">
                          Nam tempus turpis at metus scelerisque placerat nulla
                          deumantos solicitud felis. Pellentesque diam dolor,
                          elementum etos lobortis des mollis ut risus. Sedcus
                          faucibus an sullamcorper mattis drostique des commodo
                          pharetras loremos.
                        </p>
                        <div className="product__details__tab__content__item">
                          <h5>Products Infomation</h5>
                          <p>
                            A Pocket PC is a handheld computer, which features
                            many of the same capabilities as a modern PC. These
                            handy little devices allow individuals to retrieve
                            and store e-mail messages, create a contact file,
                            coordinate appointments, surf the internet, exchange
                            text messages and more. Every product that is
                            labeled as a Pocket PC must be accompanied with
                            specific software to operate the unit and must
                            feature a touchscreen and touchpad.
                          </p>
                          <p>
                            As is the case with any new technology product, the
                            cost of a Pocket PC was substantial during it’s
                            early release. For approximately $700.00, consumers
                            could purchase one of top-of-the-line Pocket PCs in
                            2003. These days, customers are finding that prices
                            have become much more reasonable now that the
                            newness is wearing off. For approximately $350.00, a
                            new Pocket PC can now be purchased.
                          </p>
                        </div>
                        <div className="product__details__tab__content__item">
                          <h5>Material used</h5>
                          <p>
                            Polyester is deemed lower quality due to its none
                            natural quality’s. Made from synthetic materials,
                            not natural like wool. Polyester suits become
                            creased easily and are known for not being
                            breathable. Polyester suits tend to have a shine to
                            them compared to wool and cotton suits, this can
                            make the suit look cheap. The texture of velvet is
                            luxurious and breathable. Velvet is a great choice
                            for dinner party jacket and can be worn all year
                            round.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="tab-pane" id="tabs-6" role="tabpanel">
                      <div className="product__details__tab__content">
                        <div className="product__details__tab__content__item">
                          <h5>Products Infomation</h5>
                          <p>
                            A Pocket PC is a handheld computer, which features
                            many of the same capabilities as a modern PC. These
                            handy little devices allow individuals to retrieve
                            and store e-mail messages, create a contact file,
                            coordinate appointments, surf the internet, exchange
                            text messages and more. Every product that is
                            labeled as a Pocket PC must be accompanied with
                            specific software to operate the unit and must
                            feature a touchscreen and touchpad.
                          </p>
                          <p>
                            As is the case with any new technology product, the
                            cost of a Pocket PC was substantial during it’s
                            early release. For approximately $700.00, consumers
                            could purchase one of top-of-the-line Pocket PCs in
                            2003. These days, customers are finding that prices
                            have become much more reasonable now that the
                            newness is wearing off. For approximately $350.00, a
                            new Pocket PC can now be purchased.
                          </p>
                        </div>
                        <div className="product__details__tab__content__item">
                          <h5>Material used</h5>
                          <p>
                            Polyester is deemed lower quality due to its none
                            natural quality’s. Made from synthetic materials,
                            not natural like wool. Polyester suits become
                            creased easily and are known for not being
                            breathable. Polyester suits tend to have a shine to
                            them compared to wool and cotton suits, this can
                            make the suit look cheap. The texture of velvet is
                            luxurious and breathable. Velvet is a great choice
                            for dinner party jacket and can be worn all year
                            round.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="tab-pane" id="tabs-7" role="tabpanel">
                      <div className="product__details__tab__content">
                        <p className="note">
                          Nam tempus turpis at metus scelerisque placerat nulla
                          deumantos solicitud felis. Pellentesque diam dolor,
                          elementum etos lobortis des mollis ut risus. Sedcus
                          faucibus an sullamcorper mattis drostique des commodo
                          pharetras loremos.
                        </p>
                        <div className="product__details__tab__content__item">
                          <h5>Products Infomation</h5>
                          <p>
                            A Pocket PC is a handheld computer, which features
                            many of the same capabilities as a modern PC. These
                            handy little devices allow individuals to retrieve
                            and store e-mail messages, create a contact file,
                            coordinate appointments, surf the internet, exchange
                            text messages and more. Every product that is
                            labeled as a Pocket PC must be accompanied with
                            specific software to operate the unit and must
                            feature a touchscreen and touchpad.
                          </p>
                          <p>
                            As is the case with any new technology product, the
                            cost of a Pocket PC was substantial during it’s
                            early release. For approximately $700.00, consumers
                            could purchase one of top-of-the-line Pocket PCs in
                            2003. These days, customers are finding that prices
                            have become much more reasonable now that the
                            newness is wearing off. For approximately $350.00, a
                            new Pocket PC can now be purchased.
                          </p>
                        </div>
                        <div className="product__details__tab__content__item">
                          <h5>Material used</h5>
                          <p>
                            Polyester is deemed lower quality due to its none
                            natural quality’s. Made from synthetic materials,
                            not natural like wool. Polyester suits become
                            creased easily and are known for not being
                            breathable. Polyester suits tend to have a shine to
                            them compared to wool and cotton suits, this can
                            make the suit look cheap. The texture of velvet is
                            luxurious and breathable. Velvet is a great choice
                            for dinner party jacket and can be worn all year
                            round.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <ShoppingDetailRelated />
      </section>
    </>
  );
};

export default ShopDetails;
