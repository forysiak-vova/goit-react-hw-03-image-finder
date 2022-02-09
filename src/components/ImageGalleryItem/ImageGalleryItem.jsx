function ImageGalleryItem({ id, webformatURL, largeImageURL }) {
  return (
    <li>
      <img src={webformatURL} />
    </li>
  );
}

export default ImageGalleryItem;
