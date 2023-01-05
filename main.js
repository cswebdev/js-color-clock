// The goal of this script is to create a clock that has a hover effect, a background that changes color, and a progress bar

// I also got some pointers from a full stack dev friend on how to improve my code & readability.

// Assigning two variables as constants which target  div classes in index.html

const clockDisplay = document.querySelector(".clock-display");

var currentDate = new Date();
setInterval(function () {
  // New Date()  gets the current time from users device and assigns it to currentDate
  var currentDate = new Date();

  // This searches innerHTMl for class named .clock-dispay by using const clockDisplay
  clockDisplay.innerHTML =
    // isolating currentDate.getHours and converting it from 24hr format to 12hr directly after initalization.
    ((currentDate.getHours() + 24) % 12 || 12) +
    ":" +
    currentDate.getMinutes() +
    ":" +
    currentDate.getSeconds();
}, 1000);

// I had to repeat new Date outside of the function above. CurrentDate stated undefined
//fixed currently with this. May change in the future.

var currentDate = new Date();

// Repeating on assigning currentDate but with Hex units. Also converting the time into a string.

let hexHours = currentDate.getHours().toString(16).padStart(2, "0");
let hexMinutes = currentDate.getMinutes().toString(16).padStart(2, "0");
let hexSeconds = currentDate.getSeconds().toString(16).padStart(2, "0");

// Creating an event viewer for the hover effects. and also assigning hoverActive as false by default.

var hoverActive = false;

clockDisplay.addEventListener("mouseover", () => {
  hoverActive = true;
});

clockDisplay.addEventListener("mouseout", () => {
  hoverActive = false;
});

// Using strict equality to to compare if value and type are false, then display clock

if (hoverActive === false) {
  clockDisplay.innerHTML =
    currentDate.getHours() +
    ":" +
    currentDate.getMinutes() +
    ":" +
    currentDate.getSeconds();
} else {
  //  settting up the mouse over event. Converting hex units into strings for display

  clockDisplay.innerHTML = `#${hexHours}:${hexMinutes}:${hexSeconds}`;
}

var barTimer = currentDate.getSeconds();
const barProgress = barTimer / 60;
const clockProgressBar = document.querySelector(".clock-progress-bar");
let barWidt;
Date();
