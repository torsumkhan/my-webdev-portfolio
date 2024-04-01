import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

import DropDown from "./DropDown";
import RBC from "../images/RBC.png";
import RBC2 from "../images/RBC-2.png";
import RBC3 from "../images/RBC-3.png";
import maple from "../images/mapleleaf.png";
import maple2 from "../images/mapleleaf-2.png";
import phonak from "../images/phonak.png";
import hip2save from "../images/hip2save.png";
import airpods from "../images/airpods.png";
import airpods2 from "../images/airpods-2.png";
import superign from "../images/superIgn.png";
import myspotify from "../images/myspotify.png";
import megapexels from "../images/megapexels.png";

const Projects = () => {
  return (
    <StyledProjectContainer>
      <div>
        <motion.div className="details-container" layout>
          <DropDown title="Royal Bank of Canada (RBC)">
            <div className="grid">
              <div className="details">
                <h3>Developer</h3>
                <p>
                  I worked with a Toronto-based agency, Trew Knowledge Inc. to
                  collaborate in the development of websites for RBC's digital
                  products. My primary emphasis was leveraging the
                  pre-established design system to craft bespoke WordPress
                  themes and Gutenberg blocks tailored specifically for RBC's
                  marketing teams. By harnessing the power of WordPress, we
                  ensured a modular website architecture, facilitating seamless
                  page construction and customization for the RBC team.
                </p>
                <a href="https://www.rbcroyalbank.com/en-ca/my-money-matters/">
                  <p id="see-website">See Website</p>
                </a>
              </div>
              <div className="img-wrapper">
                <div className="img-container">
                  <img src={RBC} alt="" />
                </div>
                <div className="img-container">
                  <img src={RBC2} alt="" />
                </div>
                <div className="img-container">
                  <img src={RBC3} alt="" />
                </div>
              </div>
            </div>
          </DropDown>

          <DropDown title="Maple Leaf Foods">
            <div className="grid">
              <div className="details">
                <h3>Developer</h3>
                <p>
                  I played an integral role in the development of the Maple Leaf
                  corporate and Maple Leaf Brands websites while collaborating
                  with the Trew Knowledge Inc. development team. Our primary
                  objectives were twofold: Firstly, we crafted custom blocks to
                  enhance functionality, and secondly, we meticulously revamped
                  the website's styling to align with the company's rebranding
                  and redesign initiatives.
                </p>
                <a href="https://www.mapleleaffoods.com/">
                  <p id="see-website">See Website</p>
                </a>
              </div>
              <div className="img-wrapper">
                <div className="img-container">
                  <img src={maple} alt="" />
                </div>
                <div className="img-container">
                  <img src={maple2} alt="" />
                </div>
              </div>
            </div>
          </DropDown>

          <DropDown title="Phonak">
            <div className="grid">
              <div className="details">
                <h3>Developer</h3>
                <p>
                  Part of the comprehensive overhaul of the Phonak website with
                  a keen focus on elevating the user experience. Central to this
                  initiative was the seamless integration of smooth animations
                  and section transitions, enhancing navigational flow
                  throughout the site. By strategically incorporating elements
                  that effectively conveyed the brand's values, we ensured
                  alignment with Phonak's identity while delivering an immersive
                  online experience for users.
                </p>
                <a href="https://www.phonak.com/en-ca">
                  <p id="see-website">See Website</p>
                </a>
              </div>
              <div className="img-wrapper">
                <div className="img-container">
                  <img src={phonak} alt="" />
                </div>
              </div>
            </div>
          </DropDown>

          <DropDown title="Hip2Save">
            <div className="grid">
              <div className="details">
                <h3>Developer</h3>
                <p>
                  As a member of the Trew Knowledge Inc. team, I actively
                  contributed to the debugging efforts, promptly addressing user
                  tickets pertaining to website bugs while simultaneously
                  spearheading the development of new features. In my role
                  overseeing the maintenance of the legacy website, Hip2Save, I
                  diligently managed theme and plugin updates, ensuring optimal
                  functionality, and seamlessly integrated new features and
                  pages to enhance user engagement and experience.
                </p>
                <a href="https://hip2save.com/">
                  <p id="see-website">See Website</p>
                </a>
              </div>
              <div className="img-wrapper">
                <div className="img-container">
                  <img src={hip2save} alt="" />
                </div>
              </div>
            </div>
          </DropDown>

          <DropDown title="Apple Airpods Max">
            <div className="grid">
              <div className="details">
                <h3>Developer | UI Designer</h3>
                <p>
                  For a personal project, I meticulously recreated the Apple
                  AirPods Max website, paying close attention to its signature
                  minimalist design. Employing Blender, I personally crafted
                  detailed 3D models of the product. Moreover, I integrated an
                  interactive 3D model seamlessly into the website using
                  three.js, allowing users to explore the product from various
                  angles. To further enhance user engagement, I implemented
                  captivating page and scroll animations using GSAP. The
                  overarching aim was to preserve the simplicity of Apple's
                  design ethos while augmenting it with immersive 3D
                  interactivity and visually stunning animations.
                </p>
                <a href="https://torsumkhan.github.io/Appleairpods_GSAP/">
                  <p id="see-website">See Website</p>
                </a>
              </div>
              <div className="img-wrapper">
                <div className="img-container">
                  <img src={airpods} alt="" />
                </div>
                <div className="img-container">
                  <img src={airpods2} alt="" />
                </div>
              </div>
            </div>
          </DropDown>

          <DropDown title="Super IGN">
            <div className="grid">
              <div className="details">
                <h3>Developer | UI Designer</h3>
                <p>
                  Independently, I conceptualized and developed a dynamic video
                  game database, curating an extensive catalogue of upcoming and
                  trending video games. Leveraging a specialized video game API,
                  I seamlessly fetched pertinent data to construct a sleek and
                  contemporary database interface. By prioritizing clean design
                  principles and modern aesthetics, I ensured an engaging and
                  user-friendly platform for enthusiasts to explore and discover
                  the latest in gaming trends and releases.
                </p>
                <a href="https://superign.netlify.app/">
                  <p id="see-website">See Website</p>
                </a>
              </div>
              <div className="img-wrapper">
                <div className="img-container">
                  <img src={superign} alt="" />
                </div>
              </div>
            </div>
          </DropDown>

          <DropDown title="My Spotify - Music Streaming App">
            <div className="grid">
              <div className="details">
                <h3>Developer | UI Designer</h3>
                <p>
                  A music streaming app that fetches music from an external
                  database and has the functionality of a typical music
                  streaming app. So sit back, relax, and immerse yourself in the
                  soothing sounds of chill lo-fi music available on the app
                </p>
                <a href="https://superspotify.netlify.app/">
                  <p id="see-website">See Website</p>
                </a>
              </div>
              <div className="img-wrapper">
                <div className="img-container">
                  <img src={myspotify} alt="" />
                </div>
              </div>
            </div>
          </DropDown>

          <DropDown title="Mega Pexels">
            <div className="grid">
              <div className="details">
                <h3>Developer | UI Designer</h3>
                <p>
                  Image sharing app that fetches the most-updated images from
                  the popular image viewing website, Pexels. Has endless
                  scrolling functionality and a search feature to search for
                  different categories.
                </p>
                <a href="https://megapexels.netlify.app/">
                  <p id="see-website">See Website</p>
                </a>
              </div>
              <div className="img-wrapper">
                <div className="img-container">
                  <img src={megapexels} alt="" />
                </div>
              </div>
            </div>
          </DropDown>
        </motion.div>
      </div>
    </StyledProjectContainer>
  );
};

