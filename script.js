const countdownDate = new Date("2024-09-30T00:00:00").getTime();
const startDate = new Date("2024-07-24T00:00:00").getTime(); // Hari pertama LDKS
const oneDay = 1000 * 60 * 60 * 24;
const oneWeek = 1000 * 60 * 60 * 24 * 7;
const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

const updateCountdown = () => {
    const now = new Date().getTime();
    const distance = countdownDate - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("days").textContent = days;
    document.getElementById("hours").textContent = hours;
    document.getElementById("minutes").textContent = minutes;
    document.getElementById("seconds").textContent = seconds;

    if (distance < 0) {
        clearInterval(countdownInterval);
        document.getElementById("timer").innerHTML = "Waktu telah berakhir!";
    }

    updateLDKSInfo();
};

const updateLDKSInfo = () => {
    const now = new Date();
    let daysCount = 0;
    let currentDate = new Date(startDate);

    while (currentDate < now) {
        if (daysOfWeek[currentDate.getDay()] !== 'Sat' && daysOfWeek[currentDate.getDay()] !== 'Sun') {
            daysCount++;
        }
        currentDate = new Date(currentDate.getTime() + oneDay);
    }

    document.getElementById("ldks-day").textContent = `Hari ke-${daysCount} LDKS`;
};

const countdownInterval = setInterval(updateCountdown, 1000);
updateCountdown();
