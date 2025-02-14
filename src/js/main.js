u(document).on('DOMContentLoaded', function () {
    const IcoPerf = u("#hero__profile-image");
    let contador = 1;

    function cambiarImagen() {
        IcoPerf.addClass('fade-out');

        setTimeout(() => {
            contador = contador === 11 ? 1 : contador + 1;
            IcoPerf.attr('src', `/my_cat/${contador}.jpg`);
            setTimeout(() => {
                IcoPerf.removeClass('fade-out').addClass('fade-in');
            }, 200);
            setTimeout(() => {
                IcoPerf.removeClass('fade-in');
            }, 1500);
        }, 1200);
    }

    setInterval(cambiarImagen, 4500);

    const contactBtn = u('#btn-contacto');
    const email = 'baa4tsdev@gmail.com';

    if (contactBtn.length) {
        contactBtn.on('click', function () {
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
