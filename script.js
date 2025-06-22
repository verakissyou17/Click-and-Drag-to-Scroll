const audio = document.querySelector('audio');
const slider = document.querySelector('.items');
let isDown = false;
let startX;
let scrollLeft;

slider.addEventListener('mousedown', (e) => {
  isDown = true;
  slider.classList.add('active');
  startX = e.pageX - slider.offsetLeft;
  scrollLeft = slider.scrollLeft;
  audio.play();
});


slider.addEventListener('mouseup', (e) => {
  isDown = false;
  slider.classList.remove('active');
  audio.pause();
});

slider.addEventListener('mousemove', (e) => {
  if (!isDown) return;
  e.preventDefault();
  const x = e.pageX - slider.offsetLeft;
  const walk = (x - startX) * 3;
  slider.scrollLeft = scrollLeft - walk;
  audio.play();
});

slider.addEventListener('touchstart', (e) => {
  isDown = true;
  slider.classList.add('active');
  startX = e.touches[0].pageX - slider.offsetLeft;
  scrollLeft = slider.scrollLeft;
  audio.play();
  if(audio.paused) {
    audio.play();
  }
});

slider.addEventListener('touchend', (e) => {
  isDown = false;
  slider.classList.remove('active');
  if(audio.played) {
    audio.pause();
  }
});

slider.addEventListener('touchmove', (e) => {
  if (!isDown) return;
  e.preventDefault();
  const x = e.touches[0].pageX - slider.offsetLeft;
  const walk = (x - startX) * 3;
  slider.scrollLeft = scrollLeft - walk;
  audio.play();
  if(audio.paused) {
    audio.play();
  }
});
