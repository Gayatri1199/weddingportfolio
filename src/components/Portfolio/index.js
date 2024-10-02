import React, { useState } from "react";
import styled from "styled-components";
import Slider from "react-slick";

const PortfolioStyle = styled.div`
  margin: 100px 0px;
  h2 {
    text-align: center;
    font-size: 45px;
    color: #b7a99a;
  }

  .tab-list {
    list-style: none;
    display: flex;
    justify-content: center;
    gap: 100px;

    max-width: 1360px;
    margin: auto;
    padding: 30px 10px;

    text-transform: uppercase;
    border-bottom: 1px solid #b7a99a;
    letter-spacing: 3px;
    color: #b7a99a;
    font-weight: 600;
    font-size: 20px;
    li {
      cursor: pointer;
    }
  }

  .tab-content {
    margin-top: 50px;
    max-height: 700px;
    overflow: hidden;
  }
`;
const Portfolio = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 3000,
  };
  const tabs = [
    {
      label: "ALL",

      images: [
        "https://html.tf.dreamitsolution.net/lavewell/assets/images/home-1/wedding-thumb.jpg",
        "https://html.tf.dreamitsolution.net/lavewell/assets/images/home-1/wedding-thumb.jpg",
        "https://html.tf.dreamitsolution.net/lavewell/assets/images/home-1/wedding-thumb.jpg",
        "https://html.tf.dreamitsolution.net/lavewell/assets/images/home-1/wedding-thumb.jpg",
        "https://html.tf.dreamitsolution.net/lavewell/assets/images/home-1/wedding-thumb.jpg",
        "https://html.tf.dreamitsolution.net/lavewell/assets/images/home-1/wedding-thumb.jpg",
      ],
    },
    {
      label: "WEDDINGS",

      images: [
        "https://html.tf.dreamitsolution.net/lavewell/assets/images/home-1/about-thumb1.png",
        "https://html.tf.dreamitsolution.net/lavewell/assets/images/home-1/about-thumb1.png",
        "https://html.tf.dreamitsolution.net/lavewell/assets/images/home-1/about-thumb1.png",
        "https://html.tf.dreamitsolution.net/lavewell/assets/images/home-1/about-thumb1.png",
        "https://html.tf.dreamitsolution.net/lavewell/assets/images/home-1/about-thumb1.png",
        "https://html.tf.dreamitsolution.net/lavewell/assets/images/home-1/about-thumb1.png",
      ],
    },
    {
      label: "MARRIAGE PROPOSALS",

      images: [
        "https://weddingsincrete.gr/wp-content/uploads/2023/08/Chania-old-port-marriage-proposal-MARRY-ME-letters-11.jpg",
        "https://weddingsincrete.gr/wp-content/uploads/2023/08/Chania-old-port-marriage-proposal-MARRY-ME-letters-11.jpg",
        "https://weddingsincrete.gr/wp-content/uploads/2023/08/Chania-old-port-marriage-proposal-MARRY-ME-letters-11.jpg",
        "https://weddingsincrete.gr/wp-content/uploads/2023/08/Chania-old-port-marriage-proposal-MARRY-ME-letters-11.jpg",
        "https://weddingsincrete.gr/wp-content/uploads/2023/08/Chania-old-port-marriage-proposal-MARRY-ME-letters-11.jpg",
        "https://weddingsincrete.gr/wp-content/uploads/2023/08/Chania-old-port-marriage-proposal-MARRY-ME-letters-11.jpg",
      ],
    },
    {
      label: "VOW RENEWAILS",

      images: [
        "https://weddingsincrete.gr/wp-content/uploads/2023/08/Chania-old-port-marriage-proposal-MARRY-ME-letters-11.jpg",
        "https://weddingsincrete.gr/wp-content/uploads/2023/08/Chania-old-port-marriage-proposal-MARRY-ME-letters-11.jpg",
        "https://weddingsincrete.gr/wp-content/uploads/2023/08/Chania-old-port-marriage-proposal-MARRY-ME-letters-11.jpg",
        "https://weddingsincrete.gr/wp-content/uploads/2023/08/Chania-old-port-marriage-proposal-MARRY-ME-letters-11.jpg",
        "https://weddingsincrete.gr/wp-content/uploads/2023/08/Chania-old-port-marriage-proposal-MARRY-ME-letters-11.jpg",
        "https://weddingsincrete.gr/wp-content/uploads/2023/08/Chania-old-port-marriage-proposal-MARRY-ME-letters-11.jpg",
      ],
    },
  ];
  const [activeTab, setActiveTab] = useState(tabs[0].label);

  return (
    <PortfolioStyle>
      <h2>LET'S DIVE IN</h2>
      <ul className="tab-list">
        {tabs.map((tab) => (
          <li
            key={tab.label}
            className={`tab-item ${activeTab === tab.label ? "active" : ""}`}
            onClick={() => setActiveTab(tab.label)}
          >
            {tab.label}
          </li>
        ))}
      </ul>
      <div className="tab-content">
        {tabs.map((tab) =>
          activeTab === tab.label ? (
            <div key={tab.label}>
              <Slider {...settings}>
                {tab.images.map((img, index) => (
                  <div key={index}>
                    <img
                      src={img}
                      alt={`Tab ${tab.label} ${index + 1}`}
                      style={{ width: "100%" }}
                    />
                  </div>
                ))}
              </Slider>
            </div>
          ) : null
        )}
      </div>
    </PortfolioStyle>
  );
};

export default Portfolio;
