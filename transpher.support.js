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
              
              		If disregard is true, it will disregard properties of destination with values already.
              	@end-module-documentation
              
              	@include:
              		{
              			"coprop": "coprop",
              			"falzy": "falzy",
              			"kein": "kein",
              			"wichevr": "wichevr"
              		}
              	@end-include
              */var _getOwnPropertySymbols = require("babel-runtime/core-js/object/get-own-property-symbols");var _getOwnPropertySymbols2 = _interopRequireDefault(_getOwnPropertySymbols);var _getOwnPropertyNames = require("babel-runtime/core-js/object/get-own-property-names");var _getOwnPropertyNames2 = _interopRequireDefault(_getOwnPropertyNames);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}

var coprop = require("coprop");
var falzy = require("falzy");
var kein = require("kein");
var wichevr = require("wichevr");

var transpher = function transpher(source, destination, disregard) {
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
                                                                    			],
                                                                    			"disregard": "boolean"
                                                                    		}
                                                                    	@end-meta-configuration
                                                                    */

	if (falzy(source)) {
		throw new Error("invalid source");
	}

	if (falzy(destination)) {
		throw new Error("invalid destination");
	}

	disregard = wichevr(disregard, false);

	(0, _getOwnPropertyNames2.default)(source).
	concat((0, _getOwnPropertySymbols2.default)(source)).
	forEach(function onEachProperty(property) {
		if (!disregard) {
			coprop(property, source, destination);

		} else if (!kein(property, destination)) {
			coprop(property, source, destination);
		}
	});

	return destination;
};

module.exports = transpher;

//# sourceMappingURL=transpher.support.js.map