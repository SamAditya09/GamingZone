import React from "react";

const Button = ({ title, id, rightIcon, leftIcon, containerClass }) => {
  return (
    <>
      <div id={id} className={`group relative z-10 w-fit cursor-pointer overflow-hidden rounded-full bg-violet-50 px-7 py-3 text-black ${containerClass}`}>
        {leftIcon}
        <span className="inline-flex overflow-hidden font-general text-xs uppercase">
          <div>
            <b>{title}</b>
          </div>
        </span>
      </div>
    </>
  );
};

export default Button;
