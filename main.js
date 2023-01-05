// Assigning two variables as constants which target  div classes in index.html

const $clockDisplay = document.querySelector(".clock-display");
const $clockProgressBar = document.querySelector(".clock-progress-bar");

setInterval(function () {
  const currentDate = new Date();
  $clockDisplay.innerHTML =
    // isolating currentDate.getHours and converting it from 24hr format to 12hr directly after initalization.
    ((currentDate.getHours() + 24) % 12 || 12) +
    ":" +
    currentDate.getMinutes() +
    ":" +
    currentDate.getSeconds();
}, 1000);

Date();

addEventListener(
  "load",
  () => {
    setInterval(function () {
      $clockProgressBar = document.getElementsByClassName(
        ".clock-progress-bar"
      );
      var width = 1;
      function frame() {
        if (width >= 100) {
          setInterval = -1;
        } else {
          width++;
          style.width = width + "%";
        }
      }
    }, 1000);
  },
  1000
);
