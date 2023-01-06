const Card = ({ children, className, ...props }) => {
  const classes = className + " my-2 bg-white shadow-lg border rounded-xl";
  return (
    <div className={classes} {...props}>
      {children}
    </div>
  );
};

export default Card;
