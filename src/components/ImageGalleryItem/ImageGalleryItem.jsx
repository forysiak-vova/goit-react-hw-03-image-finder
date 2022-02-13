import { ImageItem, ImageGalleryItemImage } from './ImageGalleryItem.styled';
function ImageGalleryItem({
  id,
  webformatURL,
  largeImageURL,
  tags,
  clickImage,
}) {
  return (
    <ImageItem>
      <ImageGalleryItemImage
        src={webformatURL}
        alt={tags}
        width="300"
        srcc={largeImageURL}
        onClick={clickImage}
      />
    </ImageItem>
  );
}

export default ImageGalleryItem;
