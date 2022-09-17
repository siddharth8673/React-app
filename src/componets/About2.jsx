import React  from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { Button } from "../styles/Button";


const About2= () => {
  
  return (
    <Wrapper>
      <div className="container grid grid-two-column">
        <div className="section-hero-data">
          <p className="hero-top-data">THIS IS ME</p>
          <h1 className="hero-heading">Vijay</h1>
          <p className="hero-para">
            I'm vijay. Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Tempora non facilis rerum animi ipsam laudantium excepturi eaque
            labore. At, eligendi. Temporibus quos, quo illum nobis mollitia
            placeat pariatur eligendi enim, beatae repellendus illo incidunt
            voluptatum necessitatibus. Dolore suscipit nesciunt doloribus optio
            incidunt a at temporibus in eum, repellat odio sed.
          </p>
          <Button className="btn hireme-btn">
            <NavLink to="/contact">Contact us</NavLink>
          </Button>
        </div>

        <div className="section-hero-image">
          <picture>
            <img src="./images/about1.png" alt="hero image" className="hero-img " />
          </picture>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  padding: 9rem 0;
  .section-hero-data {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  .btn {
    max-width: 20rem;
  }
  .hero-top-data {
    text-transform: uppercase;
    font-weight: 500;
    font-size: 1.5rem;
    color: ${({ theme }) => theme.colors.helper};
  }
  .hero-heading {
    text-transform: uppercase;
    font-size: 6.4rem;
  }
  .hero-para {
    margin-top: 1.5rem;
    margin-bottom: 3.4rem;
    max-width: 60rem;
  }
  .section-hero-image {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  picture {
    text-align: center;
  }
  .hero-img {
    max-width: 80%;
  }
  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    .grid {
      gap: 7.2rem;
    }
  }
`;

export default About2;
