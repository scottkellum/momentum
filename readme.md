# Momentum

Add page events like tracking scroll position, mouse position, device orientation, and more to your CSS!

## Installation

Add [the js](https://raw.githubusercontent.com/scottkellum/momentum-css/master/momentum-css.js) to the end of your `<body>` tag.

## Usage

All values are unitless meaning you will need to add your units to them. For example, `calc(var(--scrolly)*1px)` results in a pixel value for the vertical scroll position.

### Global variables

<table>
<tr><th>Property<th>Description
<tr><td><pre><code>--loaded</code></pre><td>`0` before the page is loaded, `1` when the page is done loading.
<tr><td><pre><code>--viewportwidth</code></pre><td>The width of the viewport.
<tr><td><pre><code>--viewportheight</code></pre><td>The height of the viewport.
<tr><td><pre><code>--scrollx</code></pre><td>Distance scrolled on the X axis.
<tr><td><pre><code>--scrolly</code></pre><td>Distance scrolled on the Y axis.
<tr><td><pre><code>--clientx</code></pre><td>Pointer coordinates on the X axis. This includes touch events.
<tr><td><pre><code>--clienty</code></pre><td>Pointer coordinates on the Y axis. This includes touch events.
<tr><td><pre><code>--pointerdown</code></pre><td>Boolean value if the pointer is up or down. Use touchpoints below for touch events.
<tr><td><pre><code>--touchpoints</code></pre><td>Number of touch points currently active.
<tr><td><pre><code>--orientationalpha</code></pre><td>Gyroscopic orientation along the alpha axis.
<tr><td><pre><code>--orientationbeta</code></pre><td>Gyroscopic orientation along the beta axis.
<tr><td><pre><code>--orientationgamma</code></pre><td>Gyroscopic orientation along the gamma axis.
<tr><td><pre><code>--random</code></pre><td>A random value between 0 and 1.
<tr><td><pre><code>--noise</code></pre><td>A random value between 0 and 1 updated every 100ms unless otherwise specified with <code>--noise-interval</code>.
</table>

### Element variables

To trigger element variables, add the class `momentumcss` to your elemnt.

<table>
<tr><th style="width:14em">Property<th>Description
<tr><td><pre><code>--width</code></pre><td>Width of the element
<tr><td><pre><code>--height</code></pre><td>Height of the element
<tr><td><pre><code>--top</code></pre><td>Element offsetTop value
<tr><td><pre><code>--left</code></pre><td>Element offsetLeft value
<tr><td><pre><code>--random</code></pre><td>A random value between 0 and 1.
</table>