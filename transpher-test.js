"use strict";

const assert = require( "assert" );
const transpher = require( "./transpher.js" );

assert.deepEqual( transpher( { "name": "simple" }, { "type": "ok" } ), { "type": "ok", "name": "simple" } );
assert.deepEqual( transpher( { "hello": "world" }, { "hello": "yeah" } ), { "hello": "world" } );
assert.deepEqual( transpher( { "hello": "world" }, { "hello": "yeah" }, true ), { "hello": "yeah" } );

console.log( "ok" );
