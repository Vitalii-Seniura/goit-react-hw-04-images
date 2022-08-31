import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import css from './ImageGallery.module.css';
import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';
import { Loader } from 'components/Loader/Loader';
import { Button } from 'components/Button/Button';
import { fetchImage } from 'components/imageApi';
import { toast } from 'react-toastify';

export const ImageGallery = ({ imageName }) => {
  const [images, setImages] = useState([]);
  const [error, setError] = useState(null);
  const [status, setStatus] = useState('');
  const [page, setPage] = useState(1);
  const [totalHits, setTotalHits] = useState(0);

  useEffect(() => {
    setStatus('pending');
    setPage(1);
    setImages([]);
    fetchImage(imageName)
      .then(data => {
        setImages(data.hits);
        setTotalHits(data.totalHits);
        setStatus('resolved');
      })
      .catch(error => setError(error), setStatus('rejected'));
  }, [imageName]);

  useEffect(() => {
    setStatus('pending');
    fetchImage(imageName, page)
      .then(data => {
        setImages(state => [...state, ...data.hits]);
        setStatus('resolved');
        if (data.totalHits === 0) {
          toast.warning('введіть коректний запит');
          return;
        }
      })
      .catch(error => setError(error), setStatus('rejected'));
  }, [page]);

  const loadMore = () => {
    setPage(state => state + 1);
  };

  if (status === 'pending') {
    return <Loader loader={Loader} />;
  }
  if (status === 'rejected') {
    <h2>{error}</h2>;
  }

  if (status === 'resolved') {
    return (
      <div>
        <ul className={css.gallery}>
          {images.map(image => (
            <ImageGalleryItem image={image} key={image.id} />
          ))}
        </ul>
        {totalHits > page * 12 && <Button onClick={loadMore}>Load more</Button>}
      </div>
    );
  }
};

ImageGallery.propTypes = {
  images: PropTypes.array,
  error: PropTypes.string,
  status: PropTypes.string,
  page: PropTypes.number,
};
