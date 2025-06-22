const slider = document.querySelector(".items");
const snowflakes = document.querySelectorAll(".snowflake");
const audio = document.querySelector("audio");
let isDown = false;
let startX;
let scrollLeft;

audio.pause();

slider.addEventListener("mousedown", (e) => {
  isDown = true;
  slider.classList.add("active");
  startX = e.pageX - slider.offsetLeft;
  scrollLeft = slider.scrollLeft;
  snowflakes.forEach((snowflake) => {
    snowflake.classList.add("active");
  });
  audio.play(); 
});

slider.addEventListener("mouseup", (e) => {
  isDown = false;
  slider.classList.remove("active");
});

slider.addEventListener("mouseleave", (e) => {
  isDown = false;
  slider.classList.remove("active");
});

slider.addEventListener("mousemove", (e) => {
  if (!isDown) return;
  e.preventDefault();
  const x = e.pageX - slider.offsetLeft;
  const walk = (x - startX) * 3;
  slider.scrollLeft = scrollLeft - walk;
});

slider.addEventListener("touchstart", (e) => {
  isDown = true;
  slider.classList.add("active");
  snowflakes.forEach((snowflake) => {
    snowflake.classList.add("active");
  });
  startX = e.touches[0].pageX - slider.offsetLeft;
  scrollLeft = slider.scrollLeft;
  audio.play();
});

slider.addEventListener("touchend", (e) => {
  isDown = false;
  slider.classList.remove("active");
});

slider.addEventListener("touchcancel", (e) => {
  isDown = false;
  slider.classList.remove("active");
});

slider.addEventListener("touchmove", (e) => {
  if (!isDown) return;
  e.preventDefault();
  const x = e.touches[0].pageX - slider.offsetLeft;
  const walk = (x - startX) * 3;
  slider.scrollLeft = scrollLeft - walk;
});
