"use client";
import { useState } from "react";
import scss from "../styles/_main.module.scss";
import { motion } from "framer-motion";
function Nav() {
  const [open, setOpen] = useState(false);

  function handleChange() {
    setOpen(!open);
  }
  return (
    <motion.div
      className={scss.header}
      initial={{ y: "-100vh" }}
      animate={{ y: 0 }}
      transition={{ duration: 1, stiffness: 1 }}
    >
      <div className={scss.header_container_lg}>
        <div className={scss.header_search}>
          <img src="/search_icon.png" alt="search" id="search_icon" />
          <input type="text" name="query" id="search" />
        </div>
        <ul>
          <li>
            <a href="#">Categories</a>
          </li>
          <li>
            <a href="#">Website Builders</a>
          </li>
          <li>
            <a href="#">Today's deals</a>
          </li>
        </ul>
      </div>
      <div className={scss.header_container_md}>
        <button
          aria-expanded={open ? "false" : "true"}
          type="button"
          className="hamburger_button"
          onClick={handleChange}
        >
          <span className="hamburger_bar"></span>
          <span className="hamburger_bar"></span>
          <span className="hamburger_bar"></span>
        </button>
        <div className={scss.header_search}>
          <img src="/search_icon.png" alt="search" id="search_icon" />
          <input type="text" name="query" id="search" />
        </div>
        {open && (
          <ul>
            <motion.li
              initial={{ x: "-250vw" }}
              animate={{ x: 0 }}
              transition={{ duration: 1, stiffness: 1 }}
            >
              <a href="#">Categories</a>
            </motion.li>
            <motion.li
              initial={{ x: "-250vw" }}
              animate={{ x: 0 }}
              transition={{ duration: 0.6, stiffness: 1 }}
            >
              <a href="#">Website Builders</a>
            </motion.li>
            <motion.li
              initial={{ x: "-250vw" }}
              animate={{ x: 0 }}
              transition={{ duration: 0.1, stiffness: 1 }}
            >
              <a href="#">Today's deals</a>
            </motion.li>
          </ul>
        )}
      </div>
    </motion.div>
  );
}

export default Nav;
