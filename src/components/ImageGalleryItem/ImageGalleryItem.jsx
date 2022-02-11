function ImageGalleryItem({ id, webformatURL, largeImageURL }) {
  return (
    <li>
      <img src={webformatURL} width="300" />
    </li>
  );
}

export default ImageGalleryItem;
