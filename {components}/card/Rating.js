// Rating.js
import React from "react";
import scss from "../../styles/_card.module.scss";
import { motion } from "framer-motion";

const Rating = ({ rating, stars, i }) => {
  return (
    <div className={scss.rating_container}>
      <div className={scss.rating}>
        <div className={scss.rating_val}>{rating}</div>
        <div className={scss.rating_title}>Excellent</div>
        <div className={scss.rating_star}>
          <img src={stars[i]} alt={`Rating: ${rating}`} />
        </div>
      </div>
      <div className={scss.rating_btn}>
        <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
          View
        </motion.button>
      </div>
    </div>
  );
};

export default Rating;
