import React from 'react'
import { Link } from 'react-router-dom'
import blog_1 from "../../assets/images/blog/blog-1.jpg"
import blog_2 from "../../assets/images/blog/blog-2.jpg"
import blog_3 from "../../assets/images/blog/blog-3.jpg"
import calendarImg from '../../assets/images/icon/calendar.png'
const LatestNews=()=> {
  return (
    <>
    <section className="latest spad">
  <div className="container">
    <div className="row">
      <div className="col-lg-12">
        <div className="section-title">
          <span>Latest News</span>
          <h2>Fashion New Trends</h2>
        </div>
      </div>
    </div>
    <div className="row">
      <div className="col-lg-4 col-md-6 col-sm-6">
        <div className="blog__item">
          <div
            className="blog__item__pic set-bg"
            data-setbg="img/blog/blog-1.jpg"
          > <img src={blog_1}/></div>
          <div className="blog__item__text">
            <span>
              <img src={calendarImg} alt="" /> 16 February 2020
            </span>
            <h5>What Curling Irons Are The Best Ones</h5>
            <Link to="/blog-details">Read More</Link>
          </div>
        </div>
      </div>
      <div className="col-lg-4 col-md-6 col-sm-6">
        <div className="blog__item">
          <div
            className="blog__item__pic set-bg"
            data-setbg="img/blog/blog-2.jpg"
          ><img src={blog_2}/></div>
          <div className="blog__item__text">
            <span>
              <img src={calendarImg} alt="" /> 21 February 2020
            </span>
            <h5>Eternity Bands Do Last Forever</h5>
            <Link to="/blog-details">Read More</Link>
          </div>
        </div>
      </div>
      <div className="col-lg-4 col-md-6 col-sm-6">
        <div className="blog__item">
          <div
            className="blog__item__pic set-bg"
            data-setbg="img/blog/blog-3.jpg"
          ><img src={blog_3}/></div>
          <div className="blog__item__text">
            <span>
              <img src={calendarImg} alt="" /> 28 February 2020
            </span>
            <h5>The Health Benefits Of Sunglasses</h5>
            <Link to="/blog-details">Read More</Link>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

    </>
  )
}

export default LatestNews;