import React from "react";
import Rating from "./Rating";
import scss from "../../styles/_card.module.scss";

const Card = ({
  icon,
  option,
  title,
  about,
  highlightTitle,
  highlightContent,
  rating,
  stars,
  i,
}) => {
  return (
    <div className={scss.card_container}>
      {i === 1 || i === 0 ? (
        <div className={scss.preferece}>
          <img src={icon} alt="preference" />
          <div className={scss.preferece_content}>{option}</div>
        </div>
      ) : null}

      <small>{i + 1}</small>
      <div className={scss.img}>
        <img src="/computer_icon.png" alt="computer" />
        <div className={scss.title}>{title}</div>
      </div>
      <div className={scss.main_content}>
        <div className={scss.main}>
          <div className={scss.header}>{title}</div>
          <div className={scss.about}>{about}</div>
        </div>
        <div className={scss.highlights}>
          <div className={scss.highlights_title}>{highlightTitle}</div>
          <div className={scss.highlights_content}>{highlightContent}</div>
          <div className={scss.highlights_button}>
            <button>Show more</button>
          </div>
        </div>
      </div>
      <Rating rating={rating} stars={stars}  i={i}/>
    </div>
  );
};

export default Card;
