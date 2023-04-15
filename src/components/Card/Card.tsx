import { FC } from "react";
import styles from "./style.module.css";
import { CardType } from "./Card.types";

const Card: FC<CardType> = ({
  imgSrc,
  slug,
  title,
  caption,
  classNameContainer,
  ...props
}) => {
  return (
    <div
      className={`m-h-[350px] w-60 border rounded p-3 mx-2  ${classNameContainer}`}
      {...props}
    >
      <img src={imgSrc} alt={title} className={`object-cover border ${styles["blog-cart__image"]}`} />
      <div>
        <h5 className="text-lg font-semibold">{title}</h5>
        <p className="my-6">{caption && caption.slice(0,150)}</p>
        <a
          href={slug}
          className="
        font-semibold 
        border
        border-black
        rounded  
        text-center 
        text-white bg-[--black] 
        hover:bg-white
        hover:text-black
        hover:border-[--gray-200]
        px-2
        flex
        justify-center
        
        "
        >
          {`Leer más 📋 `}
        </a>
      </div>
    </div>
  );
};

export default Card;
