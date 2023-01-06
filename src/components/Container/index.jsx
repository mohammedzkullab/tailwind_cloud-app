import React from "react";

const Conteiner = ({ children, className, ...props }) => {
  const classes = className + " max-w-[1240px] mx-auto py-12";
  return (
    <div className={classes} {...props}>
      {children}
    </div>
  );
};

export default Conteiner;
