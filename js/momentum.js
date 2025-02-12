(function(){

    var momentumRoot;
    var momentumEls;
    var scrollX, scrollY, clientX, clientY, pointerDown, touches, orientAlpha, orientBeta, orientGamma, compassHeading;

    // Page and element location and dimensions
    function momentumInit() {
        momentumRoot.setProperty('--viewportwidth', window.innerWidth);
        momentumRoot.setProperty('--viewportheight', window.innerHeight);
        for (var i = 0; i < momentumEls.length; i++) {
            var e = momentumEls[i];
            e.style.setProperty('--width', e.offsetWidth);
            e.style.setProperty('--height', e.offsetHeight);
            e.style.setProperty('--top', e.offsetTop);
            e.style.setProperty('--left', e.offsetLeft);
        }
    }

    function updateProperties() {
        momentumRoot.setProperty('--scrollx', scrollX);
        momentumRoot.setProperty('--scrolly', scrollY);
        momentumRoot.setProperty('--clientx', clientX);
        momentumRoot.setProperty('--clienty', clientY);
        momentumRoot.setProperty('--pointerdown', pointerDown);
        momentumRoot.setProperty('--touches', touches);
        momentumRoot.setProperty('--orientalpha', orientAlpha);
        momentumRoot.setProperty('--orientbeta', orientBeta);
        momentumRoot.setProperty('--orientgamma', orientGamma);
        momentumRoot.setProperty('--compassheading', compassHeading);
    }

    function requestUpdate() {
        window.requestAnimationFrame(updateProperties);
    }

    // When the DOM is loaded
    document.addEventListener('DOMContentLoaded', function () {
        momentumRoot = document.body.style;
        momentumEls = document.querySelectorAll('.momentumcss');
        momentumRoot.setProperty('--loaded', 0);

        // Initialize variables
        scrollX = window.scrollX;
        scrollY = window.scrollY;
        clientX = 0;
        clientY = 0;
        pointerDown = 0;
        touches = 0;
        orientAlpha = 0;
        orientBeta = 0;
        orientGamma = 0;
        compassHeading = 0;

        momentumRoot.setProperty('--random', Math.random());
        momentumRoot.setProperty('--noise', Math.random());

        // Scroll events
        window.addEventListener('scroll', function() {
            scrollX = window.scrollX;
            scrollY = window.scrollY;
            requestUpdate();
        }, false);

        // Pointer events
        window.addEventListener('pointermove', function(e) {
            clientX = e.clientX;
            clientY = e.clientY;
            requestUpdate();
        }, false);

        window.addEventListener('pointerdown', function(e) {
            pointerDown = 1;
            requestUpdate();
        }, false);

        window.addEventListener('pointerup', function(e) {
            pointerDown = 0;
            requestUpdate();
        }, false);

        // Override pointer events if touch events
        window.addEventListener('touchmove', function(e) {
            clientX = e.touches[0].clientX;
            clientY = e.touches[0].clientY;
            requestUpdate();
        }, false);

        window.addEventListener('touchstart', function(e) {
            pointerDown = 0;
            clientX = e.touches[0].clientX;
            clientY = e.touches[0].clientY;
            touches = e.targetTouches.length;
            requestUpdate();
        }, false);

        window.addEventListener('touchend', function(e) {
            touches = e.targetTouches.length;
            requestUpdate();
        }, false);

        // Device orientation
        window.addEventListener('deviceorientation', function(e) {
            orientAlpha = e.alpha;
            orientBeta = e.beta;
            orientGamma = e.gamma;
            compassHeading = e.webkitCompassHeading;
            requestUpdate();
        });

        momentumInit();
        for (var i = 0; i < momentumEls.length; i++) {
            var e = momentumEls[i];
            e.style.setProperty('--random', Math.random());
        }
    }, false);

    // When the page has fully loaded
    window.onload = function() {
        momentumInit();
        momentumRoot.setProperty('--loaded', 1);

        // Noise
        var i = window.getComputedStyle(document.body).getPropertyValue('--noise-interval');
        if (i != '0') {
            window.setInterval(function() {
                momentumRoot.setProperty('--noise', Math.random());
            }, i || 100);
        } else {
            momentumRoot.setProperty('--noise', Math.random());
        }
    };

    window.addEventListener('resize', momentumInit);
})();
