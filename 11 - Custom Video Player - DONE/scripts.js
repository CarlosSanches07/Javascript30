let controlFlag = false;
let durationFlag = false;

const player = document.querySelector('.player');
const viewer = player.querySelector('.viewer');
const progress = player.querySelector('.progress');
const progressBar = player.querySelector('.progress__filled');
const toggle = player.querySelector('.toggle');
const skipButtons = player.querySelectorAll('[data-skip]');
const ranges = player.querySelectorAll('.player__slider');

const togglePlay = () => viewer.paused ? viewer.play() : viewer.pause();
const updateButton = () => toggle.textContent = (viewer.paused) ? '►' : '❚ ❚';

function handleRangeUpdate () {
  if(controlFlag)
    viewer[this.name] = this.value;
}

function scrub (e) {
  let percent  = (e.offsetX / progress.offsetWidth) * 100;
  progressBar.style.flexBasis = `${percent}%`;
  viewer.currentTime = (percent/100) * viewer.duration;
}

function changeDurationFlag () {
  durationFlag = !durationFlag;
}

function changeFlag () {
  controlFlag = !controlFlag;
}

function handleProgress () {
 const percent = (viewer.currentTime/viewer.duration) * 100;
 progressBar.style.flexBasis = `${percent}%`;
}

toggle.addEventListener('click', togglePlay);

viewer.addEventListener('click', togglePlay);
viewer.addEventListener('play', updateButton);
viewer.addEventListener('pause', updateButton);
viewer.addEventListener('timeupdate', handleProgress);

skipButtons.forEach((item) => {
  item.addEventListener('click', (e) => {
    viewer.currentTime += parseFloat(e.srcElement.dataset.skip);
  })
});

ranges.forEach((item) => {
  item.addEventListener('change', handleRangeUpdate);
  item.addEventListener('mousemove', handleRangeUpdate);
  item.addEventListener('mousedown', changeFlag)
  item.addEventListener('mouseup', changeFlag)
})

progress.addEventListener('click', scrub);
progress.addEventListener('mousemove', (e) => durationFlag && scrub(e));
progress.addEventListener('mousedown', changeDurationFlag);
progress.addEventListener('mouseup', changeDurationFlag);
