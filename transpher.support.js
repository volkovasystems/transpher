"use strict";

/*;
	@module-license:
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
	@end-module-license

	@module-configuration:
		{
			"package": "transpher",
			"path": "transpher/transpher.js",
			"file": "transpher.js",
			"module": "transpher",
			"author": "Richeve S. Bebedor",
			"contributors": [
				"John Lenon Maghanoy <johnlenonmaghanoy@gmail.com>"
			],
			"eMail": "richeve.bebedor@gmail.com",
			"repository": "https://github.com/volkovasystems/transpher.git",
			"test": "transpher-test.js",
			"global": true
		}
	@end-module-configuration

	@module-documentation:
		Transfer all properties.
	@end-module-documentation

	@include:
		{
			"ate": "ate",
			"falzy": "falzy"
		}
	@end-include
*/

var _getOwnPropertyNames = require("babel-runtime/core-js/object/get-own-property-names");

var _getOwnPropertyNames2 = _interopRequireDefault(_getOwnPropertyNames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ate = require("ate");
var falzy = require("falzy");

var transpher = function transpher(source, destination) {
	/*;
 	@meta-configuration:
 		{
 			"source:required": [
 				"function",
 				"object"
 			],
 			"destination:required": [
 				"function",
 				"object"
 			]
 		}
 	@end-meta-configuration
 */

	if (falzy(source)) {
		throw new Error("invalid source");
	}

	if (falzy(destination)) {
		throw new Error("invalid destination");
	}

	(0, _getOwnPropertyNames2.default)(source).forEach(function onEachProperty(property) {
		ate(property, source[property], destination);
	});

	return destination;
};

module.exports = transpher;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRyYW5zcGhlci5qcyJdLCJuYW1lcyI6WyJhdGUiLCJyZXF1aXJlIiwiZmFsenkiLCJ0cmFuc3BoZXIiLCJzb3VyY2UiLCJkZXN0aW5hdGlvbiIsIkVycm9yIiwiZm9yRWFjaCIsIm9uRWFjaFByb3BlcnR5IiwicHJvcGVydHkiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUF3REEsSUFBTUEsTUFBTUMsUUFBUyxLQUFULENBQVo7QUFDQSxJQUFNQyxRQUFRRCxRQUFTLE9BQVQsQ0FBZDs7QUFFQSxJQUFNRSxZQUFZLFNBQVNBLFNBQVQsQ0FBb0JDLE1BQXBCLEVBQTRCQyxXQUE1QixFQUF5QztBQUMxRDs7Ozs7Ozs7Ozs7Ozs7O0FBZUEsS0FBSUgsTUFBT0UsTUFBUCxDQUFKLEVBQXFCO0FBQ3BCLFFBQU0sSUFBSUUsS0FBSixDQUFXLGdCQUFYLENBQU47QUFDQTs7QUFFRCxLQUFJSixNQUFPRyxXQUFQLENBQUosRUFBMEI7QUFDekIsUUFBTSxJQUFJQyxLQUFKLENBQVcscUJBQVgsQ0FBTjtBQUNBOztBQUVELG9DQUE0QkYsTUFBNUIsRUFDRUcsT0FERixDQUNXLFNBQVNDLGNBQVQsQ0FBeUJDLFFBQXpCLEVBQW1DO0FBQzVDVCxNQUFLUyxRQUFMLEVBQWVMLE9BQVFLLFFBQVIsQ0FBZixFQUFtQ0osV0FBbkM7QUFDQSxFQUhGOztBQUtBLFFBQU9BLFdBQVA7QUFDQSxDQTlCRDs7QUFnQ0FLLE9BQU9DLE9BQVAsR0FBaUJSLFNBQWpCIiwiZmlsZSI6InRyYW5zcGhlci5qcyIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG4vKjtcblx0QG1vZHVsZS1saWNlbnNlOlxuXHRcdFRoZSBNSVQgTGljZW5zZSAoTUlUKVxuXHRcdEBtaXQtbGljZW5zZVxuXG5cdFx0Q29weXJpZ2h0IChAYykgMjAxNyBSaWNoZXZlIFNpb2RpbmEgQmViZWRvclxuXHRcdEBlbWFpbDogcmljaGV2ZS5iZWJlZG9yQGdtYWlsLmNvbVxuXG5cdFx0UGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuXHRcdG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcblx0XHRpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG5cdFx0dG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuXHRcdGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuXHRcdGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG5cblx0XHRUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpbiBhbGxcblx0XHRjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuXG5cdFx0VEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuXHRcdElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuXHRcdEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuXHRcdEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcblx0XHRMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuXHRcdE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU4gVEhFXG5cdFx0U09GVFdBUkUuXG5cdEBlbmQtbW9kdWxlLWxpY2Vuc2VcblxuXHRAbW9kdWxlLWNvbmZpZ3VyYXRpb246XG5cdFx0e1xuXHRcdFx0XCJwYWNrYWdlXCI6IFwidHJhbnNwaGVyXCIsXG5cdFx0XHRcInBhdGhcIjogXCJ0cmFuc3BoZXIvdHJhbnNwaGVyLmpzXCIsXG5cdFx0XHRcImZpbGVcIjogXCJ0cmFuc3BoZXIuanNcIixcblx0XHRcdFwibW9kdWxlXCI6IFwidHJhbnNwaGVyXCIsXG5cdFx0XHRcImF1dGhvclwiOiBcIlJpY2hldmUgUy4gQmViZWRvclwiLFxuXHRcdFx0XCJjb250cmlidXRvcnNcIjogW1xuXHRcdFx0XHRcIkpvaG4gTGVub24gTWFnaGFub3kgPGpvaG5sZW5vbm1hZ2hhbm95QGdtYWlsLmNvbT5cIlxuXHRcdFx0XSxcblx0XHRcdFwiZU1haWxcIjogXCJyaWNoZXZlLmJlYmVkb3JAZ21haWwuY29tXCIsXG5cdFx0XHRcInJlcG9zaXRvcnlcIjogXCJodHRwczovL2dpdGh1Yi5jb20vdm9sa292YXN5c3RlbXMvdHJhbnNwaGVyLmdpdFwiLFxuXHRcdFx0XCJ0ZXN0XCI6IFwidHJhbnNwaGVyLXRlc3QuanNcIixcblx0XHRcdFwiZ2xvYmFsXCI6IHRydWVcblx0XHR9XG5cdEBlbmQtbW9kdWxlLWNvbmZpZ3VyYXRpb25cblxuXHRAbW9kdWxlLWRvY3VtZW50YXRpb246XG5cdFx0VHJhbnNmZXIgYWxsIHByb3BlcnRpZXMuXG5cdEBlbmQtbW9kdWxlLWRvY3VtZW50YXRpb25cblxuXHRAaW5jbHVkZTpcblx0XHR7XG5cdFx0XHRcImF0ZVwiOiBcImF0ZVwiLFxuXHRcdFx0XCJmYWx6eVwiOiBcImZhbHp5XCJcblx0XHR9XG5cdEBlbmQtaW5jbHVkZVxuKi9cblxuY29uc3QgYXRlID0gcmVxdWlyZSggXCJhdGVcIiApO1xuY29uc3QgZmFsenkgPSByZXF1aXJlKCBcImZhbHp5XCIgKTtcblxuY29uc3QgdHJhbnNwaGVyID0gZnVuY3Rpb24gdHJhbnNwaGVyKCBzb3VyY2UsIGRlc3RpbmF0aW9uICl7XG5cdC8qO1xuXHRcdEBtZXRhLWNvbmZpZ3VyYXRpb246XG5cdFx0XHR7XG5cdFx0XHRcdFwic291cmNlOnJlcXVpcmVkXCI6IFtcblx0XHRcdFx0XHRcImZ1bmN0aW9uXCIsXG5cdFx0XHRcdFx0XCJvYmplY3RcIlxuXHRcdFx0XHRdLFxuXHRcdFx0XHRcImRlc3RpbmF0aW9uOnJlcXVpcmVkXCI6IFtcblx0XHRcdFx0XHRcImZ1bmN0aW9uXCIsXG5cdFx0XHRcdFx0XCJvYmplY3RcIlxuXHRcdFx0XHRdXG5cdFx0XHR9XG5cdFx0QGVuZC1tZXRhLWNvbmZpZ3VyYXRpb25cblx0Ki9cblxuXHRpZiggZmFsenkoIHNvdXJjZSApICl7XG5cdFx0dGhyb3cgbmV3IEVycm9yKCBcImludmFsaWQgc291cmNlXCIgKTtcblx0fVxuXG5cdGlmKCBmYWx6eSggZGVzdGluYXRpb24gKSApe1xuXHRcdHRocm93IG5ldyBFcnJvciggXCJpbnZhbGlkIGRlc3RpbmF0aW9uXCIgKTtcblx0fVxuXG5cdE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKCBzb3VyY2UgKVxuXHRcdC5mb3JFYWNoKCBmdW5jdGlvbiBvbkVhY2hQcm9wZXJ0eSggcHJvcGVydHkgKXtcblx0XHRcdGF0ZSggcHJvcGVydHksIHNvdXJjZVsgcHJvcGVydHkgXSwgZGVzdGluYXRpb24gKTtcblx0XHR9ICk7XG5cblx0cmV0dXJuIGRlc3RpbmF0aW9uO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSB0cmFuc3BoZXI7XG4iXX0=
