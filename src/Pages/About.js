import React from "react";
import AboutCard from "../Components/AboutCard";
// import Layout from "../Components/Layout";
// import AboutImg from "../images/about.png";
import EmpData from "../EmpData";

const About = () => {
  return (
    <>
      {/* <Layout
        name="Welcome to About Page"
        imgsrc={AboutImg}
        visit="/contact"
        btnName="Contact Now"
      /> */}

      <div className="my-5">
        <h1 className="text-center">We design, build and ship remarkable digital products</h1>
        <h4 className="text-center text-muted px-5">We are a passionate team of skilled professionals that design, <br />develop and support innovative custom mobile, web, IoT-based, and<br /> other digital solutions, guiding businesses on their growth journey.</h4>
      </div>
      <div className="container-fluid mb-5">
        <div className="row">
          <div className="col-10 mx-auto">
            <div className="row gy-5 d-flex justify-content-between">
              {EmpData.map((val, index) => {
                return (
                  <AboutCard
                    key={index}
                    imgsrc={val.imgsrc}
                    name={val.name}
                    title={val.title}
                    text={val.text}
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

export default About;
