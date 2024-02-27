"use client";
import CardMain from "@/{components}/card/CardMain";
import scss from "../styles/_main.module.scss";
import Recommendation from "@/{components}/Recommendation";

const page = () => {
  return (
    <div className={scss.page}>
      <CardMain />
      <Recommendation />
    </div>
  );
};

export default page;
