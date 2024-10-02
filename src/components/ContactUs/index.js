import React from "react";
import styled from "styled-components";

const ContactUsStyle = styled.div`
  padding: 100px;
  background: #f5f5f5;
  position: relative;
  background-image: url("https://html.tf.dreamitsolution.net/lavewell/assets/images/home-1/contact-bg.png");
  background-position: fixed;
  background-size: 100%;
  h2 {
    font-size: 45px;
    text-align: center;
    color: #b7a99a;
    padding-bottom: 75px;
    // border-bottom: 1px solid #b7a99a;
  }
  form {
    max-width: 1300px;
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    gap: 50px;
    margin: auto;
    margin-top: 0px;
    .form-control {
      max-width: 48%;
      width: 100%;
    }
    input,
    select {
      width: 100%;
      display: block;
      padding: 10px;
      border: none;
      border-bottom: 1px solid #b7a99a;
      background: transparent;
    }
    label {
      font-size: 18px;
      color: #b7a99a;
      font-weight: 600;
      text-transform: uppercase;
    }
  }
  button {
    max-width: 250px;
    width: 100%;
    background: #b7a99a;
    color: #fff;
    text-transform: uppercase;
    border: none;
    cursor: pointer;
    font-size: 16px;
    letter-spacing: 1.5px;
  }
  .image-circle {
    position: absolute;
    max-width: 30%;
    top: -260px;
    right: -240px;
    animation: float 6s ease-in-out infinite;
  }

  h3 {
    font-size: 12px;
    text-align: center;
    color: #80918b;
    font-weight: bold;
  }
`;

const ContactUs = () => {
  return (
    <ContactUsStyle>
      <img
        src="../../bg-image-circle.svg"
        alt="Animation"
        class="image-circle"
      ></img>
      <img
        src="../../bg-image-circle.svg"
        alt="Animation"
        class="image-circle"
      ></img>
      <h3>CONTACT US</h3>
      <h2>GET A QUOTE</h2>
      <form>
        <div className="form-control">
          {" "}
          <label>Name</label>
          <input type="text" />
        </div>
        <div className="form-control">
          <label>Email</label>
          <input type="text" />
        </div>
        <div className="form-control">
          <label>Name</label>
          <input type="text" />
        </div>
        <div className="form-control">
          <label>Event</label>
          <select name="cars" id="cars">
            <option value="volvo">Volvo</option>
            <option value="saab">Saab</option>
            <option value="mercedes">Mercedes</option>
            <option value="audi">Audi</option>
          </select>
        </div>
        <div className="form-control">
          <label>Budget</label>
          <select name="cars" id="cars">
            <option value="volvo">Volvo</option>
            <option value="saab">Saab</option>
            <option value="mercedes">Mercedes</option>
            <option value="audi">Audi</option>
          </select>
        </div>

        <button>Submit Now</button>
      </form>
    </ContactUsStyle>
  );
};

export default ContactUs;
