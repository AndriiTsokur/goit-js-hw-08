const galleryList = document.querySelector('.gallery');

export default function makeGalleryMarkup(items) {
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
