(function(){

    var momentumRoot;
    var momentumEls;

    // Page and element location and dimentions
    function momentumInit() {
        momentumRoot.setProperty('--viewportwidth',window.innerWidth);
        momentumRoot.setProperty('--viewportheight',window.innerHeight);
        for (i = 0; i < momentumEls.length; i++) {
            var e = momentumEls[i];
            e.style.setProperty('--width',e.offsetWidth);
            e.style.setProperty('--height',e.offsetHeight);
            e.style.setProperty('--top',e.offsetTop);
            e.style.setProperty('--left',e.offsetLeft);
            e.style.setProperty('--random',Math.random());
        }
    };

    // When the DOM is loaded
    document.addEventListener( 'DOMContentLoaded', function () {
        momentumRoot = document.body.style;
        momentumEls = document.querySelectorAll('.momentumcss');
        momentumRoot.setProperty('--loaded',0);

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
        momentumRoot.setProperty('--compassheading','0');
        momentumRoot.setProperty('--random',Math.random());
        momentumRoot.setProperty('--noise',Math.random());


        // Scroll events
        window.addEventListener('scroll', function() {
            window.requestAnimationFrame(momentumScroll);
        }, false);
        
        function momentumScroll() {
            momentumRoot.setProperty('--scrollx',window.scrollX);
            momentumRoot.setProperty('--scrolly',window.scrollY);
        }

        // Pointer events
        window.addEventListener('pointermove', function(e) {
            window.requestAnimationFrame(function() {
                momentumPointer(e);
            });
        }, false);
        function momentumPointer(e) {
            momentumRoot.setProperty('--clientx',e.clientX);
            momentumRoot.setProperty('--clienty',e.clientY);
        }
        window.addEventListener('pointerdown', function(e) {
            window.requestAnimationFrame(function() {
            momentumPointerDown(e);
            });
        }, false);
        
        window.addEventListener('pointerup', function(e) {
            window.requestAnimationFrame(function() {
            momentumPointerUp(e);
            });
        }, false);
        function momentumPointerDown(e) {
            momentumRoot.setProperty('--pointerdown',1);
        }
        function momentumPointerUp(e) {
            momentumRoot.setProperty('--pointerdown',0);
        }
        // Override pointer events if touch events
        window.addEventListener('touchmove', function(e) {
            window.requestAnimationFrame(function() {
            momentumTouch(e);
            });
        }, false);
        function momentumTouch(e) {
            momentumRoot.setProperty('--clientx',e.touches[0].clientX);
            momentumRoot.setProperty('--clienty',e.touches[0].clientY);
        }
        window.addEventListener('touchstart', function(e) {
            window.requestAnimationFrame(function() {
            momentumTouchStart(e);
            });
        }, false);
        
        window.addEventListener('touchend', function(e) {
            window.requestAnimationFrame(function() {
            momentumTouchEnd(e);
            });
        }, false);
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
        window.addEventListener('deviceorientation', function(e) {
            window.requestAnimationFrame(function() {
            momentumOrientation(e);
            });
        });
        function momentumOrientation(e) {
            momentumRoot.setProperty('--orientalpha',e.alpha);
            momentumRoot.setProperty('--orientbeta',e.beta);
            momentumRoot.setProperty('--orientgamma',e.gamma);
            momentumRoot.setProperty('--compassheading',e.webkitCompassHeading);
        }
        momentumInit();
    }, false );

    // When the page has fully loaded
    window.onload = function(){
        momentumInit();
        momentumRoot.setProperty('--loaded',1);

        // Noise
        var i = window.getComputedStyle(document.body).getPropertyValue('--noise-interval');
        if (i != '0') {
            window.setInterval(function(){
                momentumRoot.setProperty('--noise',Math.random());
            }, i || 100);
        } else {
            momentumRoot.setProperty('--noise',Math.random());
        }
    };
    window.addEventListener('resize',momentumInit);
})();