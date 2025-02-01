// Asegúrate de que el DOM esté completamente cargado antes de ejecutar el script
document.addEventListener("DOMContentLoaded", function() {
    const contactBtn = document.getElementById('btn-contacto');
    const email = 'baa4tsdev@gmail.com';

    // Verifica que el botón de contacto exista
    if (contactBtn) {
        contactBtn.addEventListener('click', function() {
            // Muestra el cuadro de alerta con el correo electrónico
            Swal.fire({
                title: 'Contacto',
                html: `Email: <a href="mailto:${email}">${email}</a>`,
                icon: 'info',
                showCancelButton: true,
                confirmButtonText: 'Copiar',
                cancelButtonText: 'Cerrar',
                focusConfirm: false,
                customClass: {
                    confirmButton: 'swal-confirm-btn',
                    cancelButton: 'swal-cancel-btn'
                }
            }).then((result) => {
                if (result.isConfirmed) {
                    // Intentar copiar al portapapeles
                    if (navigator.clipboard) {
                        navigator.clipboard.writeText(email)
                            .then(() => {
                                Swal.fire('¡Copiado!', 'Email en portapapeles', 'success');
                            })
                            .catch((err) => {
                                console.error('Error al copiar al portapapeles:', err);
                                Swal.fire('Error', 'No se pudo copiar', 'error');
                            });
                    } else {
                        Swal.fire('Error', 'La función de copiar no está soportada en este navegador', 'error');
                    }
                }
            });
        });
    } else {
        console.error('El botón de contacto no se encontró.');
    }
});
