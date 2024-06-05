document.addEventListener("DOMContentLoaded", function () {
  const audio = document.getElementById("audio");
  const playPauseBtn = document.getElementById("play-pause");
  const progressBar = document.getElementById("progress-bar");
  const volumeControl = document.getElementById("volume-control");
  const currentTimeEl = document.getElementById("current-time");
  const durationEl = document.getElementById("duration");
  const trackTitle = document.getElementById("track-title");
  const muteUnmuteBtn = document.getElementById("mute-unmute");

  // Update track information
  trackTitle.textContent = audio.src.split("/").pop();

  // Play/Pause functionality
  playPauseBtn.addEventListener("click", function () {
    if (audio.paused) {
      audio.play();
      playPauseBtn.innerHTML = '<i class="fas fa-pause"></i>';
    } else {
      audio.pause();
      playPauseBtn.innerHTML = '<i class="fas fa-play"></i>';
    }
  });

  // Update progress bar and current time
  audio.addEventListener("timeupdate", function () {
    const currentTime = audio.currentTime;
    const duration = audio.duration;
    progressBar.value = (currentTime / duration) * 100;

    currentTimeEl.textContent = formatTime(currentTime);
    durationEl.textContent = formatTime(duration);
  });

  // Seek functionality
  progressBar.addEventListener("input", function () {
    const seekTime = (progressBar.value / 100) * audio.duration;
    audio.currentTime = seekTime;
  });

  // Volume control
  volumeControl.addEventListener("input", function () {
    audio.volume = volumeControl.value / 100;
    if (audio.volume === 0) {
      muteUnmuteBtn.innerHTML = '<i class="fas fa-volume-mute"></i>';
    } else {
      muteUnmuteBtn.innerHTML = '<i class="fas fa-volume-up"></i>';
    }
  });

  // Mute/Unmute functionality
  muteUnmuteBtn.addEventListener("click", function () {
    if (audio.muted) {
      audio.muted = false;
      muteUnmuteBtn.innerHTML = '<i class="fas fa-volume-up"></i>';
    } else {
      audio.muted = true;
      muteUnmuteBtn.innerHTML = '<i class="fas fa-volume-mute"></i>';
    }
  });

  // Helper function to format time
  function formatTime(seconds) {
    const minutes = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${minutes}:${secs < 10 ? "0" : ""}${secs}`;
  }

  // Load metadata to display duration
  audio.addEventListener("loadedmetadata", function () {
    durationEl.textContent = formatTime(audio.duration);
  });
});

function openModal(element) {
  console.log("aloo");
  var modal = document.getElementById("myModal");
  var modalImg = document.getElementById("img01");
  modal.style.display = "block";
  modalImg.src = element.src;
}

function closeModal() {
  var modal = document.getElementById("myModal");
  modal.style.display = "none";
}

// Show the cookies modal
function showCookiesModal() {
  var modal = document.getElementById("cookiesModal");
  modal.style.display = "flex";
}

// Accept cookies
function acceptCookies() {
  var modal = document.getElementById("cookiesModal");
  modal.style.display = "none";
  localStorage.setItem("cookiesAccepted", "true");
}

// Decline cookies
function declineCookies() {
  var modal = document.getElementById("cookiesModal");
  modal.style.display = "none";
  localStorage.setItem("cookiesAccepted", "false");
}

// Close image modal
function closeModal() {
  var modal = document.getElementById("myModal");
  modal.style.display = "none";
}

// Check cookies consent
window.onload = function () {
  var cookiesAccepted = localStorage.getItem("cookiesAccepted");
  if (!cookiesAccepted) {
    showCookiesModal();
  }
};

// Get the audio element
var audioPlayer = document.getElementById("audioPlayer");
// Get the play/pause button and volume button
var playButton = document.getElementById("playButton");
var volumeButton = document.getElementById("volumeButton");
// Get the volume slider
var volumeSlider = document.getElementById("volumeSlider");

// Function to toggle play/pause
function togglePlayPause() {
  if (audioPlayer.paused) {
    audioPlayer.play();
    playButton.textContent = "Pause";
  } else {
    audioPlayer.pause();
    playButton.textContent = "Play";
  }
}
// Function to toggle mute/unmute
function toggleMute() {
  if (audioPlayer.muted) {
    audioPlayer.muted = false;
    volumeButton.textContent = "Mute";
    volumeSlider.value = audioPlayer.volume;
  } else {
    audioPlayer.muted = true;
    volumeButton.textContent = "Unmute";
    volumeSlider.value = 0;
  }
}
// Function to adjust volume
function adjustVolume() {
  audioPlayer.volume = volumeSlider.value;
  if (audioPlayer.volume === 0) {
    volumeButton.textContent = "Unmute";
  } else {
    volumeButton.textContent = "Mute";
  }
}
