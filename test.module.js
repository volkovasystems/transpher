"use strict";

/*;
	@test-license:
		The MIT License (MIT)
		@mit-license

		Copyright (@c) 2017 Richeve Siodina Bebedor
		@email: richeve.bebedor@gmail.com

		Permission is hereby granted, free of charge, to any person obtaining a copy
		of this software and associated documentation files (the "Software"), to deal
		in the Software without restriction, including without limitation the rights
		to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
		copies of the Software, and to permit persons to whom the Software is
		furnished to do so, subject to the following conditions:

		The above copyright notice and this permission notice shall be included in all
		copies or substantial portions of the Software.

		THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
		IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
		FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
		AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
		LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
		OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
		SOFTWARE.
	@end-test-license

	@test-configuration:
		{
			"package": "transpher",
			"path": "transpher/test.module.js",
			"file": "test.module.js",
			"module": "test",
			"author": "Richeve S. Bebedor",
			"eMail": "richeve.bebedor@gmail.com",
			"contributors": [
				"John Lenon Maghanoy <johnlenonmaghanoy@gmail.com>",
				"Vinse Vinalon <vinsevinalon@gmail.com>"
			],
			"repository": "https://github.com/volkovasystems/transpher.git"
		}
	@end-test-configuration

	@test-documentation:

	@end-test-documentation

	@include:
		{
			"assert": "should",
			"transpher": "transpher"
		}
	@end-include
*/

const assert = require( "should" );

//: @server:
const transpher = require( "./transpher.js" );
//: @end-server

//: @client:
const transpher = require( "./transpher.support.js" );
//: @end-client

//: @bridge:
const path = require( "path" );
//: @end-bridge


//: @server:
describe( "transpher", ( ) => {

	describe( "`transpher( source, target )`", ( ) => {
		it( "should transfer all properties of source to target", ( ) => {
			let source = {
				"hello": "world"
			};

			let target = {
				"property": "value"
			};

			let result = transpher( source, target );

			assert.equal( target, result );

			assert.deepEqual( result, { "hello": "world", "property": "value" } );
		} );
	} );

} );
//: @end-server


//: @client:
describe( "transpher", ( ) => {

	describe( "`transpher( source, target )`", ( ) => {
		it( "should transfer all properties of source to target", ( ) => {
			let source = {
				"hello": "world"
			};

			let target = {
				"property": "value"
			};

			let result = transpher( source, target );

			assert.equal( target, result );

			assert.deepEqual( result, { "hello": "world", "property": "value" } );
		} );
	} );

} );
//: @end-client


//: @bridge:
describe( "transpher", ( ) => {

	let bridgeURL = `file://${ path.resolve( __dirname, "bridge.html" ) }`;

	describe( "`transpher( source, target )`", ( ) => {
		it( "should transfer all properties of source to target", ( ) => {
			//: @ignore:
			let result = browser.url( bridgeURL ).execute(

				function( ){
					let source = {
						"hello": "world"
					};

					let target = {
						"property": "value"
					};

					let result = transpher( source, target );

					return JSON.stringify( result );
				}

			).value;
			//: @end-ignore

			result = JSON.parse( result );

			assert.deepEqual( result, { "hello": "world", "property": "value" } );
		} );
	} );

} );
//: @end-bridge
