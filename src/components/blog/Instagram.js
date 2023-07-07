import React from 'react'
import Insta_1 from "../../assets/images/instagram/instagram-1.jpg"
import Insta_2 from "../../assets/images/instagram/instagram-2.jpg"
import Insta_3 from "../../assets/images/instagram/instagram-3.jpg"
import Insta_4 from "../../assets/images/instagram/instagram-4.jpg"
import Insta_5 from "../../assets/images/instagram/instagram-5.jpg"
import Insta_6 from "../../assets/images/instagram/instagram-6.jpg"
import LatestNews from './LatestNews'
const Instagram=()=> {
  return (
    <>
        <section className="instagram spad">
    <div className="container">
      <div className="row">
        <div className="col-lg-8">
          <div className="instagram__pic">
            <div
              className="instagram__pic__item set-bg"
              data-setbg="img/instagram/instagram-1.jpg"
            >
            <img src={Insta_1}/></div>
            <div
              className="instagram__pic__item set-bg"
              data-setbg="img/instagram/instagram-2.jpg"
            >
             <img src={Insta_2}/></div>
            <div
              className="instagram__pic__item set-bg"
              data-setbg="img/instagram/instagram-3.jpg"
            >
             <img src={Insta_3}/></div>
            <div
              className="instagram__pic__item set-bg"
              data-setbg="img/instagram/instagram-4.jpg"
            >
             <img src={Insta_4}/></div>
            <div
              className="instagram__pic__item set-bg"
              data-setbg="img/instagram/instagram-5.jpg"
            >
             <img src={Insta_5}/></div>
            <div
              className="instagram__pic__item set-bg"
              data-setbg="img/instagram/instagram-6.jpg"
            >
             <img src={Insta_6}/></div>
          </div>
        </div>
        <div className="col-lg-4">
          <div className="instagram__text">
            <h2>Instagram</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <h3>#Male_Fashion</h3>
          </div>
        </div>
      </div>
    </div>
    <LatestNews/>
  </section>
  </>
  )
}

export default Instagram