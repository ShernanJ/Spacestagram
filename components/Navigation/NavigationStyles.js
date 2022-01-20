import styled from "styled-components";

export const Wrapper = styled.nav`
  position: fixed;
  display: flex;
  top: 0;
  left: 0;
  z-index: 99;
  background-color: #fbf7ed;
  background-image: radial-gradient(gray 0.5px; #fbf7ed 0.5px);
  background-size: 20px 20px;
  background-position: 0 0; 10px 10px;
  height: 60px;
  width: 100%;
  box-shadow:
    0px 3px 5px -1px rgb(0 0 0 / 20%); 0px 5px 8px 0px rgb(0 0 0 / 14%); 0px 1px 14px 0px rgb(0 0 0 / 12%);
`;

export const Container = styled.ul`
  display: flex;
  font-weight: bold;
  flex: 1;
  justify-content: left;
  align-items: center;
  padding-right: auto;
  gap: 1rem;
  flex-direction: row;
  list-style: none;
  & li#logo {
    margin: 0;
    font-size: 24px;
    transition: color 0.3s;
  }
  & li#logo:hover {
    transition: color 0.3s;
    color: gray;
    cursor: pointer;
  }

  &#right {
    font-weight: normal;
    justify-content: right;

    & li {
      font-size: 16px;
    }
  }
`;
