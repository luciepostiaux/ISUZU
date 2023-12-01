const collapse = document.getElementById("collapse-readmore");

const collapseButton = document.getElementById("collapse-button");
collapse.addEventListener("hide.bs.collapse", (event) => {
  collapseButton.textContent = "Read more";
});

collapse.addEventListener("show.bs.collapse", (event) => {
  collapseButton.textContent = "Read less";
});

const video = document.getElementById("video");

video.addEventListener("click", playPauseMedia);

function playPauseMedia() {
  if (video.paused) {
    video.play();
  } else {
    video.pause();
  }
}
