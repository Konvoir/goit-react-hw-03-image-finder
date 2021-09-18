import PropTypes from 'prop-types';
import s from "./ImageGalleryItem.module.css"

export const ImageGalleryItem = ({
    id,
    webformatURL,
    largeImageURL,
    tags,
    onClick
}) => (
    <li key={id} className={s.ImageGalleryItem}>
        <img
            src={webformatURL}
            alt={tags}
            className={s.ImageGalleryItemImage}
            onClick={ () => onClick(largeImageURL)}/>
            </li>
        );


ImageGalleryItem.propTypes = {
    id: PropTypes.number.isRequired,
    webformatURL: PropTypes.string.isRequired,
    largeImageURL: PropTypes.string.isRequired,
    tags: PropTypes.string.isRequired,
};