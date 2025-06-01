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
// /------------------------------- sign page -------------------------------/
const signUpButton = document.getElementById("signUp");
const signInButton = document.getElementById("signIn");
const container = document.getElementById("container");

signUpButton.addEventListener("click", () => {
  container.classList.add("right-panel-active");
});

signInButton.addEventListener("click", () => {
  container.classList.remove("right-panel-active");
});
// Dark mode toggle
const themeToggle = document.getElementById("theme-toggle");
const isDark = localStorage.getItem("isDark") === "true";

themeToggle.checked = isDark;
document.body.classList.toggle("dark-mode", isDark);
themeToggle.addEventListener("change", () => {
  const isDarkMode = themeToggle.checked;
  document.body.classList.toggle("dark-mode", isDarkMode);
  localStorage.setItem("isDark", isDarkMode);
});
// Initialize AOS
AOS.init({
  duration: 1200,
  once: true,
});
