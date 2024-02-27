import React from "react";
import Slider from "react-slick";
import { motion } from "framer-motion";
import "../node_modules/slick-carousel/slick/slick.scss";
import "../node_modules/slick-carousel/slick/slick-theme.scss";
import scss from "../styles/_recommendation.module.scss";

const settings = {
  dots: false,
  infinite: true,
  slidesToShow: 3,
  autoplay: true,
  autoplaySpeed: 800,
  pauseOnHover: true,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: false,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        dots: false,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: false,
      },
    },
  ],
};

const Recommendation = () => {
  const loop = [1, 2, 3];

  return (
    <>
      <motion.div
        initial={{ x: "-100vw" }}
        animate={{ x: 0 }}
        transition={{ duration: 0.6, stiffness: 1 }}
        className="mobile_slider"
      >
        <Slider {...settings}>
          {loop.map((index) => (
            <div key={index} className={scss.container_content}>
              <div className={scss.item}>
                <div className={scss.item_img}>
                  <img src="/computer_icon.png" alt="computer" />
                </div>
                <div className={scss.offer}>20% Off</div>
                <div className={scss.time}>Limited time</div>
                <div className={scss.item_text}>
                  <h3>Webbuilder {index}</h3>
                  <p>Computer Modern clasic with wix support .</p>
                </div>
                <div className={scss.amount}>
                  <p>$39.96</p>
                  <small>$ 49.96</small>
                  <span>(20% off)</span>
                </div>
                <motion.div
                  className={scss.btn}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  View Deal
                </motion.div>
              </div>
            </div>
          ))}
        </Slider>
      </motion.div>
      <motion.div
        initial={{ y: "-450vh" }}
        animate={{ y: 0 }}
        transition={{ duration: 0.1, stiffness: 100 }}
        className={scss.container_signup}
      >
        <p>Sign up and get exclusive special deals</p>
        <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
          Sign up
        </motion.button>
      </motion.div>
    </>
  );
};

export default Recommendation;
