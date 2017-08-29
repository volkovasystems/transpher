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
              			"contributors": [
              				"John Lenon Maghanoy <johnlenonmaghanoy@gmail.com>",
              				"Vinse Vinalon <vinsevinalon@gmail.com>"
              			],
              			"repository": "https://github.com/volkovasystems/transpher.git",
              			"test": "transpher-test.js",
              			"global": true
              		}
              	@end-module-configuration
              
              	@module-documentation:
              		Transfer all properties.
              
              		This will transpher all number and string own properties.
              
              		If disregard is true, it will disregard properties of target with values already.
              	@end-module-documentation
              
              	@include:
              		{
              			"coprop": "coprop",
              			"falzy": "falzy",
              			"kein": "kein",
              			"wichevr": "wichevr"
              		}
              	@end-include
              */var _getOwnPropertyNames = require("babel-runtime/core-js/object/get-own-property-names");var _getOwnPropertyNames2 = _interopRequireDefault(_getOwnPropertyNames);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}

var coprop = require("coprop");
var falzy = require("falzy");
var kein = require("kein");
var wichevr = require("wichevr");

var transpher = function transpher(source, target, disregard) {
	/*;
                                                               	@meta-configuration:
                                                               		{
                                                               			"source:required": [
                                                               				"function",
                                                               				"object"
                                                               			],
                                                               			"target:required": [
                                                               				"function",
                                                               				"object"
                                                               			],
                                                               			"disregard": "boolean"
                                                               		}
                                                               	@end-meta-configuration
                                                               */

	if (falzy(source)) {
		throw new Error("invalid source");
	}

	if (falzy(target)) {
		throw new Error("invalid target");
	}

	disregard = wichevr(disregard, false);

	(0, _getOwnPropertyNames2.default)(source).
	forEach(function onEachProperty(property) {
		if (!disregard) {
			coprop(property, source, target);

		} else if (!kein(property, target)) {
			coprop(property, source, target);
		}
	});

	return target;
};

