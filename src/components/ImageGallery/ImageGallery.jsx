import ImageGalleryItem from '../ImageGalleryItem';
function ImageGallery({ items }) {
  return (
    <ul>
      {items.map(item => (
        <ImageGalleryItem
          key={item.id}
          id={item.id}
          tags={item.tags}
          webformatURL={item.webformatURL}
          largeImageURL={item.largeImageURL}
        />
      ))}
    </ul>
  );
}

export default ImageGallery;
