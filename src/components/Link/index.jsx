const Link = ({ to, children, className, ...props }) => {
  return (
    <a className={className} href={to} {...props}>
      {children}
    </a>
  );
};

export default Link;
