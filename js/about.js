/**
 * Función que se ejecuta cuando el contenido HTML ha sido completamente cargado y parseado.
 * @callback domContentLoadedCallback
 * @global
 * @memberof window
 */

/**
 * Representa un array de rutas de imágenes.
 * @type {string[]} 
 */
const images = [
    './images/imagen1.png',
    './images/imagen2.jpg',
    './images/imagen3.png'
];

/**
 * Índice que indica la posición actual de la imagen mostrada.
 * @type {number}
 */
let currentIndex = 0;

/**
 * Elemento de imagen HTML que se mostrará en la página.
 * @type {HTMLImageElement}
 */
const imageElement = document.createElement('img');

// Asigna la primera imagen del array como src del elemento de imagen
imageElement.src = images[currentIndex];

// Agrega el elemento de imagen al contenedor HTML con la clase 'content'
document.querySelector('.content').appendChild(imageElement);

/**
 * Función que se ejecuta cuando se hace clic en el elemento de imagen.
 * Cambia la imagen mostrada al siguiente en el array de imágenes.
 * @callback imageClickCallback
 * @memberof HTMLImageElement
 * @inner
 */
imageElement.addEventListener('click', () => {
    // Incrementa el índice y asegura que no se desborde del array
    currentIndex = (currentIndex + 1) % images.length;
    // Actualiza la imagen mostrada en el elemento de imagen
    imageElement.src = images[currentIndex];
});

// Agrega un listener para detectar cuando el contenido HTML ha sido completamente cargado
document.addEventListener('DOMContentLoaded', () => {
    // Cuando el DOMContentLoaded ocurre, se ejecuta el código para mostrar las imágenes y añadir el listener al clic
});
