"use client";
import React from "react";
import { motion } from "framer-motion";
import scss from "../styles/_header.module.scss";
const Header = () => {
  const currentDate = new Date(2022, 1, 27);
  const options = { month: "long", day: "numeric", year: "numeric" };
  const formattedDate = currentDate.toLocaleDateString("en-US", options);

  return (
    <div className={scss.header_container}>
      <motion.div
        className={scss.header_title}
        initial={{ y: "-100vh" }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, stiffness: 100 }}
      >
        <h1>Best Website builders in the US</h1>
      </motion.div>
      <motion.div
        initial={{ y: "-100vh" }}
        animate={{ y: 0 }}
        transition={{ duration: 0.2, stiffness: 100 }}
        className={scss.title_bar}
      >
        <div className={scss.date}>
          <img src="/check_icon.png" alt="check" />
          <p>{` - Last Updated ${formattedDate}`}</p>
        </div>
        <div className={scss.disclosure}>
          <img src="/info_icon.png" alt="info" />
          <p>Advertising Disclosure</p>
        </div>
        <div className={scss.filter}>
          <input
            list="options"
            name="filter"
            id="search"
            defaultValue="Top Relevant"
          />
          <datalist id="options">
            <option value="Recent" />
            <option value="Top Relevant" />
            <option value="Most Viewed" />
            <option value="Popular" />
          </datalist>
        </div>
      </motion.div>
      <div className={scss.menu}>
        <ul>
          <motion.li
            initial={{ x: "-250vw" }}
            animate={{ x: 0 }}
            transition={{ duration: 0.1, stiffness: 1 }}
          >
            <a href="#">Tools</a>
          </motion.li>
          <motion.li
            initial={{ x: "-300vw" }}
            animate={{ x: 0 }}
            transition={{ duration: 0.2, stiffness: 1 }}
          >
            <a href="#">AWS Builder</a>
          </motion.li>
          <motion.li
            initial={{ x: "-350vw" }}
            animate={{ x: 0 }}
            transition={{ duration: 0.3, stiffness: 1 }}
          >
            <a href="#">Start Build</a>
          </motion.li>
          <motion.li
            initial={{ x: "-400vw" }}
            animate={{ x: 0 }}
            transition={{ duration: 0.4, stiffness: 1 }}
          >
            <a href="#">Build Supports</a>
          </motion.li>
          <motion.li
            initial={{ x: "-450vw" }}
            animate={{ x: 0 }}
            transition={{ duration: 0.5, stiffness: 1 }}
          >
            <a href="#">Tooling</a>
          </motion.li>
          <motion.li
            initial={{ x: "-500vw" }}
            animate={{ x: 0 }}
            transition={{ duration: 0.6, stiffness: 1 }}
          >
            <a href="#">BlueHosting</a>
          </motion.li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
