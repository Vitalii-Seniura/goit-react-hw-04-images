import React from 'react';
import PropTypes from 'prop-types';
import { Modal } from 'components/Modal/Modal';
import css from './ImageGalleryItem.module.css';

export class ImageGalleryItem extends React.Component {
  state = {
    showModal: false,
  };

  openModal = () => {
    this.setState({ isModalOpen: true });
  };
  closeModal = () => {
    this.setState({ isModalOpen: false });
  };
  render() {
    const { image } = this.props;
    return (
      <li className={css.galleryItem}>
        <img
          src={image.webformatURL}
          alt=""
          className={css.galleryItemImage}
          onClick={this.openModal}
        />
        {this.state.isModalOpen && (
          <Modal image={image} onClose={this.closeModal} />
        )}
      </li>
    );
  }
}

ImageGalleryItem.propTypes = {
  isModalOpen: PropTypes.bool,
};
