/**
 * Función que se ejecuta cuando el contenido HTML ha sido completamente cargado y parseado.
 * @callback domContentLoadedCallback
 * @global
 * @memberof window
 */

/**
 * Maneja el evento 'DOMContentLoaded' para inicializar el formulario de contacto.
 * @function initializeContactForm
 */
document.addEventListener('DOMContentLoaded', () => {
    /**
     * Formulario de contacto.
     * @type {HTMLFormElement}
     */
    const contactForm = document.getElementById('contactForm');

    /**
     * Función que se ejecuta cuando se envía el formulario de contacto.
     * @callback submitFormCallback
     * @param {Event} e - El evento de envío del formulario.
     * @memberof HTMLFormElement
     * @inner
     */
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault(); // Previene la recarga de la página

        // Obtiene los valores del formulario
        /**
         * Nombre ingresado en el formulario.
         * @type {string}
         */
        const name = document.getElementById('name').value;

        /**
         * Mensaje ingresado en el formulario.
         * @type {string}
         */
        const message = document.getElementById('message').value;

        // Verifica si el nombre y el mensaje no están vacíos
        if (name.trim() !== '' && message.trim() !== '') {
            /**
             * Mensaje de agradecimiento mostrado después de enviar el formulario.
             * @type {string}
             */
            const thankYouMessage = `¡Gracias por tu mensaje, ${name}!`;
            alert(thankYouMessage);

            contactForm.reset(); // Resetea el formulario después del envío
        } else {
            /**
             * Mensaje de alerta mostrado si los campos están vacíos.
             * @type {string}
             */
            const errorMessage = 'Por favor, completa todos los campos.';
            alert(errorMessage);
        }
    });
});
