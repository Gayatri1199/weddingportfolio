import React from "react";
import styled from "styled-components";

const AboutUsStyle = styled.div`
  max-width: 1360px;
  margin: 100px auto;
  display: flex;
  gap: 100px;
  justify-content: center;

  h2 {
    font-size: 45px;
    color: #b7a99a;
  }

  p {
    font-size: 20px;
    margin-bottom: 50px;
    color: #504f4f;
    letter-spacing: 0.8px;
    line-height: 24px;
  }

  .content {
    max-width: 500px;
    width: 100%;
  }

  .image {
    position: relative;
    .image-circle {
      position: absolute;
      top: 0px;
      z-index: 0;
      display: block;
      left: -100px;
      width: 100%;
      animation: float 6s ease-in-out infinite;
    }
  }

  a {
    padding: 10px 15px;
    color: #fff;
    background: #b7a99a;
  }
`;

const AboutUs = () => {
  return (
    <AboutUsStyle>
      <div className="image">
        <img
          src="https://html.tf.dreamitsolution.net/lavewell/assets/images/home-1/wedding-thumb.jpg"
          alt="About Us"
        />
        <img
          src="../../bg-image-circle.svg"
          alt="Animation"
          className="image-circle"
        />
      </div>
      <div className="content">
        <h2>ABOUT US</h2>
        <p>
          We are Wedding Planners & Designers with more than 25 years of
          experience in the wedding industry!
        </p>
        <p>
          We are here to plan your wedding and decorate exclusively with
          handmade freshly cut flowers made in our workshop. With more than
          twenty years of experience, we can organize both small and large
          events in Crete with great results and feedback, all year!
        </p>
        <p>
          We are familiar with the best professionals and aware of the best
          spots for your wedding, known only to us!
        </p>
        <a href="#">LEARN MORE</a>
      </div>
    </AboutUsStyle>
  );
};

export default AboutUs;
