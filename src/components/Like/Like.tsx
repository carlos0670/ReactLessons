import { useState } from "react";
import { IoHeartCircle } from "react-icons/io5";
import style from "./Like.module.css";

const Like = () => {
  const [color, setColor] = useState("noLike");
  const handleClick = () => {
    setColor(color === "noLike" ? "like" : "noLike");
  };

  return (
    <IoHeartCircle
      className={[style.like, style["like-" + color]].join(" ")}
      onClick={handleClick}
    />
  );
};

export default Like;
