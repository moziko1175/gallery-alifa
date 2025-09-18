const tombolMulai = document.querySelector(".mulai");
const musik = document.getElementById("musik");
const playlist = [
  "source/bgm1.mp3",
  "source/bgm2.mp3"
];
let indexLagu = 0;

function playNext() {
  musik.src = playlist[indexLagu];
  musik.play();
}

musik.addEventListener("ended", () => {
  indexLagu++;
  if (indexLagu >= playlist.length) indexLagu = 0;
  playNext();
});

tombolMulai.addEventListener("click", () => {
  musik.volume = 1.0;
  playNext();
  tombolMulai.disabled = true;
});

const targetGambar = [
  "source/2.jpg", "source/3.jpg", "source/4.jpg", "source/5.jpg",
  "source/6.jpg", "source/7.jpg", "source/8.jpg", "source/9.jpg",
  "source/10.jpg", "source/11.jpg", "source/12.jpg", "source/13.jpg",
  "source/14.jpg", "source/15.jpg", "source/16.jpg", "source/17.jpg",
  "source/18.jpg", "source/19.jpg", "source/20.jpg", "source/21.jpg",
  "source/22.jpg", "source/23.jpg"
];

const gambarElements = document.querySelectorAll(".gambar");
gambarElements.forEach((img, idx) => {
  img.addEventListener("click", () => {
    gantigambar(img, targetGambar[idx]);
  });
});

function gantigambar(img, srcBaru) {
  img.classList.add("fade-out");
  setTimeout(() => {
    img.src = srcBaru;
    img.classList.remove("fade-out");
    img.classList.add("fade-in");
    setTimeout(() => {
      img.classList.remove("fade-in");
    }, 1000);
  }, 1000);
}

const tombolVideo = document.querySelector(".tvid");
const video = document.querySelector(".video");

tombolVideo.addEventListener("click", () => {
  if (!musik.paused) {
    let targetVolume = 0;
    let fade = setInterval(() => {
      if (musik.volume - 0.05 > targetVolume) {
        musik.volume = +(musik.volume - 0.05).toFixed(2);
      } else {
        musik.volume = targetVolume;
        clearInterval(fade);
      }
    }, 200);
  }
  video.style.display = "block";
  video.play();
  video.scrollIntoView({ behavior: "smooth", block: "center" });
});
