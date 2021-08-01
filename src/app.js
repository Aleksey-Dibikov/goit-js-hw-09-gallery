const galleryItems = [
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/14/16/43/himilayan-blue-poppy-4202825__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/14/16/43/himilayan-blue-poppy-4202825_1280.jpg',
    description: 'Hokkaido Flower',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677_1280.jpg',
    description: 'Container Haulage Freight',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785_1280.jpg',
    description: 'Aerial Beach View',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619_1280.jpg',
    description: 'Flower Blooms',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334_1280.jpg',
    description: 'Alpine Mountains',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571_1280.jpg',
    description: 'Mountain Lake Sailing',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272_1280.jpg',
    description: 'Alpine Spring Meadows',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255_1280.jpg',
    description: 'Nature Landscape',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843_1280.jpg',
    description: 'Lighthouse Coast Sea',
  },
];

const refs = {
  galleryListElementRef: document.querySelector('.js-gallery'),
  modalWindowRef: document.querySelector('.js-lightbox'),
  modalClosedButton: document.querySelector('.lightbox__button'),
  lightboxContentRef: document.querySelector('.lightbox__content'),
  lightboxImgRef: document.querySelector('.lightbox__image'),
  lightboxOverlay: document.querySelector('.lightbox__overlay'),
};

const galleryItemElements = ({ preview, original, description }) => {
  const addGalleryListImg =
  `<li class="gallery__item">
    <a class="gallery__link" href=${original}>
      <img class="gallery__image"
      src="${preview}" data-source=${original} 
      alt="${description}">
    </a>  
  </li>`;
  return addGalleryListImg;
};
const allElements = galleryItems.map(galleryItemElements);
refs.galleryListElementRef.insertAdjacentHTML('afterbegin', allElements.join(' '));

refs.galleryListElementRef.addEventListener("click", onOpenModal);
refs.modalClosedButton.addEventListener("click", onModalClose);
refs.lightboxOverlay.addEventListener('click', onModalClose);

function onOpenModal(e) {
  e.preventDefault();
    refs.modalWindowRef.classList.add('is-open');
    refs.lightboxImgRef.src = e.target.dataset.source;
    refs.lightboxImgRef.alt = e.target.alt;
}

function onModalClose(e) {
  e.preventDefault();
  refs.modalWindowRef.classList.remove("is-open");
  refs.lightboxImgRef.src = '';
  refs.lightboxImgRef.alt = '';
}

function closeModalESC(e) {
  if (e.key !== 'Escape') {
    return;
  }
  refs.modalWindowRef.classList.remove('is-open');
}
window.addEventListener('keyup', closeModalESC);
