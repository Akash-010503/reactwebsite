import React from "react";
import { NavLink } from "react-router-dom";

const Common = (props) => {
  return (
    <>
      <section id="header" className="d-flex align-items-center">
      <div className="container-fluid ">
            <div className="row ">
                <div className="col-10 mx-auto ">
                <div className="row">
                    <div className="col-md-6 mt-5 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column">
                      <h1>
                       {props.name} <strong className="brand-name">Compatible Solution</strong>
                      </h1>
                      <h2 className="my-3">
                        We are the team of talented developer making website
                      </h2>
                      <div className="mt-3">
                        <NavLink to={props.visit} className="btn-get-started "> {props.btname} </NavLink>
                      </div>
                    </div>
                  <div className="col-lg-6 mt-5 order-1 order-lg-2 header-img">
                    <img src={props.imgsrc} className="img-fluid animated w-100 h-100" alt="Common img" />
                  </div>
                  </div>
                </div>
            </div>
        </div>
      </section>
    </>
  );
};

export default Common;