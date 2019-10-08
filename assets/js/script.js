const speed = document.querySelector(".speed");
const bar = speed.querySelector(".speed-bar");
const video = document.querySelector(".flex");

function handleMove(e) {
  const y = e.pageY - this.offsetTop;
  const percentage = y / this.offsetHeight;
  const [min, max] = [0.1, 5];
  const height = Math.round(percentage * 100) + "%";
  const playbackRate = min + percentage * (max - min);
  bar.style.height = height;
  bar.textContent = playbackRate.toFixed(2) + "x";
  video.playbackRate = playbackRate;
}

speed.addEventListener("mousemove", handleMove);
