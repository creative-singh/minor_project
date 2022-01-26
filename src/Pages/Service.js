import React from "react";
import Card from "../Components/Card.js";
import Sdata from "../SData.js";

const Service = () => {
  return (
    <>
      <div className="my-5">
        <h1 className="text-center">Our Services</h1>
        <h4 className="text-center text-muted px-5">Our basic goal is to provide whole software solution to our clients.<br />To make their business profit sky rocketed.</h4>
      </div>
      <div className="container-fluid mb-5">
        <div className="row">
          <div className="col-10 mx-auto">
            <div className="row gy-5">
              {Sdata.map((val, index) => {
                return (
                  <Card
                    key={index}
                    imgsrc={val.imgsrc}
                    title={val.title}
                    text={val.text}
                    redirection={val.redirection}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Service;
