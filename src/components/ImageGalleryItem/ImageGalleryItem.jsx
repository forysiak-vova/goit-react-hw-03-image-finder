function ImageGalleryItem({ id, webformatURL, largeImageURL, tags }) {
  return (
    <li>
      <img src={webformatURL} alt={tags} width="300" />
    </li>
  );
}

export default ImageGalleryItem;
