import React from "react";
import ButtonSvg from "../assets/svg/ButtonSvg";

const Button = ({ className, href, children, px, white, onclick }) => {
  const classes = `
    button relative inline-flex items-center justify-center h-11 transition-colors 
    hover:text-color-2 ${px || "px-7"} ${white ? "text-n-8" : "text-n-1"} ${
    className || ""
  }
  `.trim();

  const spanclasses = `relative z-10`;

  const renderButton = () => (
    <button className={classes} onClick={onclick}>
      <span className={spanclasses}>{children}</span>
      {ButtonSvg(white)}
    </button>
  );

  const renderLink = () => (
    <a /*target="_blank"*/ href={href} className={classes}>
      <span className={spanclasses}>{children}</span>
      {ButtonSvg(white)}
    </a>
  );

  return href ? renderLink() : renderButton();
};

export default Button;
