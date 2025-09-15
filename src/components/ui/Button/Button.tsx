import React from "react";

const Button = ({ children, width }) => {
  return (
    <button
      className={`bg-amber-200 w-[${width}] h-[50] cursor-pointer rounded-2xl `}
    >
      {children}
    </button>
  );
};

export default Button;
