// Инициализация анимаций AOS
AOS.init({
    duration: 800,
    once: false,
    easing: 'ease-out-cubic'
});

// Счётчик обратного отсчёта до 12 сентября 2026, 15:00:00 по Москве (UTC+3)
// Используем timestamp с учётом смещения +3 часа
const targetDate = new Date(Date.UTC(2026, 8, 12, 12, 0, 0)); // 12:00 UTC = 15:00 МСК

function updateTimer() {
    const now = new Date().getTime();
    const distance = targetDate.getTime() - now;

    if (distance < 0) {
        document.getElementById("timer").innerHTML = "<p style='font-size:2rem;'>Свадьба уже состоялась! 🎉</p>";
        return;
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("days").textContent = String(days).padStart(2, '0');
    document.getElementById("hours").textContent = String(hours).padStart(2, '0');
    document.getElementById("minutes").textContent = String(minutes).padStart(2, '0');
    document.getElementById("seconds").textContent = String(seconds).padStart(2, '0');
}

updateTimer();
setInterval(updateTimer, 1000);
