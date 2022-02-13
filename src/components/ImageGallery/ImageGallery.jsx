import React from 'react';
import ImageGalleryItem from '../ImageGalleryItem';
import { List } from './ImageGallery.styled';
function ImageGallery({ items, clickImage }) {
  return (
    <List>
      {items.map(({ id, webformatURL, largeImageURL, tags }) => (
        <ImageGalleryItem
          key={id}
          tags={tags}
          webformatURL={webformatURL}
          largeImageURL={largeImageURL}
          clickImage={clickImage}
        />
      ))}
    </List>
  );
}

export default ImageGallery;
