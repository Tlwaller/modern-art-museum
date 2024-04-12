import { useState } from "react";
import chevron from "assets/Chevron.svg";

const Button = ({ text, isBackBtn }) => {
  const [hover, setHover] = useState();
  const handleHover = () => {
    setHover(!hover);
  };
  return (
    <button
      className={(isBackBtn && "flex-row-reverse") + " w-64 h-16 flex"}
      onMouseOver={handleHover}
      onMouseOut={handleHover}
      onTouchStart={handleHover}
      onTouchEnd={handleHover}
      onTouchCancel={handleHover}
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
          src={chevron}
          alt={(isBackBtn ? "Backward" : "Forward") + " facing arrow"}
          className={isBackBtn && "transform -scale-x-100"}
        />
      </div>
    </button>
  );
};

export default Button;
