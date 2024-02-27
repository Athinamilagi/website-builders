// MainComponent.js
import React from "react";
import Card from "./Card";
import { motion } from "framer-motion";

const CardMain = () => {
  const options = ["Best Choice", "Best Value"];
  const icons = ["/trophy_icon.png", "/diamond_icon.png"];
  const stars = [
    "/first_star.png",
    "/second_star.png",
    "/last_bf_star.png",
    "/last_star.png",
  ];
  const content = [
    {
      title: "WixPro 72-Inch Responsive Website Builder",
      about:
        "- Comprehensive Digital Platform Creation Tool, Streamlined Design Interface for Professional Websites and Online Stores (Black/Blue)",
      hightitle: "Main Highlights",
      content:
        "[What You Get]: Receive the WixPro website builder suite, access to premium design templates, an extensive library of widgets and apps, and detailed step-by-step guides.",
    },
    {
      title: "SiteCraft 68-Inch Ultimate Web Design Studio",
      about:
        "- Advanced Site Creation Toolkit, Intuitive Drag-and-Drop Editor for Dynamic Websites and E-commerce Platforms (Green/White)",
      hightitle: "Main Highlights",
      content:
        "[What You Get]: Gain access to the SiteCraft design studio, featuring a robust selection of design elements, SEO optimization tools, and e-commerce integrations.",
    },
    {
      title: "WixPro 72-Inch Responsive Website Builder",
      about:
        "- Comprehensive Digital Platform Creation Tool, Streamlined Design Interface for Professional Websites and Online Stores (Black/Blue)",
      hightitle: "Main Highlights",
      content:
        "[What You Get]: Receive the WixPro website builder suite, access to premium design templates, an extensive library of widgets and apps, and detailed step-by-step guides.",
    },
    {
      title: "CDK Resposive Builder:",
      about:
        "An extensive library of widgets and apps, and detailed step-by-step guides",
      hightitle: "Main Highlights",
      content:
        "[What You Get]: Receive the WixPro website builder suite, access to premium design templates, an extensive library of widgets and apps, and detailed step-by-step guides.",
    },
  ];
  return (
    <motion.div
      initial={{ y: "-250vw" }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, stiffness: 1 }}
    >
      {content.map((item, index) => (
        <Card
          key={index}
          icon={icons[index % icons.length]}
          option={options[index % options.length]}
          title={item.title}
          about={item.about}
          highlightTitle={item.hightitle}
          highlightContent={item.content}
          rating={9.5}
          i={index}
          stars={stars}
        />
      ))}
    </motion.div>
  );
};

export default CardMain;
