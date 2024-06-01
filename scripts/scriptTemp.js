function toHome() {
    // Agrega la clase de transición para hacer la transición suave
    setTimeout(function() {
        document.body.classList.add('transition');
        setTimeout(function() {
            // Cambia la opacidad del cuerpo para que la transición sea visible
            document.body.style.opacity = '1';

            setTimeout(function() {
                // Cambia la ubicación después de la transición
                window.location.href = 'HomePage.html';
                // Elimina la clase de transición después de la redirección
                setTimeout(function() {
                    document.body.classList.remove('transition');
                }, 500); // Ajusta este valor para que coincida con la duración de tu transición CSS
            }, 0); // Ajusta este valor para que coincida con la duración de tu transición CSS
        }, 500); // Aquí puedes cambiar el tiempo de retraso si lo deseas
    }, 4000);
}
