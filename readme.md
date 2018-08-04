# Momentum

Tracking scroll position, mouse position, device orientation, and more in CSS!

## Installation

Add the js to the end of your `<body>` tag.

## Usages

This library provides CSS variables you can use alongside transitions, transforms, calc, and anywhere in your CSS

### Global variables

<table>
<tr><th>Property<th>Description
<tr><td>`--viewportwidth`<td>The width of the viewport
<tr><td>`--viewportheight`<td>The height of the viewport
<tr><td>`--scrollx`<td>Distance scrolled on the X axis
<tr><td>`--scrolly`<td>Distance scrolled on the Y axis
<tr><td>`--clientx`<td>Pointer coordinates on the X axis. This includes touch events.
<tr><td>`--clienty`<td>Pointer coordinates on the Y axis. This includes touch events.
<tr><td>`--pointerdown`<td>Boolean value if the pointer is up or down. Use touchpoints below for touch events.
<tr><td>`--touchpoints`<td>Number of touch points currently active.
<tr><td>`--orientationalpha`<td>Gyroscopic orientation along the alpha axis.
<tr><td>`--orientationbeta`<td>Gyroscopic orientation along the beta axis.
<tr><td>`--orientationgamma`<td>Gyroscopic orientation along the gamma axis.
<tr><td>`--noise`<td>Random numbers between 0 and 1. You can set an update interval with `--noiseinterval` on the `body` element.
</table>

### Local variables

To trigger local variables, add the class `momentumcss` to your elemnt.

<table>
<tr><th>Property<th>Description
<tr><td>`--elwidth`<td>Width of the element
<tr><td>`--elheight`<td>Height of the element
<tr><td>`--eltop`<td>Element offsetTop value
<tr><td>`--elleft`<td>Element offsetLeft value
</table>