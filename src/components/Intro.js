import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { container, titleAnim, titleCaption } from "../util";

const Intro = () => {
  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="show"
      exit="exit"
    >
      <StyledIntro>
        <div className="title">
          <StyledHide>
            <motion.h2 id="#target" variants={titleAnim}>
              I am Torsum.
            </motion.h2>
          </StyledHide>
          <StyledHide id="target">
            <motion.h3 variants={titleCaption}>
              Designer & <span>Front-end Developer</span>
            </motion.h3>
          </StyledHide>
        </div>
      </StyledIntro>
    </motion.div>
  );
};

const StyledIntro = styled(motion.div)`
  min-height: 100vh;
  display: flex;
  text-align: center;
  align-items: center;
  justify-content: center;
  padding: 5rem 10rem;
  @media (max-width: 700px) {
    padding: 5rem 4rem;
  }
`;

const StyledHide = styled(motion.div)`
  h2 {
    font-size: 4rem;
    font-weight: 700;
  }
  h3 {
    margin-top: 2rem;
    font-size: 3.4rem;
    font-weight: 400;
  }
  @media (max-width: 700px) {
    h2 {
      font-size: 2.6rem;
    }
    h3 {
      font-size: 2rem;
    }
  }
`;

export default Intro;
