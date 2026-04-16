// FLECHAS DESPLAZAMIENTO

window.addEventListener('scroll', function() {
    const indicador = document.getElementById('indicador-scroll');
    if (window.scrollY > 50) {
        indicador.classList.add('scroll-hidden');
    } else {
        indicador.classList.remove('scroll-hidden');
    }
});


// COUNTDOWN

const fechaObjetivo = new Date('Jan 9, 2027 16:00:00').getTime();

const countdown = setInterval(function() {
    const ahora = new Date().getTime();
    const distancia = fechaObjetivo - ahora;

    // Cálculos de tiempo
    const dias = Math.floor(distancia / (1000 * 60 * 60 * 24));
    const horas = Math.floor((distancia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutos = Math.floor((distancia % (1000 * 60 * 60)) / (1000 * 60));
    const segundos = Math.floor((distancia % (1000 * 60)) / 1000);

    // Inyectar en el HTML
    document.getElementById("dias-c").innerText = dias;
    document.getElementById("horas-c").innerText = horas < 10 ? "0" + horas : horas;
    document.getElementById("minutos-c").innerText = minutos < 10 ? "0" + minutos : minutos;
    document.getElementById("segundos-c").innerText = segundos < 10 ? "0" + segundos : segundos;

    // Si termina el conteo
    if (distancia < 0) {
        clearInterval(countdown);
        document.querySelector(".reloj-canva").innerHTML = "<h3>¡Llegó el gran día!</h3>";
    }
}, 1000);