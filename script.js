const cities = [
    'सदर बाजार', 'ग्वालियर', 'दिल्ली बाजार', 'श्री गणेश',
    'फरीदाबाद', 'कानपुर सिटी', 'गाज़ियाबाद', 'अयोध्या',
    'गली', 'दिसावर'
];

function updateTable() {
    const tableBody = document.getElementById('tableBody');
    tableBody.innerHTML = '';

    cities.forEach(city => {
        const yesterdayNumber = localStorage.getItem(`${city}_yesterday`) || '00';
        const todayNumber = localStorage.getItem(`${city}_today`) || '00';

        tableBody.innerHTML += `
            <tr>
                <td class="border border-transparent-500 p-2 bg-transparent-500 text-white">
                    <div>${city}</div>
                    <div class="text-transparent-500">01:00 PM</div>
                    <div>Record Chart</div>
                </td>
                <td class="border border-transparent-500 p-2 bg-zinc-100 text-black">${yesterdayNumber}</td>
                <td class="border border-transparent-500 p-2 bg-zinc-100 text-black">${todayNumber}</td>
            </tr>
        `;
    });
}

function updateInfo() {
    const cityName1 = document.getElementById('cityName1');
    const cityName2 = document.getElementById('cityName2');
    const numberDisplay = document.getElementById('number');
    const nextCityDisplay = document.getElementById('nextCity');
    const liveTimerDisplay = document.getElementById('liveTimer');

    const storedCityName1 = localStorage.getItem('cityName1') || cities[0];
    const storedNumber = localStorage.getItem('number') || '00';
    const storedCityName2 = localStorage.getItem('cityName2') || cities[1];
    const storedNextCity = localStorage.getItem('nextCity') || cities[2];

    cityName1.textContent = storedCityName1;
    cityName2.textContent = storedCityName2;
    numberDisplay.textContent = storedNumber;
    nextCityDisplay.textContent = storedNextCity;

    updateTable();

    // Live timer for next update (example: every 10 seconds)
    const nextUpdateTime = new Date(Date.now() + 10 * 1000); // 10 seconds from now
    const updateTimer = setInterval(() => {
        const now = new Date();
        const timeLeft = nextUpdateTime - now;
        if (timeLeft <= 0) {
            clearInterval(updateTimer);
            updateInfo();
            return;
        }
        const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);
        liveTimerDisplay.textContent = seconds + "s";
    }, 1000);
}

updateInfo();
function updateTime() {
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    const timeString = `${hours}:${minutes}:${seconds}`;

    document.getElementById('google-time').textContent = timeString;
}

setInterval(updateTime, 1000); // Update the time every second
updateTime(); // Initial call to set the time immediately
