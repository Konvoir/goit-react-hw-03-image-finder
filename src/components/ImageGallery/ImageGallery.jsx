
import {ImageGalleryItem} from "../ImageGalleryItem/ImageGalleryItem"
import PropTypes from 'prop-types';
import s from "./ImageGallery.module.css"


export const ImageGallery = ({ images, onClick }) => (
   <ul className={s.ImageGallery} >
  {/* <!-- Набор <li> с изображениями --> */}
        {images.map(
            ({ id, webformatURL, largeImageURL, tags, }) => (
                <ImageGalleryItem
                    key={id}
                    id={id}
                    onClick={onClick}
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