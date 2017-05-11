
const assert = require( "assert" );
const transpher = require( "./transpher.js" );

assert.deepEqual( transpher( { "name": "simple" }, { "type": "ok" } ),
	{ "type": "ok", "name": "simple" }, "should be deeply equal" );

assert.deepEqual( transpher( { "hello": "world" }, { "hello": "yeah" } ),
	{ "hello": "world" }, "should be deeply equal" );

assert.deepEqual( transpher( { "hello": "world" }, { "hello": "yeah" }, true ),
	{ "hello": "yeah" }, "should be deeply equal" );

console.log( "ok" );
