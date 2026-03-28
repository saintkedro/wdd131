// Footer: Current Year and Last Modified
const lastModified = document.querySelector('#lastModified');

lastModified.textContent = document.lastModified;

// Static variables for inputs
const temp = 10; // °C
const speed = 5;  // km/h

// Requirement: calculateWindChill function (one line of code for return)
// Formula for Metric: 13.12 + 0.6215T - 11.37V^0.16 + 0.3965TV^0.16
const calculateWindChill = (t, v) => (13.12 + (0.6215 * t) - (11.37 * Math.pow(v, 0.16)) + (0.3965 * t * Math.pow(v, 0.16))).toFixed(1);

// Requirement: Logic check before calling function
const windChillDisplay = document.getElementById('windchill');

if (temp <= 10 && speed > 4.8) {
    const result = calculateWindChill(temp, speed);
    windChillDisplay.innerHTML = `${result} &deg;C`;
} else {
    windChillDisplay.textContent = "N/A";
}