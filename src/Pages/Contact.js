import React, { useState } from "react";
import emailjs from "emailjs-com";
import Swal from "sweetalert2";

const Contact = () => {
  const [data, setData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const InputEvent = (e) => {
    const { name, value } = e.target;

    setData((preVal) => {
      return {
        ...preVal,
        [name]: value,
      };
    });
  };

  const formSubmit = async (e) => {
    e.preventDefault();
    // alert(`
    // My name is ${data.fullname}.
    // My mobile number is ${data.phone}.
    // My Email Address is ${data.email}.
    // I want to say ${data.msg}.
    // `);
    try {
      await emailjs.sendForm("gmail", "template_zflln3p", e.target, "user_PInTtJatFbEm0cJHjZCmq");

      Swal.fire(
        "Message Sent Successfully",
        "We will get in touch with you super soon.",
        "success"
      )

    } catch (err) {
      Swal.fire({
        icon: "error",
        title: "Something Went Wrong.",
        text: err.text,
      });
    }

    setData({
      name: "",
      email: "",
      subject: "",
      message: "",
    })

  };

  return (
    <>
      <div className="my-5">
        <h1 className="text-center">Contact Us</h1>
      </div>
      <div className="container container-div mb-5">
        <div className="row">
          <div className="col-md-6 col-10 mx-auto">
            <form onSubmit={formSubmit}>
              <div className="mb-3">
                <label className="form-label" htmlFor="name">
                  Full Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  name="name"
                  value={data.name}
                  onChange={InputEvent}
                  placeholder="Enter your name"
                  required
                />
              </div>
              <div className="mb-3">
                <label className="form-label" htmlFor="email">
                  Email address
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  name="email"
                  value={data.email}
                  onChange={InputEvent}
                  placeholder="name@example.com"
                  required
                />
                <small
                  id="emailHelp"
                  className="form-text text-muted"
                >
                  We'll never share your email with anyone else.
                </small>
              </div>
              <div className="mb-3">
                <label className="form-label" htmlFor="subject">
                  Subject
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="subject"
                  name="subject"
                  value={data.subject}
                  onChange={InputEvent}
                  placeholder="Enter Subject of Mail"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="message">Message</label>
                <br />
                <textarea
                  id="message"
                  name="message"
                  style={{ height: "5%", width: "100%" }}
                  required
                  name="message"
                  value={data.message}
                  onChange={InputEvent}
                  placeholder="type your message here"
                  className="p-2"
                ></textarea>
              </div>
              <button
                type="submit"
                className="btn btn-outline-primary"
              >
                Submit Form
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
