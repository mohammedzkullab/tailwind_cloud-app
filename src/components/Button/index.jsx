const Button = ({ className, children, onClick = (f) => f, ...props }) => {
  return (
    <button {...props} className={className} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
