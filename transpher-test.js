"use strict";

const transpher = require( "./transpher.js" );

console.log( transpher( { "name": "simple" }, { "type": "ok" } ) );

console.log( transpher( { "hello": "world" }, { "hello": "yeah" } ) );
console.log( transpher( { "hello": "world" }, { "hello": "yeah" }, true ) );
