document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("startButton").addEventListener("click", function () {
    document.querySelector(".car").classList.add("car-moving");
  });
  document.getElementById("clearButton").addEventListener("click", function () {
    const timeInSeconds = parseInt(document.getElementById("timeInput").value);
    document.body.style.transitionDuration = `${timeInSeconds}s`;
    document.body.classList.add("hidden");
    setTimeout(() => {
      document.body.innerHTML = "";
    }, timeInSeconds * 1000);
  });
});
