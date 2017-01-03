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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRyYW5zcGhlci5qcyJdLCJuYW1lcyI6WyJhdGUiLCJyZXF1aXJlIiwiZmFsenkiLCJ0cmFuc3BoZXIiLCJzb3VyY2UiLCJkZXN0aW5hdGlvbiIsIkVycm9yIiwiZm9yRWFjaCIsIm9uRWFjaFByb3BlcnR5IiwicHJvcGVydHkiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFxREEsSUFBTUEsTUFBTUMsUUFBUyxLQUFULENBQVo7QUFDQSxJQUFNQyxRQUFRRCxRQUFTLE9BQVQsQ0FBZDs7QUFFQSxJQUFNRSxZQUFZLFNBQVNBLFNBQVQsQ0FBb0JDLE1BQXBCLEVBQTRCQyxXQUE1QixFQUF5QztBQUMxRDs7Ozs7Ozs7Ozs7Ozs7O0FBZUEsS0FBSUgsTUFBT0UsTUFBUCxDQUFKLEVBQXFCO0FBQ3BCLFFBQU0sSUFBSUUsS0FBSixDQUFXLGdCQUFYLENBQU47QUFDQTs7QUFFRCxLQUFJSixNQUFPRyxXQUFQLENBQUosRUFBMEI7QUFDekIsUUFBTSxJQUFJQyxLQUFKLENBQVcscUJBQVgsQ0FBTjtBQUNBOztBQUVELG9DQUE0QkYsTUFBNUIsRUFBcUNHLE9BQXJDLENBQThDLFNBQVNDLGNBQVQsQ0FBeUJDLFFBQXpCLEVBQW1DO0FBQ2hGVCxNQUFLUyxRQUFMLEVBQWVMLE9BQVFLLFFBQVIsQ0FBZixFQUFtQ0osV0FBbkM7QUFDQSxFQUZEOztBQUlBLFFBQU9BLFdBQVA7QUFDQSxDQTdCRDs7QUErQkFLLE9BQU9DLE9BQVAsR0FBaUJSLFNBQWpCIiwiZmlsZSI6InRyYW5zcGhlci5qcyIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG4vKjtcblx0QG1vZHVsZS1saWNlbnNlOlxuXHRcdFRoZSBNSVQgTGljZW5zZSAoTUlUKVxuXHRcdEBtaXQtbGljZW5zZVxuXG5cdFx0Q29weXJpZ2h0IChAYykgMjAxNyBSaWNoZXZlIFNpb2RpbmEgQmViZWRvclxuXHRcdEBlbWFpbDogcmljaGV2ZS5iZWJlZG9yQGdtYWlsLmNvbVxuXG5cdFx0UGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuXHRcdG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcblx0XHRpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG5cdFx0dG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuXHRcdGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuXHRcdGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG5cblx0XHRUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpbiBhbGxcblx0XHRjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuXG5cdFx0VEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuXHRcdElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuXHRcdEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuXHRcdEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcblx0XHRMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuXHRcdE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU4gVEhFXG5cdFx0U09GVFdBUkUuXG5cdEBlbmQtbW9kdWxlLWxpY2Vuc2VcblxuXHRAbW9kdWxlLWNvbmZpZ3VyYXRpb246XG5cdFx0e1xuXHRcdFx0XCJwYWNrYWdlXCI6IFwidHJhbnNwaGVyXCIsXG5cdFx0XHRcInBhdGhcIjogXCJ0cmFuc3BoZXIvdHJhbnNwaGVyLmpzXCIsXG5cdFx0XHRcImZpbGVcIjogXCJ0cmFuc3BoZXIuanNcIixcblx0XHRcdFwibW9kdWxlXCI6IFwidHJhbnNwaGVyXCIsXG5cdFx0XHRcImF1dGhvclwiOiBcIlJpY2hldmUgUy4gQmViZWRvclwiLFxuXHRcdFx0XCJlTWFpbFwiOiBcInJpY2hldmUuYmViZWRvckBnbWFpbC5jb21cIixcblx0XHRcdFwicmVwb3NpdG9yeVwiOiBcImh0dHBzOi8vZ2l0aHViLmNvbS92b2xrb3Zhc3lzdGVtcy90cmFuc3BoZXIuZ2l0XCIsXG5cdFx0XHRcInRlc3RcIjogXCJ0cmFuc3BoZXItdGVzdC5qc1wiLFxuXHRcdFx0XCJnbG9iYWxcIjogdHJ1ZVxuXHRcdH1cblx0QGVuZC1tb2R1bGUtY29uZmlndXJhdGlvblxuXG5cdEBtb2R1bGUtZG9jdW1lbnRhdGlvbjpcblx0XHRUcmFuc2ZlciBhbGwgcHJvcGVydGllcy5cblx0QGVuZC1tb2R1bGUtZG9jdW1lbnRhdGlvblxuXG5cdEBpbmNsdWRlOlxuXHRcdHtcblx0XHRcdFwiYXRlXCI6IFwiYXRlXCIsXG5cdFx0XHRcImZhbHp5XCI6IFwiZmFsenlcIlxuXHRcdH1cblx0QGVuZC1pbmNsdWRlXG4qL1xuXG5jb25zdCBhdGUgPSByZXF1aXJlKCBcImF0ZVwiICk7XG5jb25zdCBmYWx6eSA9IHJlcXVpcmUoIFwiZmFsenlcIiApO1xuXG5jb25zdCB0cmFuc3BoZXIgPSBmdW5jdGlvbiB0cmFuc3BoZXIoIHNvdXJjZSwgZGVzdGluYXRpb24gKXtcblx0Lyo7XG5cdFx0QG1ldGEtY29uZmlndXJhdGlvbjpcblx0XHRcdHtcblx0XHRcdFx0XCJzb3VyY2U6cmVxdWlyZWRcIjogW1xuXHRcdFx0XHRcdFwiZnVuY3Rpb25cIixcblx0XHRcdFx0XHRcIm9iamVjdFwiXG5cdFx0XHRcdF0sXG5cdFx0XHRcdFwiZGVzdGluYXRpb246cmVxdWlyZWRcIjogW1xuXHRcdFx0XHRcdFwiZnVuY3Rpb25cIixcblx0XHRcdFx0XHRcIm9iamVjdFwiXG5cdFx0XHRcdF1cblx0XHRcdH1cblx0XHRAZW5kLW1ldGEtY29uZmlndXJhdGlvblxuXHQqL1xuXG5cdGlmKCBmYWx6eSggc291cmNlICkgKXtcblx0XHR0aHJvdyBuZXcgRXJyb3IoIFwiaW52YWxpZCBzb3VyY2VcIiApO1xuXHR9XG5cblx0aWYoIGZhbHp5KCBkZXN0aW5hdGlvbiApICl7XG5cdFx0dGhyb3cgbmV3IEVycm9yKCBcImludmFsaWQgZGVzdGluYXRpb25cIiApO1xuXHR9XG5cblx0T2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMoIHNvdXJjZSApLmZvckVhY2goIGZ1bmN0aW9uIG9uRWFjaFByb3BlcnR5KCBwcm9wZXJ0eSApe1xuXHRcdGF0ZSggcHJvcGVydHksIHNvdXJjZVsgcHJvcGVydHkgXSwgZGVzdGluYXRpb24gKTtcblx0fSApO1xuXG5cdHJldHVybiBkZXN0aW5hdGlvbjtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gdHJhbnNwaGVyO1xuIl19