const StyledProjectContainer = styled(motion.div)`
  min-height: 100vh;
  margin: 4rem 8rem;

  h2 {
    display: block;
    font-size: 3rem;
  }
  .project-line {
    background: gray;
    height: 0.2rem;
    margin: 3rem 0rem;
    width: 100%;
  }
  .grid {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: left;
    padding-bottom: 3rem;
    img {
      margin-top: 3rem;
      border-radius: 5px;
    }
    p {
      width: 80%;
    }
  }

  .project {
    padding: 1rem 0rem;
    @media (max-width: 700px) {
      div {
        h1 {
          font-size: 2rem;
        }
      }
    }
  }

  .details-container {
    display: flex;
    flex-direction: column;

    .details {
      display: flex;
      justify-content: center;
      flex-direction: column;
      gap: 2rem;
      h3 {
        font-size: 2rem;
        padding-top: 32px;
      }
      p {
        font-size: 1.8rem;
        width: 60%;
      }
      a {
        text-decoration: none;
        color: black;
      }
      div {
        display: flex;
        gap: 1.2rem;
      }
    }
  }

  @media (max-width: 1700px) {
    margin-top: 8rem;
    .details {
      margin-top: 4rem;
    }
  }
  @media (max-width: 900px) {
    .grid {
      display: flex;
    }
    img {
      display: none;
    }
  }
  @media (max-width: 700px) {
    margin-top: 6rem;
  }
`;

const styledGrid = styled(motion.div)`
  display: grid;
  grid-template-columns: 1fr 1fr;
`;

export default Projects;
