const Button = ({ nextClick, children, loading }) => {
  return (
    <button type="button" onClick={nextClick}>
      {loading && children}
      {!loading && <span>Load more</span>}
    </button>
  );
};

export default Button;
