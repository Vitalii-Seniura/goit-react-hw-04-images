import { useState } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import PropTypes from 'prop-types';
import css from './App.module.css';
import { Searchbar } from './Searchbar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery';

export const App = () => {
  const [imageName, setImageName] = useState('');

  const handleSearchSubmit = imageName => {
    setImageName(imageName);
  };

  return (
    <div className={css.app}>
      <Searchbar onSubmit={handleSearchSubmit} />
      <ImageGallery imageName={imageName} />
      <ToastContainer autoClose={3000} />
    </div>
  );
};

App.propTypes = {
  imageName: PropTypes.string,
};
