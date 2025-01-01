const audio =  document.querySelector
('audio');
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

slider.addEventListener('mouseleave', (e) => {
  isDown = false;
  slider.classList.remove('active');
  audio.pause();
});

slider.addEventListener('mouseup', (e) => {
  isDown = false;
  slider.classList.remove('active');
  audio.pause();
});

slider.addEventListener('mousemove', (e) => {
if(!isDown) return;
e.preventDefault();
const x = e.pageX - slider.offsetLeft;
const walk = (x - startX) * 3;
slider.scrollLeft = scrollLeft - walk;
audio.play();
});