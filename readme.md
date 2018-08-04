# Momentum

Tracking scroll position, mouse position, device orientation, and more in CSS!

## Installation

Add [the js](https://raw.githubusercontent.com/scottkellum/momentum-css/master/momentum-css.js) to the end of your `<body>` tag.

## Usages

This library provides CSS variables you can use alongside transitions, transforms, calc, and anywhere in your CSS

### Global variables

<table>
<tr><th>Property<th>Description
<tr><td><pre><code>--viewportwidth</code></pre><td>The width of the viewport
<tr><td><pre><code>--viewportheight</code></pre><td>The height of the viewport
<tr><td><pre><code>--scrollx</code></pre><td>Distance scrolled on the X axis
<tr><td><pre><code>--scrolly</code></pre><td>Distance scrolled on the Y axis
<tr><td><pre><code>--clientx</code></pre><td>Pointer coordinates on the X axis. This includes touch events.
<tr><td><pre><code>--clienty</code></pre><td>Pointer coordinates on the Y axis. This includes touch events.
<tr><td><pre><code>--pointerdown</code></pre><td>Boolean value if the pointer is up or down. Use touchpoints below for touch events.
<tr><td><pre><code>--touchpoints</code></pre><td>Number of touch points currently active.
<tr><td><pre><code>--orientationalpha</code></pre><td>Gyroscopic orientation along the alpha axis.
<tr><td><pre><code>--orientationbeta</code></pre><td>Gyroscopic orientation along the beta axis.
<tr><td><pre><code>--orientationgamma</code></pre><td>Gyroscopic orientation along the gamma axis.
<tr><td><pre><code>--noise</code></pre><td>Random numbers between 0 and 1. You can set an update interval with `--noiseinterval` on the `body` element.
</table>

### Local variables

To trigger local variables, add the class `momentumcss` to your elemnt.

<table>
<tr><th style="width:14em">Property<th>Description
<tr><td><pre><code>--width</code></pre><td>Width of the element
<tr><td><pre><code>--height</code></pre><td>Height of the element
<tr><td><pre><code>--top</code></pre><td>Element offsetTop value
<tr><td><pre><code>--left</code></pre><td>Element offsetLeft value
</table>