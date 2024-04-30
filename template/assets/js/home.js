const banner = document.querySelector('.banner');
const videoAutoPlay = document.getElementById('video-auto-play');
const videoHeight = videoAutoPlay.offsetHeight;
const bannerHeight = banner.offsetHeight;

window.addEventListener("scroll", function() {
    let scrollY = window.scrollY;

    if (scrollY > 0.75 * bannerHeight) {
        videoAutoPlay.play();

        videoAutoPlay.addEventListener('click', () => {
            videoAutoPlay.muted = false;
        })
    }

    if (scrollY > bannerHeight + videoHeight || scrollY <= 0.75 * bannerHeight){
        videoAutoPlay.pause();
    }
});