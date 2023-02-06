import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryContainer = document.querySelector(".gallery");

const imageMarkup = createImagesGalleryMarkup(galleryItems);

galleryContainer.innerHTML = imageMarkup;


function createImagesGalleryMarkup(gallery) {
 return gallery
    .map(({ preview, original, description }) => {
      return ` <li class="gallery__item">
       <a class="gallery__item" href="${original}">
          <img class="gallery__image" 
          src="${preview}" 
          alt="${description}" />
        </a>
    </li> `;
    }).join('');
	
}

new SimpleLightbox('.gallery a', {
  captionDelay: 250,
  captionsData: 'alt'
})


// const gallery = document.querySelector('.gallery')
// const items = []

// galleryItems.forEach(element => {
// 	const galleryLink = document.createElement('a')
// 	galleryLink.className = 'gallery__link'
// 	galleryLink.href = element.original
// 	const galleryImage = document.createElement('img')
// 	galleryImage.className = 'gallery__image'
// 	galleryImage.src = element.preview
// 	galleryImage.setAttribute('title', element.description)
// 	galleryImage.alt = element.description

// 	galleryLink.append(galleryImage)
// 	items.push(galleryLink)
// })
// gallery.append(...items)

// new SimpleLightbox('.gallery a', {
// 	captionDelay: 250
// })