module.exports = transpher;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRyYW5zcGhlci5zdXBwb3J0LmpzIl0sIm5hbWVzIjpbImNvcHJvcCIsInJlcXVpcmUiLCJmYWx6eSIsImtlaW4iLCJ3aWNoZXZyIiwidHJhbnNwaGVyIiwic291cmNlIiwidGFyZ2V0IiwiZGlzcmVnYXJkIiwiRXJyb3IiLCJmb3JFYWNoIiwib25FYWNoUHJvcGVydHkiLCJwcm9wZXJ0eSIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQThEQSxJQUFNQSxTQUFTQyxRQUFTLFFBQVQsQ0FBZjtBQUNBLElBQU1DLFFBQVFELFFBQVMsT0FBVCxDQUFkO0FBQ0EsSUFBTUUsT0FBT0YsUUFBUyxNQUFULENBQWI7QUFDQSxJQUFNRyxVQUFVSCxRQUFTLFNBQVQsQ0FBaEI7O0FBRUEsSUFBTUksWUFBWSxTQUFTQSxTQUFULENBQW9CQyxNQUFwQixFQUE0QkMsTUFBNUIsRUFBb0NDLFNBQXBDLEVBQStDO0FBQ2hFOzs7Ozs7Ozs7Ozs7Ozs7O0FBZ0JBLEtBQUlOLE1BQU9JLE1BQVAsQ0FBSixFQUFxQjtBQUNwQixRQUFNLElBQUlHLEtBQUosQ0FBVyxnQkFBWCxDQUFOO0FBQ0E7O0FBRUQsS0FBSVAsTUFBT0ssTUFBUCxDQUFKLEVBQXFCO0FBQ3BCLFFBQU0sSUFBSUUsS0FBSixDQUFXLGdCQUFYLENBQU47QUFDQTs7QUFFREQsYUFBWUosUUFBU0ksU0FBVCxFQUFvQixLQUFwQixDQUFaOztBQUVBLG9DQUE0QkYsTUFBNUI7QUFDRUksUUFERixDQUNXLFNBQVNDLGNBQVQsQ0FBeUJDLFFBQXpCLEVBQW1DO0FBQzVDLE1BQUksQ0FBQ0osU0FBTCxFQUFnQjtBQUNmUixVQUFRWSxRQUFSLEVBQWtCTixNQUFsQixFQUEwQkMsTUFBMUI7O0FBRUEsR0FIRCxNQUdNLElBQUksQ0FBQ0osS0FBTVMsUUFBTixFQUFnQkwsTUFBaEIsQ0FBTCxFQUErQjtBQUNwQ1AsVUFBUVksUUFBUixFQUFrQk4sTUFBbEIsRUFBMEJDLE1BQTFCO0FBQ0E7QUFDRCxFQVJGOztBQVVBLFFBQU9BLE1BQVA7QUFDQSxDQXRDRDs7QUF3Q0FNLE9BQU9DLE9BQVAsR0FBaUJULFNBQWpCIiwiZmlsZSI6InRyYW5zcGhlci5zdXBwb3J0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XHJcblxyXG4vKjtcclxuXHRAbW9kdWxlLWxpY2Vuc2U6XHJcblx0XHRUaGUgTUlUIExpY2Vuc2UgKE1JVClcclxuXHRcdEBtaXQtbGljZW5zZVxyXG5cclxuXHRcdENvcHlyaWdodCAoQGMpIDIwMTcgUmljaGV2ZSBTaW9kaW5hIEJlYmVkb3JcclxuXHRcdEBlbWFpbDogcmljaGV2ZS5iZWJlZG9yQGdtYWlsLmNvbVxyXG5cclxuXHRcdFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcclxuXHRcdG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcclxuXHRcdGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcclxuXHRcdHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcclxuXHRcdGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xyXG5cdFx0ZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcclxuXHJcblx0XHRUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpbiBhbGxcclxuXHRcdGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXHJcblxyXG5cdFx0VEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxyXG5cdFx0SU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXHJcblx0XHRGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcclxuXHRcdEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcclxuXHRcdExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXHJcblx0XHRPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOIFRIRVxyXG5cdFx0U09GVFdBUkUuXHJcblx0QGVuZC1tb2R1bGUtbGljZW5zZVxyXG5cclxuXHRAbW9kdWxlLWNvbmZpZ3VyYXRpb246XHJcblx0XHR7XHJcblx0XHRcdFwicGFja2FnZVwiOiBcInRyYW5zcGhlclwiLFxyXG5cdFx0XHRcInBhdGhcIjogXCJ0cmFuc3BoZXIvdHJhbnNwaGVyLmpzXCIsXHJcblx0XHRcdFwiZmlsZVwiOiBcInRyYW5zcGhlci5qc1wiLFxyXG5cdFx0XHRcIm1vZHVsZVwiOiBcInRyYW5zcGhlclwiLFxyXG5cdFx0XHRcImF1dGhvclwiOiBcIlJpY2hldmUgUy4gQmViZWRvclwiLFxyXG5cdFx0XHRcImNvbnRyaWJ1dG9yc1wiOiBbXHJcblx0XHRcdFx0XCJKb2huIExlbm9uIE1hZ2hhbm95IDxqb2hubGVub25tYWdoYW5veUBnbWFpbC5jb20+XCJcclxuXHRcdFx0XSxcclxuXHRcdFx0XCJlTWFpbFwiOiBcInJpY2hldmUuYmViZWRvckBnbWFpbC5jb21cIixcclxuXHRcdFx0XCJyZXBvc2l0b3J5XCI6IFwiaHR0cHM6Ly9naXRodWIuY29tL3ZvbGtvdmFzeXN0ZW1zL3RyYW5zcGhlci5naXRcIixcclxuXHRcdFx0XCJ0ZXN0XCI6IFwidHJhbnNwaGVyLXRlc3QuanNcIixcclxuXHRcdFx0XCJnbG9iYWxcIjogdHJ1ZVxyXG5cdFx0fVxyXG5cdEBlbmQtbW9kdWxlLWNvbmZpZ3VyYXRpb25cclxuXHJcblx0QG1vZHVsZS1kb2N1bWVudGF0aW9uOlxyXG5cdFx0VHJhbnNmZXIgYWxsIHByb3BlcnRpZXMuXHJcblxyXG5cdFx0VGhpcyB3aWxsIHRyYW5zcGhlciBhbGwgbnVtYmVyIGFuZCBzdHJpbmcgb3duIHByb3BlcnRpZXMuXHJcblxyXG5cdFx0SWYgZGlzcmVnYXJkIGlzIHRydWUsIGl0IHdpbGwgZGlzcmVnYXJkIHByb3BlcnRpZXMgb2YgdGFyZ2V0IHdpdGggdmFsdWVzIGFscmVhZHkuXHJcblx0QGVuZC1tb2R1bGUtZG9jdW1lbnRhdGlvblxyXG5cclxuXHRAaW5jbHVkZTpcclxuXHRcdHtcclxuXHRcdFx0XCJjb3Byb3BcIjogXCJjb3Byb3BcIixcclxuXHRcdFx0XCJmYWx6eVwiOiBcImZhbHp5XCIsXHJcblx0XHRcdFwia2VpblwiOiBcImtlaW5cIixcclxuXHRcdFx0XCJ3aWNoZXZyXCI6IFwid2ljaGV2clwiXHJcblx0XHR9XHJcblx0QGVuZC1pbmNsdWRlXHJcbiovXHJcblxyXG5jb25zdCBjb3Byb3AgPSByZXF1aXJlKCBcImNvcHJvcFwiICk7XHJcbmNvbnN0IGZhbHp5ID0gcmVxdWlyZSggXCJmYWx6eVwiICk7XHJcbmNvbnN0IGtlaW4gPSByZXF1aXJlKCBcImtlaW5cIiApO1xyXG5jb25zdCB3aWNoZXZyID0gcmVxdWlyZSggXCJ3aWNoZXZyXCIgKTtcclxuXHJcbmNvbnN0IHRyYW5zcGhlciA9IGZ1bmN0aW9uIHRyYW5zcGhlciggc291cmNlLCB0YXJnZXQsIGRpc3JlZ2FyZCApe1xyXG5cdC8qO1xyXG5cdFx0QG1ldGEtY29uZmlndXJhdGlvbjpcclxuXHRcdFx0e1xyXG5cdFx0XHRcdFwic291cmNlOnJlcXVpcmVkXCI6IFtcclxuXHRcdFx0XHRcdFwiZnVuY3Rpb25cIixcclxuXHRcdFx0XHRcdFwib2JqZWN0XCJcclxuXHRcdFx0XHRdLFxyXG5cdFx0XHRcdFwidGFyZ2V0OnJlcXVpcmVkXCI6IFtcclxuXHRcdFx0XHRcdFwiZnVuY3Rpb25cIixcclxuXHRcdFx0XHRcdFwib2JqZWN0XCJcclxuXHRcdFx0XHRdLFxyXG5cdFx0XHRcdFwiZGlzcmVnYXJkXCI6IFwiYm9vbGVhblwiXHJcblx0XHRcdH1cclxuXHRcdEBlbmQtbWV0YS1jb25maWd1cmF0aW9uXHJcblx0Ki9cclxuXHJcblx0aWYoIGZhbHp5KCBzb3VyY2UgKSApe1xyXG5cdFx0dGhyb3cgbmV3IEVycm9yKCBcImludmFsaWQgc291cmNlXCIgKTtcclxuXHR9XHJcblxyXG5cdGlmKCBmYWx6eSggdGFyZ2V0ICkgKXtcclxuXHRcdHRocm93IG5ldyBFcnJvciggXCJpbnZhbGlkIHRhcmdldFwiICk7XHJcblx0fVxyXG5cclxuXHRkaXNyZWdhcmQgPSB3aWNoZXZyKCBkaXNyZWdhcmQsIGZhbHNlICk7XHJcblxyXG5cdE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKCBzb3VyY2UgKVxyXG5cdFx0LmZvckVhY2goIGZ1bmN0aW9uIG9uRWFjaFByb3BlcnR5KCBwcm9wZXJ0eSApe1xyXG5cdFx0XHRpZiggIWRpc3JlZ2FyZCApe1xyXG5cdFx0XHRcdGNvcHJvcCggcHJvcGVydHksIHNvdXJjZSwgdGFyZ2V0ICk7XHJcblxyXG5cdFx0XHR9ZWxzZSBpZiggIWtlaW4oIHByb3BlcnR5LCB0YXJnZXQgKSApe1xyXG5cdFx0XHRcdGNvcHJvcCggcHJvcGVydHksIHNvdXJjZSwgdGFyZ2V0ICk7XHJcblx0XHRcdH1cclxuXHRcdH0gKTtcclxuXHJcblx0cmV0dXJuIHRhcmdldDtcclxufTtcclxuXHJcbm1vZHVsZS5leHBvcnRzID0gdHJhbnNwaGVyO1xyXG4iXX0=
//# sourceMappingURL=transpher.support.js.map
