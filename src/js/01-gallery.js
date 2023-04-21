// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const galleryList = document.querySelector('.gallery');

makeGalleryMarkup(galleryItems);

const lightbox = new SimpleLightbox('.gallery a', {
	overlayOpacity: 0.85,
	captionsData: 'alt',
	captionDelay: 250,
});

lightbox.on('show.simplelightbox');

function makeGalleryMarkup(items) {
	const galleryItemsLayout = items
		.map(({ preview, original, description }) => {
			return `
				<a class="gallery__link" href="${original}">
					<img
						class="gallery__image"
						src="${preview}"
						alt="${description}" />
				</a>
			`;
		})
		.join('');

	galleryList.insertAdjacentHTML('afterbegin', galleryItemsLayout);
}
