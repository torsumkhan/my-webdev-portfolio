import React from "react";
import styled from "styled-components";

const NavBar = () => {
  return (
    <StyledNav>
      <div>
        <p>TORSUM KHAN</p>
      </div>
      <div>
        <StyledInnerDiv>
          <a href="mailto:torsum.khan@gmail.com">
            <p>CONTACT</p>
          </a>
          <a href="https://www.linkedin.com/in/torsumkhan/">
            <p>LINKEDIN</p>
          </a>
        </StyledInnerDiv>
      </div>
    </StyledNav>
  );
};

const StyledNav = styled.div`
  display: flex;
  justify-content: space-between;
  padding-left: 2.4rem;
  padding-right: 2.4rem;
  padding-top: 2rem;
`;

const StyledInnerDiv = styled.div`
  display: flex;
  gap: 24px;
  a {
    text-decoration: none;
    color: white;
  }
`;
export default NavBar;
