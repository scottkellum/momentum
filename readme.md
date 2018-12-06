# Momentum

Add page events like tracking scroll position, mouse position, device orientation, and more to your CSS! [See an example of momentum in use](https://momentumcss.netlify.com/).

## Installation

Add [the js](https://raw.githubusercontent.com/scottkellum/momentum/master/js/momentum.min.js) inside your `<head>` tag.

## Usage

All values are unitless meaning you will need to add your units to them. For example, `calc(var(--scrolly)*1px)` results in a pixel value for the vertical scroll position.

### Global variables

<table>
<tr><th>Property<th>Description
<tr><td><pre><code>--loaded</code></pre><td><code>0</code> before the page is loaded, <code>1</code> when the page is done loading.
<tr><td><pre><code>--viewportwidth</code></pre><td>The width of the viewport.
<tr><td><pre><code>--viewportheight</code></pre><td>The height of the viewport.
<tr><td><pre><code>--scrollx</code></pre><td>Distance scrolled on the X axis.
<tr><td><pre><code>--scrolly</code></pre><td>Distance scrolled on the Y axis.
<tr><td><pre><code>--clientx</code></pre><td>Pointer coordinates on the X axis. This includes touch events.
<tr><td><pre><code>--clienty</code></pre><td>Pointer coordinates on the Y axis. This includes touch events.
<tr><td><pre><code>--pointerdown</code></pre><td>Boolean value if the pointer is up or down. Use touchpoints below for touch events.
<tr><td><pre><code>--touchpoints</code></pre><td>Number of touch points currently active.
<tr><td><pre><code>--orientationalpha</code></pre><td>Gyroscopic orientation along the alpha axis. Only avalible in some mobile browsers.
<tr><td><pre><code>--orientationbeta</code></pre><td>Gyroscopic orientation along the beta axis. Only avalible in some mobile browsers.
<tr><td><pre><code>--orientationgamma</code></pre><td>Gyroscopic orientation along the gamma axis. Only avalible in some mobile browsers.
<tr><td><pre><code>--compassheading</code></pre><td>Compass heading. Only avalible in some mobile browsers.
<tr><td><pre><code>--random</code></pre><td>A random value between <code>0</code> and <code>1</code>.
<tr><td><pre><code>--noise</code></pre><td>A random value between <code>0</code> and <code>1</code> updated every <code>100ms</code> unless otherwise specified with <code>--noise-interval</code> on the <code>&lt;body&gt;</code> tag.
</table>

### Element variables

To trigger element variables, add the class `momentumcss` to your elemnt.

<table>
<tr><th style="width:14em">Property<th>Description
<tr><td><pre><code>--width</code></pre><td>Width of the element
<tr><td><pre><code>--height</code></pre><td>Height of the element
<tr><td><pre><code>--top</code></pre><td>Element offsetTop value
<tr><td><pre><code>--left</code></pre><td>Element offsetLeft value
<tr><td><pre><code>--random</code></pre><td>A random value between <code>0</code> and <code>1</code>. This overrides the global value in the CSS cascade.
</table>
