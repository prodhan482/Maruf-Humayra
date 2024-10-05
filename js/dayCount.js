function updateTime() {
    const referenceDate = new Date('2024-09-27T14:00:00');

    const now = new Date();

    const timeDifference = now - referenceDate;

    const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

    document.getElementById('days').innerText = days;
    document.getElementById('hours').innerText = hours;
    document.getElementById('mins').innerText = minutes;
    document.getElementById('secs').innerText = seconds;
}

setInterval(updateTime, 1000);

updateTime();
