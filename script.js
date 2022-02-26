window.onload = () => {
    const start = '2021-12-18';
    const today = new Date().toISOString().split('T')[0];
    setStartDate(start);
    setEndDate(today);
    setStreakDays(start, today);
}

function setStartDate(date) {
    document.getElementById('start').innerHTML = formatDate(new Date(date));
}

function setEndDate(today) {
    document.getElementById('today').innerHTML = formatDate(new Date(today));
}

function setStreakDays(start, end) {
    document.getElementById('day-streak').innerHTML = calculateStreakDays(start, end);
}

function calculateStreakDays(start, end) {
    const diffInMs = new Date(end) - new Date(start);
    return 1 + diffInMs / (1000 * 60 * 60 * 24);
}

function padLeft(n) {
    return ("00" + n).slice(-2);
}

function formatDate(date) {
    return [padLeft(date.getDate()), '/', padLeft(date.getMonth() + 1), '/', date.getFullYear()].join('');
}