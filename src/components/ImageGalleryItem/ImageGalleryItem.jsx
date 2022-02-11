function ImageGalleryItem({ id, webformatURL, largeImageURL }) {
  return (
    <li>
      <img src={webformatURL} alt="" width="300" />
    </li>
  );
}

export default ImageGalleryItem;
