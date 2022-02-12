import ImageGalleryItem from '../ImageGalleryItem';

function ImageGallery({ items, clickImage }) {
  return (
    <ul>
      {items.map(({ id, webformatURL, largeImageURL, tags }) => (
        <ImageGalleryItem
          key={id}
          tags={tags}
          webformatURL={webformatURL}
          largeImageURL={largeImageURL}
          clickImage={clickImage}
        />
      ))}
    </ul>
  );
}

export default ImageGallery;
