import React from 'react'
import { Link } from 'react-router-dom'
import Hero1 from "../../assets/images/hero/hero-1.jpg"
import Hero2 from "../../assets/images/hero/hero-2.jpg"
const Banner=()=> {
  return (
    <>
    <div className="container-fluid">
    <section className="hero">
  <div className="hero__slider owl-carousel">
    <div className="hero__items set-bg" >
      
      <div className="container">
        <div className="row">
          <div className="col-xl-5 col-lg-7 col-md-8">
            {/* <div className="hero__text">
              <h6>Summer Collection</h6>
              <h2>Fall - Winter Collections 2030</h2>
              <p>
                A specialist label creating luxury essentials. Ethically crafted
                with an unwavering commitment to exceptional quality.
              </p>
              <Link to="#" className="primary-btn">
                Shop now <span className="arrow_right" />
              </Link>
              <div className="hero__social">
                <Link to="#">
                  <i className="fa fa-facebook" />
                </Link>
                <Link to="#">
                  <i className="fa fa-twitter" />
                </Link>
                <Link to="#">
                  <i className="fa fa-pinterest" />
                </Link>
                <Link to="#">
                  <i className="fa fa-instagram" />
                </Link>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </div>
    {/* <div className="hero__items set-bg" id="hero__item">
      <div className="container">
        <div className="row">
          <div className="col-xl-5 col-lg-7 col-md-8">
            <div className="hero__text">
              <h6>Summer Collection</h6>
              <h2>Fall - Winter Collections 2030</h2>
              <p>
                A specialist label creating luxury essentials. Ethically crafted
                with an unwavering commitment to exceptional quality.
              </p>
              <Link to="#" className="primary-btn">
                Shop now <span className="arrow_right" />
              </Link>
              <div className="hero__social">
                <Link to="#">
                  <i className="fa fa-facebook" />
                </Link>
                <Link to="#">
                  <i className="fa fa-twitter" />
                </Link>
                <Link to="#">
                  <i className="fa fa-pinterest" />
                </Link>
                <Link to="#">
                  <i className="fa fa-instagram" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div> */}
  </div>
</section>
</div>
    </>
  )
}

export default Banner