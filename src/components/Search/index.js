import React from "react";
import styled from "styled-components";

const SearchStyle = styled.div`
  max-width: 800px;
  margin: auto;
  display: flex;
  gap: 20px;
  padding: 20px;
  background: #fff;
  margin-top: -50px;
  z-index: 1;
  position: relative;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  .location,
  .search-bar {
    width: 50%;
    padding: 10px 20px;
  }

  .location {
    border-right: 2px solid #b7a99a;
    display: flex;
  }

  i {
    color: #b7a99a;
    font-size: 26px;
    display: inline-block;
    margin-right: 15px;
  }

  select,
  input {
    border: none;
    padding: 5px;
    font-size: 18px;
    width: 80%;
  }
`;
const Search = () => {
  return (
    <SearchStyle>
      <div className="location">
        <i class="fa-solid fa-location-dot"></i>
        <span className="form-control">
          <label>Location</label>
          <select name="cars" id="cars">
            <option value="volvo">Volvo</option>
            <option value="saab">Saab</option>
            <option value="mercedes">Mercedes</option>
            <option value="audi">Audi</option>
          </select>
        </span>
      </div>
      <div className="search-bar">
        <i class="fa-solid fa-magnifying-glass"></i>{" "}
        <input
          type="text"
          id="fname"
          name="fname"
          placeholder="Search for Services"
        />
      </div>
    </SearchStyle>
  );
};

export default Search;
