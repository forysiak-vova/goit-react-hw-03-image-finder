function ImageGalleryItem({
  id,
  webformatURL,
  largeImageURL,
  tags,
  clickImage,
}) {
  return (
    <li>
      <img src={webformatURL} alt={tags} width="300" onClick={clickImage} />
    </li>
  );
}

export default ImageGalleryItem;
