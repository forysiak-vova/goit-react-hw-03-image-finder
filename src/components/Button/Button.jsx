const Button = ({ nextClick, children, loading }) => {
  return (
    <button type="button" onClick={nextClick}>
      {loading && children}
      {!loading && <span>loading</span>}
    </button>
  );
};

export default Button;
