# Momentum

Tracking scroll position, mouse position, device orientation, and more in CSS!

## Installation

Add [the js](https://raw.githubusercontent.com/scottkellum/momentum-css/master/momentum-css.js) to the end of your `<body>` tag.

## Usages

This library provides CSS variables you can use alongside transitions, transforms, calc, and anywhere in your CSS

### Global variables

<table>
<tr><th>Property<th>Description
<tr><td><code>--viewportwidth</code><td>The width of the viewport
<tr><td><code>--viewportheight</code><td>The height of the viewport
<tr><td><code>--scrollx</code><td>Distance scrolled on the X axis
<tr><td><code>--scrolly</code><td>Distance scrolled on the Y axis
<tr><td><code>--clientx</code><td>Pointer coordinates on the X axis. This includes touch events.
<tr><td><code>--clienty</code><td>Pointer coordinates on the Y axis. This includes touch events.
<tr><td><code>--pointerdown</code><td>Boolean value if the pointer is up or down. Use touchpoints below for touch events.
<tr><td><code>--touchpoints</code><td>Number of touch points currently active.
<tr><td><code>--orientationalpha</code><td>Gyroscopic orientation along the alpha axis.
<tr><td><code>--orientationbeta</code><td>Gyroscopic orientation along the beta axis.
<tr><td><code>--orientationgamma</code><td>Gyroscopic orientation along the gamma axis.
<tr><td><code>--noise</code><td>Random numbers between 0 and 1. You can set an update interval with `--noiseinterval` on the `body` element.
</table>

### Local variables

To trigger local variables, add the class `momentumcss` to your elemnt.

<table>
<tr><th style="width:14em">Property<th>Description
<tr><td><code>--elwidth</code><td>Width of the element
<tr><td><code>--elheight</code><td>Height of the element
<tr><td><code>--eltop</code><td>Element offsetTop value
<tr><td><code>--elleft</code><td>Element offsetLeft value
</table>