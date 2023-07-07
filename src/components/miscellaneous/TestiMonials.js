import React from 'react'
import test1 from "../../assets/images/about/testimonial-author.jpg"
import test2 from "../../assets/images/about/testimonial-pic.jpg"

const TestiMonials=()=> {
  return (
    <>
<section className="testimonial">
  <div className="container-fluid">
    <div className="row">
      <div className="col-lg-6 p-0">
        <div className="testimonial__text">
          <span className="icon_quotations" />
          <p>
            “Going out after work? Take your butane curling iron with you to the
            office, heat it up, style your hair before you leave the office and
            you won’t have to make a trip back home.”
          </p>
          <div className="testimonial__author">
            <div className="testimonial__author__pic">
              <img src={test1} alt="" />
            </div>
            <div className="testimonial__author__text">
              <h5>Augusta Schultz</h5>
              <p>Fashion Design</p>
            </div>
          </div>
        </div>
      </div>
      <div className="col-lg-6 p-0">
        <div
          className="testimonial__pic set-bg"
          // data-setbg="img/about/testimonial-pic.jpg"
        ><img src={test2} alt="" /> </div>
      </div>
    </div>
  </div>
</section>


    </>
  )
}

export default TestiMonials