// const countdownDate = new Date("Dec 31, 2025 23:59:59").getTime();

// const x = setInterval(function () {
//   const now = new Date().getTime();
//   const distance = countdownDate - now;

//   const days = Math.floor(distance / (1000 * 60 * 60 * 24));
//   const hours = Math.floor(
//     (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
//   );
//   const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
//   const seconds = Math.floor((distance % (1000 * 60)) / 1000);

//   document.getElementById("days").innerHTML = days;
//   document.getElementById("hours").innerHTML = hours;
//   document.getElementById("minutes").innerHTML = minutes;
//   document.getElementById("seconds").innerHTML = seconds;

//   document.querySelectorAll(".countdown-item span").forEach((span) => {
//     span.classList.add("animate");
//     setTimeout(() => {
//       span.classList.remove("animate");
//     }, 500);
//   });

//   if (distance < 0) {
//     clearInterval(x);
//     document.getElementById("timer").innerHTML = "the offer is started";
//   }
// }, 1000);

// showMoreBtn.onclick = function () {
//   content.innerHTML +=
//     "<p>This is the additional content that appears when you click 'Show More'.</p>";
//   showMoreBtn.style.display = "none";
// };
