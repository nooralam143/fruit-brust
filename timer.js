// Function to update the countdown timer
function updateCountdown() {
    const countdownElements = document.querySelectorAll(".countdown span");
    const countdownDate = new Date("2023-08-25 00:00:00"); // Replace for target date

    const now = new Date().getTime();
    const distance = countdownDate - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Update the countdown elements with the calculated values
    countdownElements[0].style.setProperty("--value", days);
    countdownElements[1].style.setProperty("--value", hours);
    countdownElements[2].style.setProperty("--value", minutes);
    countdownElements[3].style.setProperty("--value", seconds);
  }

  // Update the countdown timer every second
  setInterval(updateCountdown, 1000);

  // Initial update to set the correct values when the page loads
  updateCountdown();