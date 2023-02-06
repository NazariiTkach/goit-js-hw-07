import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryContainer = document.querySelector(".gallery");

const imageMarkup = createImagesGalleryMarkup(galleryItems);

galleryContainer.innerHTML = imageMarkup;


function createImagesGalleryMarkup(gallery) {
 return gallery
    .map(({ preview, original, description }) => {
      return ` <div class="gallery__item">
       <a class="gallery__link" href="${original}">
          <img class="gallery__image" 
          src="${preview}" 
          data-source="${original}" 
          alt="${description}" />
        </a>
    </div> `;
    }).join('');
	
}

new SimpleLightbox('.gallery a', {
	captionDelay: 250
})




