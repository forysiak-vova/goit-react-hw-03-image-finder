import ImageGalleryItem from '../ImageGalleryItem';

function ImageGallery({ items }) {
  return (
    <ul>
      {items.map(({ id, webformatURL, largeImageURL, tags }) => (
        <ImageGalleryItem
          key={id}
          tags={tags}
          webformatURL={webformatURL}
          largeImageURL={largeImageURL}
        />
      ))}
    </ul>
  );
}

export default ImageGallery;
