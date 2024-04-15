import { useState } from "react";
import chevronLeft from "assets/icon-arrow-left.svg";
import chevronRight from "assets/icon-arrow-right.svg";

const Button = ({ text, isBackBtn }) => {
  const [hover, setHover] = useState();
  const handleHover = (e) => {
    e.preventDefault();
    setHover(!hover);
  };
  return (
    <button
      className={(isBackBtn && "flex-row-reverse") + " w-64 h-16 flex"}
      onMouseEnter={(e) => handleHover(e)}
      onMouseLeave={(e) => handleHover(e)}
      onTouchStart={(e) => handleHover(e)}
      onTouchEnd={(e) => handleHover(e)}
      onTouchCancel={(e) => handleHover(e)}
    >
      <div
        className={
          (hover ? "bg-gold" : "bg-almost-black") +
          " w-4/5 h-full text-white font-display font-extrabold text-xl tracking-mega flex items-center justify-center select-none transition-all"
        }
      >
        {text}
      </div>
      <div
        className={
          (hover ? "bg-almost-black" : "bg-gold") +
          " w-1/5 h-full flex items-center justify-center transition-all"
        }
      >
        <img
          src={isBackBtn ? chevronLeft : chevronRight}
          alt={(isBackBtn ? "Backward" : "Forward") + " facing arrow"}
        />
      </div>
    </button>
  );
};

export default Button;
