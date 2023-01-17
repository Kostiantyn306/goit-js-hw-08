import { galleryItems } from './gallery-items.js';
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
// Change code below this line

const allImg = document.querySelector('.gallery');
const listImg = onGallery(galleryItems);
allImg.insertAdjacentHTML("beforeend", listImg);

function onGallery (galleryItems) {

    return galleryItems.map(({description,original,preview}) => { 
return `<a data-lightbox="lbox"  class="gallery__item" href="${original}">
<img onclick="return false"; class="gallery__image" src="${preview}" alt="${description}" />
</a>`}).join('') 
}


   const lightbox = new SimpleLightbox('.gallery a', { captionsData: 'alt', captionDelay: 250 });
