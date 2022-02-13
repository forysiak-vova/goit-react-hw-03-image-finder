import { ButtonLoad } from './Button.styled';
const Button = ({ nextClick, children, loading }) => {
  return (
    <ButtonLoad type="button" onClick={nextClick}>
      {loading && <span>{children}</span>}
      {!loading && <span>Load more</span>}
    </ButtonLoad>
  );
};

export default Button;
