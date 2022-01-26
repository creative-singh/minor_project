import React from 'react';
import web from "../../images/s1.jpg";
import webDevSub from "../../images/subPagesImgs/web-dev-sub.png";

const WebDev = () => {
  return (
    <div className="container pb-5">
      <img src={web} alt="web-dev" className="pt-4" style={{ width: "100%", maxHeight: "340px", objectFit: "cover" }} />

      <h1 className="my-5">Web Development</h1>

      <p><b>Web development</b> refers to the building, creating, and maintaining of websites. It includes aspects such as web design, web publishing, web programming, and database management. It is the creation of an application that works over the internet i.e. websites.</p>

      <div className="text-center py-4">
        <img src={webDevSub} alt="sub page of web dev" width="50%" />
      </div>

      <p>The word <b>Web Development</b> is made up of two words, that is:</p>

      <ul>
        <li><b>Web</b>: It refers to websites, web pages or anything that works over the internet.</li>
        <li><b>Development</b>: Building the application from scratch.</li>
      </ul>

      <p><b>Web Development</b> can be classified into two ways:</p>

      <ul>
        <li>Frontend Development</li>
        <li>Backend Development</li>
      </ul>

      <p><b>Frontend Development</b>: The part of a website that the user interacts directly is termed as front end. It is also referred to as the ‘client side’ of the application.</p>

      <p><b>Backend Development</b>: Backend is the server side of a website. It is the part of the website that users cannot see and interact. It is the portion of software that does not come in direct contact with the users. It is used to store and arrange data.</p>

    </div>
  )
};

export default WebDev;
