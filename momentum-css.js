var momentumRoot = document.body.style;
var momentumEls = document.querySelectorAll('.momentumcss');

// Page and element location and dimentions
function momentumInit() {
    momentumRoot.setProperty('--viewportwidth',window.innerWidth);
    momentumRoot.setProperty('--viewportheight',window.innerHeight);
    for (let i = 0; i < momentumEls.length; i++) {
        const e = momentumEls[i];
        e.style.setProperty('--width',e.offsetWidth);
        e.style.setProperty('--height',e.offsetHeight);
        e.style.setProperty('--top',e.offsetTop);
        e.style.setProperty('--left',e.offsetLeft);
    }
} momentumInit();
window.addEventListener('resize',momentumInit);

// Initialize variables
momentumRoot.setProperty('--scrollx',window.scrollX);
momentumRoot.setProperty('--scrolly',window.scrollY);
momentumRoot.setProperty('--clientx','0');
momentumRoot.setProperty('--clienty','0');
momentumRoot.setProperty('--pointerdown',0);
momentumRoot.setProperty('--touches',0);
momentumRoot.setProperty('--orientalpha','0');
momentumRoot.setProperty('--orientbeta','0');
momentumRoot.setProperty('--orientgamma','0');
momentumRoot.setProperty('--random',Math.random());
momentumRoot.setProperty('--noise',Math.random());

// Noise
window.setInterval(function(){
    momentumRoot.setProperty('--noise',Math.random());
}, 100);

// Page events
momentumRoot.setProperty('--ready',0);
momentumRoot.setProperty('--loaded',0);
document.addEventListener( 'DOMContentLoaded', function () {
    momentumRoot.setProperty('--ready',1)
}, false );
window.onload = function(){
    momentumRoot.setProperty('--loaded',1)
};

// Scroll events
window.addEventListener('scroll',momentumScroll,false);
function momentumScroll() {
    momentumRoot.setProperty('--scrollx',window.scrollX);
    momentumRoot.setProperty('--scrolly',window.scrollY);
}

// Pointer events
window.addEventListener('pointermove',momentumPointer,false);
function momentumPointer(e) {
    momentumRoot.setProperty('--clientx',e.clientX);
    momentumRoot.setProperty('--clienty',e.clientY);
}
window.addEventListener('pointerdown',momentumPointerDown,false);
window.addEventListener('pointerup',momentumPointerUp,false);
function momentumPointerDown(e) {
    momentumRoot.setProperty('--pointerdown',1);
}
function momentumPointerUp(e) {
    momentumRoot.setProperty('--pointerdown',0);
}
// Override pointer events if touch events
window.addEventListener('touchmove',momentumTouch,false);
function momentumTouch(e) {
    momentumRoot.setProperty('--clientx',e.touches[0].clientX);
    momentumRoot.setProperty('--clienty',e.touches[0].clientY);
}
window.addEventListener('touchstart',momentumTouchStart,false);
window.addEventListener('touchend',momentumTouchEnd,false);
function momentumTouchStart(e) {
    momentumRoot.setProperty('--pointerdown',0);
    momentumRoot.setProperty('--clientx',e.touches[0].clientX);
    momentumRoot.setProperty('--clienty',e.touches[0].clientY);
    momentumRoot.setProperty('--touches',e.targetTouches.length);
}
function momentumTouchEnd(e) {
    momentumRoot.setProperty('--touches',e.targetTouches.length);
}

// Device orientation
window.addEventListener('deviceorientation', momentumOrientation);
function momentumOrientation(e) {
    momentumRoot.setProperty('--orientalpha',e.alpha);
    momentumRoot.setProperty('--orientbeta',e.beta);
    momentumRoot.setProperty('--orientgamma',e.gamma);
}