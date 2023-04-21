import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

import makeGalleryMarkup from './01/makeGalleryMarkup';

// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

makeGalleryMarkup(galleryItems);

const lightbox = new SimpleLightbox('.gallery a', {
	overlayOpacity: 0.85,
	captionsData: 'alt',
	captionDelay: 250,
});

lightbox.on('show.simplelightbox');
