/**
 * This file is just a silly example to show everything working in the browser.
 * When you're ready to start on your site, clear the file. Happy hacking!
 **/

// This numbers are taken from the API.

const minimun = 1;
const maximum = 122;

const random = () => Math.floor(Math.random() * (maximum - minimun)) + minimun

const createImageNode = () => {
  const container = document.createElement('div')
  container.className = "p-4";

  const imagen = document.createElement('img');
  imagen.className = "mx-auto";
  imagen.width = '320';
  imagen.src = `https://randomfox.ca/images/${random()}.jpg`;

  container.appendChild(imagen);

  return container;
};

const nuevaImagen = createImageNode();
const mountNode= document.getElementById('images');

mountNode.append(nuevaImagen);

