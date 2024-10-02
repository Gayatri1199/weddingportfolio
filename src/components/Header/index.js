import React from "react";
import styled from "styled-components";

const HeaderStyle = styled.div`
  padding: 20px 40px;
  background: #b7a99a;
  display: flex;
  justify-content: space-between;
  align-items: center;
  .logo {
    max-width: 100px;
    width: 100%;
  }

  a {
    font-size: 15px;
    margin-right: 50px;
    text-decoration: none;
    text-transform: uppercase;
    color: #fff;
    font-weight: 600;
    letter-spacing: 1.5px;
  }

  .contact {
    padding: 10px 30px;
    text-transform: uppercase;
    background: #fff;
    color: #b7a99a;
    font-weight: bold;
  }
`;
const Header = () => {
  return (
    <HeaderStyle>
      <div className="logo">
        <a href="/">
          <img
            src="https://weddingsincrete.gr/wp-content/uploads/2022/12/footer-logo.svg"
            alt="Logo"
          />
        </a>
      </div>
      <div className="navigations">
        <a href="/">Home</a>
        <a href="/">About Us</a>
        <a href="/">Services</a>
        <a href="/">Portfolio</a>
        <a href="/">Destination</a>
        <a href="/">Blog</a>
        <a href="/">Contact Us</a>
      </div>
      <div className="contact">Wedding</div>
    </HeaderStyle>
  );
};

export default Header;
