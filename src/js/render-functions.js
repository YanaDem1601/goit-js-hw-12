import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const gallery = document.querySelector('.gallery');
const loaderWrap = document.querySelector('.loader-wrap');
const loadMoreBtn = document.querySelector('.btn');

const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
  overlayOpacity: 0.8,
});

export function createGallery(images) {
  const markup = images
    .map(({
        webformatURL,
        largeImageURL,
        tags,
        likes,
        views,
        comments,
        downloads,
      }) => `
<li class="gallery-item">
  <a href="${largeImageURL}" class="gallery-link">
    <img class="gallery-image" src="${webformatURL}" 
         alt="${tags}" 
          />
  </a>
  <div class="info">
  <p><span class="info-label">Likes</span><span>${likes}</span></p>
  <p><span class="info-label">Views</span><span>${views}</span></p>
  <p><span class="info-label">Comments</span><span>${comments}</span></p>
  <p><span class="info-label">Downloads</span><span>${downloads}</span></p>
  </div>
</li>
    `)
    .join('');

  gallery.insertAdjacentHTML('beforeend', markup);
  lightbox.refresh();  
}

export function clearGallery() {
  gallery.innerHTML = '';
}

export function showLoader() {
  loaderWrap.classList.remove('is-hidden');
  loaderWrap.classList.add('show');
  
}

export function hideLoader() {
  loaderWrap.classList.add('is-hidden');
  loaderWrap.classList.remove('show');
  
}

export function showLoadMoreButton() {
  loadMoreBtn.classList.add('visible');
}

export function hideLoadMoreButton() {
  loadMoreBtn.classList.remove('visible');
}