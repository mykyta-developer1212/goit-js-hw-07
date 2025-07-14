const images = [
  {
    url: "./images/1.jpg",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "./images/2.jpg",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "./images/3.jpg",
    alt: "Group of Horses Running",
  },
  {
    url: "./images/4.jpg",
    alt: "Alpine Spring Meadows",
  },
  {
    url: "./images/5.jpg",
    alt: "Nature Landscape",
  },
  {
    url: "./images/6.jpg",
    alt: "Lighthouse Coast Sea",
  },
];

const galleryList = document.querySelector('.gallery');

const galleryMarkup = images
  .map(({ url, alt }) => `
    <li>
      <img src="${url}" alt="${alt}">
    </li>
  `)
  .join('');

galleryList.insertAdjacentHTML('beforeend', galleryMarkup);
