import { galleryItems } from "./gallery-items.js";
// Change code below this line

// console.log(galleryItems);


const galleryContainer = document.querySelector(".gallery");

const imageMarkup = createImagesGalleryMarkup(galleryItems);

galleryContainer.innerHTML = imageMarkup;

galleryContainer.addEventListener("click", onGalleryContainerClick);


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
	
};


// console.log(createImagesGalleryMarkup(galleryItems));

function onGalleryContainerClick(evt) {
	evt.preventDefault();
	if (!evt.target.classList.contains(".gallery__image")) {

		return
	}

	const instance = basicLightbox.create(`
<img src=“${evt.target.dataset.source}” width=“800" height=“600”>
`)

  instance.show()
  
     onGalleryContainerClick('keydown', evt => {
		if (evt.key === 'Escape') {
			instance.close()
		}
	})
}






