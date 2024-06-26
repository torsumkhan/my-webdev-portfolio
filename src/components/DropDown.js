import React, { useState } from "react";
import { motion } from "framer-motion";

const DropDown = ({ children, title }) => {
  const [dropDown, setDropDown] = useState(false);
  return (
    <motion.div
      layout
      className="project"
      onClick={() => setDropDown(!dropDown)}
    >
      <motion.div
        className="mobile"
        layout
        style={{
          fontSize: "3rem",
          fontWeight: 400,
          cursor: "pointer",
          "@media (max-width:700px)": {
            fontSize: "1rem",
          },
        }}
      >
        {title}
      </motion.div>
      {dropDown ? children : ""}
      <motion.div layout className="project-line"></motion.div>
    </motion.div>
  );
};

export default DropDown;
