// COUNTDOWN
const targetDate = new Date("Jan 9, 2027 15:30:00").getTime();

const updateCountdown = setInterval(function() {
    const now = new Date().getTime();
    const distance = targetDate - now;

    // Cálculos de tiempo
    const d = Math.floor(distance / (1000 * 60 * 60 * 24));
    const h = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const m = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const s = Math.floor((distance % (1000 * 60)) / 1000);

    // Mostrar resultados
    document.getElementById("days").innerHTML = d;
    document.getElementById("hours").innerHTML = h < 10 ? "0" + h : h;
    document.getElementById("minutes").innerHTML = m < 10 ? "0" + m : m;
    document.getElementById("seconds").innerHTML = s < 10 ? "0" + s : s;

    // Si la cuenta regresiva termina
    if (distance < 0) {
        clearInterval(updateCountdown);
        document.getElementById("countdown").innerHTML = "¡Es hoy!";
    }
}, 1000);