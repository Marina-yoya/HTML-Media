document.addEventListener("DOMContentLoaded", function () {
    const video = document.getElementById('customVideo');
    const playPauseBtn = document.getElementById('playPauseBtn');
    const stopBtn = document.getElementById('stopBtn');
    const timer = document.getElementById('timer');
    const videoSlider = document.getElementById('videoSlider');
    const darkModeBtn = document.getElementById('darkModeBtn');

    playPauseBtn.addEventListener('click', togglePlayPause);
    stopBtn.addEventListener('click', stopVideo);
    video.addEventListener('timeupdate', updateTimer);
    videoSlider.addEventListener('input', seekVideo);
    darkModeBtn.addEventListener('click', toggleDarkMode);

    function togglePlayPause() {
        if (video.paused || video.ended) {
            video.play();
            playPauseBtn.textContent = 'Pause';
        } else {
            video.pause();
            playPauseBtn.textContent = 'Play';
        }
    }

    function stopVideo() {
        video.pause();
        video.currentTime = 0;
        playPauseBtn.textContent = 'Play';
        updateVideoSlider();
    }

    function updateTimer() {
        const minutes = Math.floor(video.currentTime / 60);
        const seconds = Math.floor(video.currentTime % 60);
        timer.textContent = `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
        updateVideoSlider();
    }

    function updateVideoSlider() {
        const sliderValue = (video.currentTime / video.duration) * 100;
        videoSlider.value = sliderValue;

    }


    function seekVideo() {
        const seekTime = (videoSlider.value / 100) * video.duration;
        video.currentTime = seekTime;
    }

    function toggleDarkMode() {
        document.body.classList.toggle('dark-theme');

    }

    let currentIndex = 0;

    function moveCarousel(direction) {
        currentIndex += direction;

        if (currentIndex < 0) {
            currentIndex = images.length - 1;
        } else if (currentIndex >= images.length) {
            currentIndex = 0;
        }

        updateCarousel();
    }

    function updateCarousel() {
        images.forEach(image => image.style.display = 'none');
        textWrappers.forEach(textWrapper => textWrapper.style.display = 'none');

        images[currentIndex].style.display = 'block';
        textWrappers[currentIndex].style.display = 'block';
    }

    const images = document.querySelectorAll('.carousel');
    const textWrappers = document.querySelectorAll('.text-wrapper');

    const leftButton = document.getElementById('left-btn');
    const rightButton = document.getElementById('right-btn');

    leftButton.addEventListener('click', () => moveCarousel(-1));
    rightButton.addEventListener('click', () => moveCarousel(1));

    updateCarousel();









});



