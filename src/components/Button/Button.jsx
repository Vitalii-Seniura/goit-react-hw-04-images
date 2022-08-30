import css from './Button.module.css';
import PropTypes from 'prop-types';

export const Button = ({ onClick }) => (
  <div className={css.btn_container}>
    <button type="button" className={css.button} onClick={onClick}>
      Load more
    </button>
  </div>
);
Button.propTypes = {
  onClick: PropTypes.func,
};
