import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import MainProducts from "../components/products/MainProducts";
import { productsFetch } from "../redux/slice/productSlice";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../redux/slice/CartSlice";
import { addToWishList } from "../redux/slice/WishListSlice";

const Shop = () => {
  const [data, setData] = useState();
  const [mainData, setMainData] = useState();

  const dispatch = useDispatch();
  const { products, status } = useSelector((state) => state.products);
  useEffect(() => {
    dispatch(productsFetch());
  }, []);

  useEffect(() => {
    // setData(products.products);
    setMainData(products.products);
  }, [products]);

  const filterBrand = (catItem) => {
    const result = products.products.filter((FiltersData) => {
      return FiltersData.brand === catItem;
    });
    setMainData(result);
  };

  const filterCategory = (catItem) => {
    const result = products.products.filter((FiltersData) => {
      return FiltersData.category === catItem;
    });
    setMainData(result);
  };
  let mainCategory = products.products?.filter(
    (ele, ind) =>
      ind ===
      products.products.findIndex((elem) => elem.category === ele.category)
  );
  console.log("mainCategory", mainCategory);
  return (
    <>
      <section className="breadcrumb-option">
        <div className="container">
          <div className="row">
            <div className="breadcrumb__links">
              <a href="/Home">Home</a>
              <span>Shop</span>
            </div>
          </div>
        </div>
      </section>

      <>
        <>
          <div className="container-fluid mb-3">
            <div className="row"></div>
          </div>
          <div className="container">
            <div className="row mb-5">
              <div className="col-md-3">
                <div className="card mb-4">
                  <div className="card-header">Categories</div>
                  {mainCategory?.map((categoryData) => {
                    return (
                      <>
                        <div className="list-group list-group-flush">
                          <a
                            href="#"
                            className="list-group-item list-group-item-action"
                            onClick={() =>
                              filterCategory(categoryData.category)
                            }
                          >
                            {categoryData.category}
                          </a>
                        </div>
                      </>
                    );
                  })}
                </div>
                <div className="card">
                  <div className="card-header">Filter</div>
                  <div className="card-body p-1">
                    <div className="card border-0 b-3">
                      <div
                        className="card-header p-2 bg-white"
                        data-toggle="collapse"
                        data-target="#collapseExample1"
                        aria-expanded="false"
                      >
                        <p className="m-0 h6">Brand</p>
                      </div>
                      <div
                        className="card-body p-0 collapse show"
                        id="collapseExample1"
                      >
                        <ul
                          className="list-group list-group-flush"
                          style={{ height: 200, overflow: "auto" }}
                        >
                          {mainCategory?.map((brandName) => {
                            return (
                              <>
                                <li className="list-group-item p-2 d-flex justify-content-between align-items-center">
                                  <div className="custom-control custom-checkbox">
                                    {/* <input
                                      type="checkbox"
                                      className="custom-control-input"
                                      id="customCheck1"
                                    /> */}
                                    <Link
                                      onClick={() =>
                                        filterBrand(brandName.brand)
                                      }
                                      className="custom-control-label brandNameStyle"
                                      htmlFor="customCheck1"
                                    >
                                      {brandName.brand}
                                    </Link>
                                  </div>
                                  <span className="badge badge-secondary badge-pill">
                                    14
                                  </span>
                                </li>
                              </>
                            );
                          })}
                        </ul>
                      </div>
                    </div>
                    <div className="card border-0 b-3">
                      <div
                        className="card-header p-2 bg-white"
                        data-toggle="collapse"
                        data-target="#collapseExample2"
                        aria-expanded="false"
                      >
                        <p className="m-0 h6">Size</p>
                      </div>
                      <div
                        className="card-body p-0 collapse show"
                        id="collapseExample2"
                      >
                        <ul
                          className="list-group list-group-flush"
                          style={{ height: 200, overflow: "auto" }}
                        >
                          <li className="list-group-item p-2 d-flex justify-content-between align-items-center">
                            <div className="custom-control custom-checkbox">
                              <input
                                type="checkbox"
                                className="custom-control-input"
                                id="customCheck1"
                              />
                              <label
                                className="custom-control-label"
                                htmlFor="customCheck1"
                              >
                                XXS
                              </label>
                            </div>
                          </li>
                          <li className="list-group-item p-2 d-flex justify-content-between align-items-center">
                            <div className="custom-control custom-checkbox">
                              <input
                                type="checkbox"
                                className="custom-control-input"
                                id="customCheck1"
                              />
                              <label
                                className="custom-control-label"
                                htmlFor="customCheck1"
                              >
                                XS
                              </label>
                            </div>
                          </li>
                          <li className="list-group-item p-2 d-flex justify-content-between align-items-center">
                            <div className="custom-control custom-checkbox">
                              <input
                                type="checkbox"
                                className="custom-control-input"
                                id="customCheck1"
                              />
                              <label
                                className="custom-control-label"
                                htmlFor="customCheck1"
                              >
                                S
                              </label>
                            </div>
                          </li>
                          <li className="list-group-item p-2 d-flex justify-content-between align-items-center">
                            <div className="custom-control custom-checkbox">
                              <input
                                type="checkbox"
                                className="custom-control-input"
                                id="customCheck1"
                              />
                              <label
                                className="custom-control-label"
                                htmlFor="customCheck1"
                              >
                                M
                              </label>
                            </div>
                          </li>
                          <li className="list-group-item p-2 d-flex justify-content-between align-items-center">
                            <div className="custom-control custom-checkbox">
                              <input
                                type="checkbox"
                                className="custom-control-input"
                                id="customCheck1"
                              />
                              <label
                                className="custom-control-label"
                                htmlFor="customCheck1"
                              >
                                L
                              </label>
                            </div>
                          </li>
                          <li className="list-group-item p-2 d-flex justify-content-between align-items-center">
                            <div className="custom-control custom-checkbox">
                              <input
                                type="checkbox"
                                className="custom-control-input"
                                id="customCheck1"
                              />
                              <label
                                className="custom-control-label"
                                htmlFor="customCheck1"
                              >
                                XL
                              </label>
                            </div>
                          </li>
                          <li className="list-group-item p-2 d-flex justify-content-between align-items-center">
                            <div className="custom-control custom-checkbox">
                              <input
                                type="checkbox"
                                className="custom-control-input"
                                id="customCheck1"
                              />
                              <label
                                className="custom-control-label"
                                htmlFor="customCheck1"
                              >
                                XXL
                              </label>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="card border-0 b-3">
                      <div
                        className="card-header p-2 bg-white"
                        data-toggle="collapse"
                        data-target="#collapseExample3"
                        aria-expanded="false"
                      >
                        <p className="m-0 h6">Color</p>
                      </div>
                      <div
                        className="card-body p-0 collapse show"
                        id="collapseExample3"
                      >
                        <ul
                          className="list-group list-group-flush"
                          style={{ height: 200, overflow: "auto" }}
                        >
                          <li className="list-group-item p-2 d-flex justify-content-between align-items-center">
                            <div className="custom-control custom-checkbox w-100">
                              <input
                                type="checkbox"
                                className="custom-control-input"
                                id="customCheck1"
                              />
                              <label
                                className="custom-control-label"
                                htmlFor="customCheck1"
                              >
                                <div
                                  className="float-left p-2 mt-1 mr-1"
                                  style={{ backgroundColor: "#E52B50" }}
                                />
                                <span>Amaranth</span>
                              </label>
                            </div>
                          </li>
                          <li className="list-group-item p-2 d-flex justify-content-between align-items-center">
                            <div className="custom-control custom-checkbox w-100">
                              <input
                                type="checkbox"
                                className="custom-control-input"
                                id="customCheck1"
                              />
                              <label
                                className="custom-control-label"
                                htmlFor="customCheck1"
                              >
                                <div
                                  className="float-left p-2 mt-1 mr-1"
                                  style={{ backgroundColor: "#FFBF00" }}
                                />
                                <span>Amber</span>
                              </label>
                            </div>
                          </li>
                          <li className="list-group-item p-2 d-flex justify-content-between align-items-center">
                            <div className="custom-control custom-checkbox">
                              <input
                                type="checkbox"
                                className="custom-control-input"
                                id="customCheck1"
                              />
                              <label
                                className="custom-control-label"
                                htmlFor="customCheck1"
                              >
                                <div
                                  className="float-left p-2 mt-1 mr-1"
                                  style={{ backgroundColor: "#007FFF" }}
                                />
                                <span>Azure</span>
                              </label>
                            </div>
                          </li>
                          <li className="list-group-item p-2 d-flex justify-content-between align-items-center">
                            <div className="custom-control custom-checkbox">
                              <input
                                type="checkbox"
                                className="custom-control-input"
                                id="customCheck1"
                              />
                              <label
                                className="custom-control-label"
                                htmlFor="customCheck1"
                              >
                                <div
                                  className="float-left p-2 mt-1 mr-1"
                                  style={{ backgroundColor: "#007BA7" }}
                                />
                                <span>Cerulean</span>
                              </label>
                            </div>
                          </li>
                          <li className="list-group-item p-2 d-flex justify-content-between align-items-center">
                            <div className="custom-control custom-checkbox">
                              <input
                                type="checkbox"
                                className="custom-control-input"
                                id="customCheck1"
                              />
                              <label
                                className="custom-control-label"
                                htmlFor="customCheck1"
                              >
                                <div
                                  className="float-left p-2 mt-1 mr-1"
                                  style={{ backgroundColor: "#B87333" }}
                                />
                                <span>Copper</span>
                              </label>
                            </div>
                          </li>
                          <li className="list-group-item p-2 d-flex justify-content-between align-items-center">
                            <div className="custom-control custom-checkbox">
                              <input
                                type="checkbox"
                                className="custom-control-input"
                                id="customCheck1"
                              />
                              <label
                                className="custom-control-label"
                                htmlFor="customCheck1"
                              >
                                <div
                                  className="float-left p-2 mt-1 mr-1"
                                  style={{ backgroundColor: "#DC143C" }}
                                />
                                <span>Crimson</span>
                              </label>
                            </div>
                          </li>
                          <li className="list-group-item p-2 d-flex justify-content-between align-items-center">
                            <div className="custom-control custom-checkbox">
                              <input
                                type="checkbox"
                                className="custom-control-input"
                                id="customCheck1"
                              />
                              <label
                                className="custom-control-label"
                                htmlFor="customCheck1"
                              >
                                <div
                                  className="float-left p-2 mt-1 mr-1"
                                  style={{ backgroundColor: "#008000" }}
                                />
                                <span>Green</span>
                              </label>
                            </div>
                          </li>
                          <li className="list-group-item p-2 d-flex justify-content-between align-items-center">
                            <div className="custom-control custom-checkbox">
                              <input
                                type="checkbox"
                                className="custom-control-input"
                                id="customCheck1"
                              />
                              <label
                                className="custom-control-label"
                                htmlFor="customCheck1"
                              >
                                <div
                                  className="float-left p-2 mt-1 mr-1"
                                  style={{ backgroundColor: "#808080" }}
                                />
                                <span>Gray</span>
                              </label>
                            </div>
                          </li>
                          <li className="list-group-item p-2 d-flex justify-content-between align-items-center">
                            <div className="custom-control custom-checkbox">
                              <input
                                type="checkbox"
                                className="custom-control-input"
                                id="customCheck1"
                              />
                              <label
                                className="custom-control-label"
                                htmlFor="customCheck1"
                              >
                                <div
                                  className="float-left p-2 mt-1 mr-1"
                                  style={{ backgroundColor: "#FFD700" }}
                                />
                                <span>Gold</span>
                              </label>
                            </div>
                          </li>
                          <li className="list-group-item p-2 d-flex justify-content-between align-items-center">
                            <div className="custom-control custom-checkbox">
                              <input
                                type="checkbox"
                                className="custom-control-input"
                                id="customCheck1"
                              />
                              <label
                                className="custom-control-label"
                                htmlFor="customCheck1"
                              >
                                <div
                                  className="float-left p-2 mt-1 mr-1"
                                  style={{ backgroundColor: "#D1E231" }}
                                />
                                <span>Pear</span>
                              </label>
                            </div>
                          </li>
                          <li className="list-group-item p-2 d-flex justify-content-between align-items-center">
                            <div className="custom-control custom-checkbox">
                              <input
                                type="checkbox"
                                className="custom-control-input"
                                id="customCheck1"
                              />
                              <label
                                className="custom-control-label"
                                htmlFor="customCheck1"
                              >
                                <div
                                  className="float-left p-2 mt-1 mr-1"
                                  style={{ backgroundColor: "#800080" }}
                                />
                                <span>Purple</span>
                              </label>
                            </div>
                          </li>
                          <li className="list-group-item p-2 d-flex justify-content-between align-items-center">
                            <div className="custom-control custom-checkbox">
                              <input
                                type="checkbox"
                                className="custom-control-input"
                                id="customCheck1"
                              />
                              <label
                                className="custom-control-label"
                                htmlFor="customCheck1"
                              >
                                <div
                                  className="float-left p-2 mt-1 mr-1"
                                  style={{ backgroundColor: "#C0C0C0" }}
                                />
                                <span>Silver</span>
                              </label>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="card border-0 b-3">
                      <div
                        className="card-header p-2 bg-white"
                        data-toggle="collapse"
                        data-target="#collapseExample4"
                        aria-expanded="false"
                      >
                        <p className="m-0 h6">Price</p>
                      </div>
                      <div
                        className="card-body p collapse show"
                        id="collapseExample4"
                      >
                        <div className="form-row">
                          <div className="form-group col-md-6">
                            <label>Min</label>
                            <input
                              className="form-control"
                              placeholder="$0"
                              type="number"
                            />
                          </div>
                          <div className="form-group text-right col-md-6">
                            <label>Max</label>
                            <input
                              className="form-control"
                              placeholder="$1,0000"
                              type="number"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="card-footer">
                    <button type="button" className="btn btn-block btn-primary">
                      Filter
                    </button>
                  </div>
                </div>
              </div>
              <div className="col-md-9">
                <div className="card">
                  <div className="card-header">
                    <div className="row">
                      <div className="col-md-5">
                        <div className="btn-group" role="group">
                          <button
                            type="button"
                            className="btn btn-secondary active"
                          >
                            <i className="fas fa-th" />
                          </button>
                          <button type="button" className="btn btn-secondary">
                            <i className="fa fa-th-list" />
                          </button>
                          <button type="button" className="btn btn-secondary">
                            <i className="fa fa-sync-alt" />
                            <span>Product Compare (0)</span>
                          </button>
                        </div>
                      </div>
                      <div className="col-md-4">
                        <div className="input-group">
                          <div className="input-group-prepend">
                            <span className="input-group-text">Sort By:</span>
                          </div>
                          <select className="form-control" id="" name="">
                            <option value="">Default</option>
                            <option value="">Name (A - Z)</option>
                            <option value="">Name (Z - A)</option>
                            <option value="">Price (Low &gt; High)</option>
                            <option value="">Price (High &gt; Low)</option>
                            <option value="">Rating (Highest)</option>
                            <option value="">Rating (Lowest)</option>
                            <option value="">Model (A - Z)</option>
                            <option value="">Model (Z - A)</option>
                          </select>
                        </div>
                      </div>
                      <div className="col-md-3">
                        <div className="input-group">
                          <div className="input-group-prepend">
                            <span className="input-group-text">Show:</span>
                          </div>
                          <select className="form-control" id="" name="">
                            <option value="">15</option>
                            <option value="">25</option>
                            <option value="">50</option>
                            <option value="">75</option>
                            <option value="">100</option>
                          </select>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="card-body">
                    <div className="row">
                      {mainData?.map((item) => {
                        return (
                          <>
                            <div className="col-md-4 mb-4">
                              <div className="card">
                                <Link to="/shop-details" state={{ data: item }}>
                                  <img
                                    className="card-img-top"
                                    style={{ height: "159px", width: "" }}
                                    src={item.thumbnail}
                                    alt=""
                                  />
                                </Link>
                                <div className="card-body">
                                  <p className="h6">
                                    <small className="text-muted">
                                      {item.brand}
                                    </small>
                                    <br />
                                    {item.title}
                                  </p>
                                  {item.rating <=4.5 ? (
                                    <p className="m-0">
                                      <i className="fa-xs fa fa-star" />
                                      <i className="fa-xs fa fa-star" />
                                      <i className="fa-xs fa fa-star" />
                                      <i className="fa-xs fa fa-star" />
                                      <i className="fa fa-star-o"/>
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
                                    </button>
                                    <button
                                      type="button"
                                      className="btn btn-light"
                                    >
                                      <i className="fa fa-shopping-cart" />
                                    </button>
                                    <button
                                      type="button"
                                      className="btn btn-light"
                                      onClick={() => {
                                        dispatch(addToWishList(item));
                                      }}
                                    >
                                      <i className="fa fa-heart" />
                                    </button>
                                    <button
                                      type="button"
                                      className="btn btn-light"
                                    >
                                      <i className="fa fa-exchange" />
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
                  <div className="card-footer p-3">
                    <div className="row">
                      <div className="col-md-6">
                        <ul className="pagination m-0">
                          <li className="page-item disabled">
                            <a
                              className="page-link"
                              href="#"
                              tabIndex={-1}
                              aria-disabled="true"
                            >
                              Previous
                            </a>
                          </li>
                          <li className="page-item">
                            <a className="page-link" href="#">
                              1
                            </a>
                          </li>
                          <li className="page-item">
                            <a className="page-link" href="#">
                              2
                            </a>
                          </li>
                          <li className="page-item">
                            <a className="page-link" href="#">
                              3
                            </a>
                          </li>
                          <li className="page-item">
                            <a className="page-link" href="#">
                              Next
                            </a>
                          </li>
                        </ul>
                      </div>
                      <div className="col-md-6">
                        <p className="text-right mb-0 mt-1">
                          Showing 1 to 12 of 12 (1 Pages)
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      </>
    </>
  );
};

export default Shop;
