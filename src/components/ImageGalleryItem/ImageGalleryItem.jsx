import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Modal } from 'components/Modal/Modal';
import css from './ImageGalleryItem.module.css';

export const ImageGalleryItem = ({ image }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };
  const closeModal = () => {
    setIsModalOpen(false);
  };
  return (
    <li className={css.galleryItem}>
      <img
        src={image.webformatURL}
        alt=""
        className={css.galleryItemImage}
        onClick={openModal}
      />
      {isModalOpen && <Modal image={image} onClose={closeModal} />}
    </li>
  );
};
ImageGalleryItem.propTypes = {
  isModalOpen: PropTypes.bool,
};
