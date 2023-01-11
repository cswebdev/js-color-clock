// this function calls itself and is an IFIE function.

(function () {
  "use strict";

  //  thee are queryselectors that target specific class elements in index.html

  const $display = document.querySelector(".clock-display");
  const $progressBar = document.querySelector(".clock-progress-bar");
  const $clock = document.querySelector(".clock");

  // setting hover to false by default
  let isHovering = false;

  // setting up the mouse over commands with EventListners.

  $clock.addEventListener("mouseover", function () {
    isHovering = true;
  });

  $clock.addEventListener("mouseout", function () {
    isHovering = false;
  });

  // setInterval is used to create a timed loop

  setInterval(function () {
    // Date() is a built in Javascript Consructor. BUT. Date returns a string instead of an array.
    const currentTime = new Date();

    // seconds minutes hours are
    let seconds, minutes, hours;

    // The slice() method extracts a section of a string and returns it as a new string, without modifying the original string.

    // using an if else statment to create the logic associated with the hover animations.

    if (isHovering) {
      seconds = ("0" + currentTime.getSeconds().toString(16)).slice(-2);
      minutes = ("0" + currentTime.getMinutes().toString(16)).slice(-2);
      hours = ("0" + currentTime.getHours().toString(16)).slice(-2);
    } else {
      seconds = ("0" + currentTime.getSeconds()).slice(-2);
      minutes = ("0" + currentTime.getMinutes()).slice(-2);
      hours = ("0" + currentTime.getHours()).slice(-2);
    }

    $progressBar.style.width = `${(seconds / 60) * 14}rem`;

    // You can use textContent OR .innerHTML. But textContent is prefered becuase it has better performance

    // use the backticks and this creates a string with the getSeconds-Minutes-Hours
    // backticks are Template literals and it's called string interpolation. To create strings by using substitution placeholders

    $display.textContent = `${hours}:${minutes}:${seconds}`;

    // Using querySelector again to target the background of the clock. This uses Math.random to get a random number between 0-244.

    const clockColors = document.querySelector(".clock");
    var color1 = Math.floor(Math.random() * 244);
    clockColors.setAttribute(
      "style",
      "background:rgb(" +
        color1 +
        "," +
        Math.random() * 244 +
        "," +
        Math.random() * 244 +
        ")"
      //setting how often, in seconds,  the root function
    );
  }, 1000);
})();
