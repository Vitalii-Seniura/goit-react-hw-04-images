import css from './Modal.module.css';
import PropTypes from 'prop-types';

export const Modal = ({ image, onClose }) => {
  window.addEventListener('keydown', handleKeyDown);

  function handleKeyDown(event) {
    if (event.code === 'Escape') {
      onClose();
      window.removeEventListener('keydown', handleKeyDown);
    }
  }

  const handleBackdropClick = event => {
    if (event.currentTarget === event.target) {
      onClose();
    }
  };
  return (
    <div className={css.overlay} onClick={handleBackdropClick}>
      <div className={css.modal}>
        <img src={image.largeImageURL} alt="" />
      </div>
    </div>
  );
};
Modal.propTypes = {
  onClose: PropTypes.func,
};
