"use strict";

const transpher = require( "./transpher.js" );

console.log( transpher( { "name": "simple" }, { "type": "ok" } ) );
console.log( transpher( { } ) );
console.log( transpher( ) );
