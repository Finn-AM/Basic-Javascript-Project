const start = document.querySelector('.start');
const pause = document.querySelector('.pause');
const clear = document.querySelector('.clear');
let intervalID = null;

function snowing() {
  let snow = document.createElement('p');
  let random = Math.random().toString(16).slice(2, 8);

  snow.textContent = '❄';
  snow.classList.add('snow');
  snow.style.left = Math.random() * window.innerWidth + 'px';
  snow.style.opacity = Math.random().toFixed(4);
  snow.style.fontSize = Math.random() * 16 + 20 + 'px';
  snow.style.color = '#' + random;
  snow.style.animationDuration = Math.random() * 3 + 2 + 's';
  document.body.appendChild(snow);

  setTimeout(() => {
    snow.remove();
  }, 12000);

  let snows = Array.from(document.querySelectorAll('.snow'));

  return snows;
}

start.addEventListener('click', () => {
  intervalID = setInterval(snowing, 300);
  let snows = snowing();
  snows.forEach((snow) => {
    snow.style.animationPlayState = 'running';
  });
  start.style.display = 'none';
  pause.style.display = 'inline';
});

pause.addEventListener('click', () => {
  clearInterval(intervalID);
  let snows = snowing();
  snows.forEach((snow) => {
    snow.style.animationPlayState = 'paused';
  });
  start.style.display = 'inline';
  pause.style.display = 'none';
});

clear.addEventListener('click', () => {
  clearInterval(intervalID);
  let snows = snowing();
  snows.forEach((snow) => {
    snow.remove();
  });
  start.style.display = 'inline';
  pause.style.display = 'none';
});
