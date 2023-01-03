import { galleryItems } from "./gallery-items.js";
// Change code below this line

const galleryItem = document.querySelector(".gallery");

function createGalleryItems(items) {
  const markup = items
    .map(({ preview, original, description }) => {
      return `<div class="gallery__item">
         <a class="gallery__link" href="${original}">
           <img
             class="gallery__image"
             src="${preview}"
             data-source="${original}"
             alt="${description}"
           />
         </a>
       </div>`;
    })
    .join("");
  return markup;
}

galleryItem.insertAdjacentHTML("beforeend", createGalleryItems(galleryItems));

const lightbox = new SimpleLightbox(".gallery a", {
  captions: true,
  captionsData: "alt",
  captionDelay: 250,
});
