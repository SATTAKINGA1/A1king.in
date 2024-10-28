document.getElementById('updateForm').addEventListener('submit', function (event) {
    event.preventDefault();

    const city1 = document.getElementById('city1').value;
    const number = document.getElementById('number').value;
    const nextCity = document.getElementById('nextCity').value;

    localStorage.setItem('cityName1', city1);
    localStorage.setItem('number', number);
    localStorage.setItem('nextCity', nextCity);

    // Update numbers for each city
    const cities = [
        'सदर बाजार', 'ग्वालियर', 'दिल्ली बाजार', 'श्री गणेश',
        'फरीदाबाद', 'कानपुर सिटी', 'गाज़ियाबाद', 'अयोध्या',
        'गली', 'दिसावर'
    ];

    cities.forEach(city => {
        localStorage.setItem(`${city}_yesterday`, document.getElementById(`${city}_yesterday`).value || '00');
        localStorage.setItem(`${city}_today`, document.getElementById(`${city}_today`).value || '00');
    });

    console.log('Data updated successfully!');
    console.log('City 1:', localStorage.getItem('cityName1'));
    console.log('Number:', localStorage.getItem('number'));
    console.log('Next City:', localStorage.getItem('nextCity'));
    cities.forEach(city => {
        console.log(`${city}_yesterday:`, localStorage.getItem(`${city}_yesterday`));
        console.log(`${city}_today:`, localStorage.getItem(`${city}_today`));
    });
});
