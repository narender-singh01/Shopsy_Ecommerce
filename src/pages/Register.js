import React from "react";
import {
  IconName,
  FaTwitter,
  FaGoogle,
  FaGithub,
  FaFacebook,
} from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import * as Yup from "yup";
import { useFormik } from "formik";
const Validations = Yup.object({
  firstname: Yup.string().min(2).required("FirstName is Required"),
  lastname: Yup.string().min(3).required("LastName is Required"),
  email: Yup.string().email("Invalid Email").required("Email is Required"),
  password: Yup.string().min(8).max(20).required("Password is Required"),
  Confirm_password: Yup.string()
  .min(8)
  .max(20)
  .oneOf([Yup.ref("password"), null], "Confirm-Password Must Be Same")
  .required("confrim_password is Required"),
  
});
const initialValues = {
  firstname: "",
  lastname: "",
  email: "",
  password: "",
  Confirm_password:"",

};
const Register = () => {
  const navigate = useNavigate()
  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
  useFormik({
    initialValues: initialValues,
    validationSchema: Validations,
    onSubmit: (value, action) => {
      action.resetForm();
      if (value) {
        navigate("/login")
       }
    },
  });
  return (
    <>
      <>
        <section className="text-center" style={{backgroundColor:"#EEfAE6"}}>
          {/* Background image */}
          <div
            className="p-5 bg-image"
            style={{
              backgroundImage:
                'url("https://mdbootstrap.com/img/new/textures/full/171.jpg")',
              height: 300,
            }}
          />
          {/* Background image */}
          <div
            className="card mx-4 mx-md-5 shadow-5-strong"
            style={{
              marginTop: "-100px",
              background: "hsla(0, 0%, 100%, 0.8)",
              backdropFilter: "blur(30px)",
            }}
          >
            <div className="card-body py-5 px-md-5">
              <div className="row d-flex justify-content-center">
                <div className="col-lg-8">
                  <h2 className="fw-bold mb-5">Sign up now</h2>
                  <form onSubmit={handleSubmit}>
                    {/* 2 column grid layout with text inputs for the first and last names */}
                    <div className="row">
                      <div className="col-md-6 mb-4">
                        <div className="form-outline">
                          <input
                            type="text"
                            id="form3Example1"
                            className="form-control"
                            name="firstname"
                            value={values.firstname}
                            onChange={handleChange}
                            onBlur={handleBlur}
                          />
                         
                          <label className="form-label" htmlFor="form3Example1">
                            First name
                          </label>
                          {errors.firstname && touched.firstname ? (
                            <p className="required">{errors.firstname}</p>
                          ) : (
                            ""
                          )}
                        </div>
                      </div>
                      <div className="col-md-6 mb-4">
                        <div className="form-outline">
                          <input
                            type="text"
                            id="form3Example2"
                            className="form-control"
                            name="lastname"
                            value={values.lastname}
                            title="Last Name"
                            onChange={handleChange}
                            onBlur={handleBlur}
                          />
                        
                          <label className="form-label" htmlFor="form3Example2">
                            Last name
                          </label>
                          {errors.lastname && touched.lastname ? (
                            <p className="required">{errors.lastname}</p>
                          ) : (
                            ""
                          )}
                        </div>
                      </div>
                    </div>
                    {/* Email input */}
                    <div className="form-outline mb-4">
                      <input
                        type="email"
                        id="form3Example3"
                        className="form-control"
                        name="email"
                        value={values.email}
                        title="Email Address"
                        onChange={handleChange}
                        onBlur={handleBlur}
                      />
                      <label className="form-label" htmlFor="form3Example3">
                        Email address
                      </label>
                      {errors.email && touched.email ? (
                        <p className="required">{errors.email}</p>
                      ) : (
                        ""
                      )}
                    </div>
                    {/* Password input */}
                    <div className="form-outline mb-4">
                      <input
                        type="password"
                        id="form3Example4"
                        className="form-control"
                        name="password"
                        value={values.password}
                        title="Password"
                        onChange={handleChange}
                        onBlur={handleBlur}
                      />{" "}
                   
                      <label className="form-label" htmlFor="form3Example4">
                        Password
                      </label>
                      {errors.password && touched.password ? (
                        <p className="required">{errors.password}</p>
                      ) : (
                        ""
                      )}
                    </div>
                    <div className="form-outline mb-4">
                      <input
                        type="password"
                        id="form3Example4"
                        className="form-control"
                        name="Confirm_password"
                        value={values.Confirm_password}
                        title="Confirm_password"
                        onChange={handleChange}
                        onBlur={handleBlur}
                      />{" "}
                   
                      <label className="form-label" htmlFor="form3Example4">
                       Confirm Password
                      </label>
                      {errors.Confirm_password && touched.Confirm_password ? (
                        <p className="required">{errors.Confirm_password}</p>
                      ) : (
                        ""
                      )}
                    </div>
                    {/* Checkbox */}
                    <div className="form-check d-flex justify-content-center mb-4">
                      {/* <input
                        className="form-check-input me-2"
                        type="checkbox"
                        defaultValue=""
                        id="form2Example33"
                        defaultChecked=""
                      /> */}
                    <Link to="/login">
                      <label
                        style={{ marginBottom: "10px" }}
                        className="form-check-label"
                        htmlFor="form2Example33"
                      >
                        Already Have An Account ?
                      </label>
                    </Link>
                    </div>
                    {/* Submit button */}
                
                    <button
                      type="submit"
                      className="btn btn-primary btn-block mb-4"
                      // onClick={Validations}
                    >
                      Sign up
                    </button>
                
                    {/* Register buttons */}
                    <div className="text-center">
                      <p>or sign up with:</p>
                      <button
                        type="button"
                        className="btn btn-link btn-floating mx-1"
                      >
                        <FaFacebook />
                      </button>
                      <button
                        type="button"
                        className="btn btn-link btn-floating mx-1"
                      >
                        <FaGoogle />
                      </button>
                      <button
                        type="button"
                        className="btn btn-link btn-floating mx-1"
                      >
                        <FaTwitter />
                      </button>
                      <button
                        type="button"
                        className="btn btn-link btn-floating mx-1"
                      >
                        <FaGithub />
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
          
        </section>
      </>
    </>
  );
};

export default Register;
