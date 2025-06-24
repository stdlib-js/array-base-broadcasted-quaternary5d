/** @license Apache-2.0 */

'use strict';

/**
* Apply a quaternary callback to elements in four broadcasted input arrays and assign results to elements in a five-dimensional nested output array.
*
* @module @stdlib/array-base-broadcasted-quaternary5d
*
* @example
* var add = require( '@stdlib/number-float64-base-add4' );
* var ones5d = require( '@stdlib/array-base-ones5d' );
* var zeros5d = require( '@stdlib/array-base-zeros5d' );
* var bquaternary5d = require( '@stdlib/array-base-broadcasted-quaternary5d' );
*
* var shapes = [
*     [ 1, 1, 3, 1, 1 ],
*     [ 1, 1, 1, 3, 1 ],
*     [ 1, 1, 1, 1, 3 ],
*     [ 1, 1, 1, 1, 1 ],
*     [ 1, 1, 3, 3, 3 ]
* ];
*
* var x = ones5d( shapes[ 0 ] );
* var y = ones5d( shapes[ 1 ] );
* var z = ones5d( shapes[ 2 ] );
* var w = ones5d( shapes[ 3 ] );
* var out = zeros5d( shapes[ 4 ] );
*
* bquaternary5d( [ x, y, z, w, out ], shapes, add );
*
* console.log( out );
* // => [ [ [ [ [ 4.0, 4.0, 4.0 ], [ 4.0, 4.0, 4.0 ], [ 4.0, 4.0, 4.0 ] ], [ [ 4.0, 4.0, 4.0 ], [ 4.0, 4.0, 4.0 ], [ 4.0, 4.0, 4.0 ] ], [ [ 4.0, 4.0, 4.0 ], [ 4.0, 4.0, 4.0 ], [ 4.0, 4.0, 4.0 ] ] ] ] ]
*/

// MODULES //

var main = require( './main.js' );


// EXPORTS //

module.exports = main;
