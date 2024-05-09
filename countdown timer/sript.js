function calculateRemainingTime(targetDate) {
    const now = new Date();
    const difference = targetDate - now;

    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);

    return {
        total: difference,
        days: days,
        hours: hours,
        minutes: minutes,
        seconds: seconds
    };
}

function updateCountdown() {
    const targetDate = new Date(document.getElementById('datetime').value);
    const remainingTime = calculateRemainingTime(targetDate);

    document.getElementById('timer').innerHTML = `${remainingTime.days}d ${remainingTime.hours}h ${remainingTime.minutes}m ${remainingTime.seconds}s`;

    if (remainingTime.total <= 0) {
        clearInterval(countdownInterval);
        document.getElementById('timer').innerHTML = 'Countdown expired';
    }
}

document.getElementById('countdownForm').addEventListener('submit', function(event) {
    event.preventDefault();
    updateCountdown();
    countdownInterval = setInterval(updateCountdown, 1000);
});
