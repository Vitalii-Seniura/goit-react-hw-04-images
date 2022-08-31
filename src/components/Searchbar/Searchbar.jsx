import { useState } from 'react';
import PropTypes from 'prop-types';
import { toast } from 'react-toastify';
import css from './Searchbar.module.css';

export const Searchbar = ({ onSubmit }) => {
  const [imageName, setImageName] = useState('');

  const handleSubmit = evt => {
    evt.preventDefault();
    if (imageName.trim() === '') {
      toast.warning('enter the name of the picture!');
      return;
    }
    onSubmit(imageName);
  };

  const handleChange = evt => {
    setImageName(evt.currentTarget.value.toLowerCase());
  };

  return (
    <header className={css.Searchbar}>
      <form className={css.form} onSubmit={handleSubmit}>
        <button type="submit" className={css.button}>
          <span className={css.button_label}>Search</span>
        </button>

        <input
          className={css.input}
          type="text"
          placeholder="Search images and photos"
          value={imageName}
          onChange={handleChange}
        />
      </form>
    </header>
  );
};

Searchbar.propTypes = {
  handleChange: PropTypes.func,
  handleSubmit: PropTypes.func,
};
