import React from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import PropTypes from 'prop-types';
import css from './App.module.css';
import { Searchbar } from './Searchbar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery';

export class App extends React.Component {
  state = {
    imageName: '',
  };

  handleSearchSubmit = imageName => {
    this.setState({ imageName });
  };
  render() {
    return (
      <div className={css.app}>
        <Searchbar onSubmit={this.handleSearchSubmit} />
        <ImageGallery imageName={this.state.imageName} />
        <ToastContainer autoClose={3000} />
      </div>
    );
  }
}

App.propTypes = {
  imageName: PropTypes.string,
};
