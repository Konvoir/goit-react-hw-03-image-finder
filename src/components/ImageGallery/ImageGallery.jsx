
import {ImageGalleryItem} from "../ImageGalleryItem/ImageGalleryItem"
import PropTypes from 'prop-types';
import s from "./ImageGallery.module.css"


export const ImageGallery = ({ images, onClick }) => (
   <ul className={s.ImageGallery} onClick={onClick}>
  {/* <!-- Набор <li> с изображениями --> */}
        {images.map(
            ({ id, webformatURL, largeImageURL, tags, }) => (
                <ImageGalleryItem
                    key={id}
                    webformatURL={webformatURL}
                    largeImageURL={largeImageURL}
                    tags={tags}
                />
                
            )
        )}        
    </ul>
);
 
ImageGallery.propTypes = {
    images: PropTypes.array.isRequired,
    onClick: PropTypes.func.isRequired,
};