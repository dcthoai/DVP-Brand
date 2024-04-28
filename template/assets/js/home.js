
const videoAutoPlay = document.getElementById('video-auto-play');
const videoHeight = videoAutoPlay.offsetHeight;

window.addEventListener("scroll", function() {
    let scrollY = window.scrollY;

    if (scrollY > 0.5 * videoHeight) {
        videoAutoPlay.play();

        videoAutoPlay.addEventListener('click', () => {
            videoAutoPlay.muted = false;
        })
    }

    if (scrollY > 1.75 * videoHeight || scrollY <= 0.5 * videoHeight){
        videoAutoPlay.pause();
    }
});