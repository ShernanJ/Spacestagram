import React from "react";
import PortfolioIcon from "./Icons/PortfolioIcon";
import LinkedInIcon from "./Icons/LinkedInIcon";
import GitHubIcon from "./Icons/GitHubIcon";
import { Wrapper, Container } from "./NavigationStyles";

const Navigation = () => {
  return (
    <Wrapper>
      <Container>
        <li id="logo" onClick={() => window.scrollTo(0, 0)}>
          Spacestagram
        </li>
      </Container>
      <Container id="right">
        <li>
          <a
            href="https://github.com/ShernanJ/shopify-frontend-summer-2022"
            target="_blank"
            rel="noreferrer"
          >
            <GitHubIcon />
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/shernanjavier/"
            target="_blank"
            rel="noreferrer"
          >
            <LinkedInIcon />
          </a>
        </li>
        <li>
          <a
            href="https://www.shernanjavier.com/"
            target="_blank"
            rel="noreferrer"
          >
            <PortfolioIcon />
          </a>
        </li>
      </Container>
    </Wrapper>
  );
};
export default Navigation;
