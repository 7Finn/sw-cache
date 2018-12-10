/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/server/index.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/server/index.ts":
/*!*****************************!*\
  !*** ./src/server/index.ts ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var html_parser_1 = __webpack_require__(/*! ./plugins/html-parser */ "./src/server/plugins/html-parser/index.ts");
module.exports = html_parser_1.default;


/***/ }),

/***/ "./src/server/plugins/html-parser/Node/DomNode.ts":
/*!********************************************************!*\
  !*** ./src/server/plugins/html-parser/Node/DomNode.ts ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var DomNode = (function () {
    function DomNode(tag, type, attrs, parent) {
        if (attrs === void 0) { attrs = []; }
        if (parent === void 0) { parent = null; }
        this.children = [];
        this.tag = tag;
        this.type = type;
        this.attrs = attrs;
        this.parent = parent;
    }
    DomNode.prototype.setParent = function (parent) {
        this.parent = parent;
    };
    DomNode.prototype.getParent = function () {
        return this.parent;
    };
    DomNode.prototype.setAttrs = function (attrs) {
        this.attrs = attrs;
    };
    DomNode.prototype.getAttrs = function () {
        return this.attrs;
    };
    DomNode.prototype.appendChild = function (child) {
        this.children.push(child);
    };
    DomNode.prototype.getChildren = function () {
        return this.children;
    };
    DomNode.prototype.format = function () {
        return {
            tag: this.tag,
            type: this.type,
            attrs: this.attrs,
            children: this.children.map(function (item) {
                return item.format();
            })
        };
    };
    return DomNode;
}());
exports.default = DomNode;


/***/ }),

/***/ "./src/server/plugins/html-parser/Node/Node.ts":
/*!*****************************************************!*\
  !*** ./src/server/plugins/html-parser/Node/Node.ts ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var DomType;
(function (DomType) {
    DomType[DomType["Tag"] = 1] = "Tag";
    DomType[DomType["Code"] = 2] = "Code";
    DomType[DomType["Text"] = 3] = "Text";
    DomType[DomType["Root"] = 4] = "Root";
})(DomType = exports.DomType || (exports.DomType = {}));


/***/ }),

/***/ "./src/server/plugins/html-parser/Node/TextNode.ts":
/*!*********************************************************!*\
  !*** ./src/server/plugins/html-parser/Node/TextNode.ts ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Node_1 = __webpack_require__(/*! ./Node */ "./src/server/plugins/html-parser/Node/Node.ts");
var TextNode = (function () {
    function TextNode(text) {
        this.tag = 'text';
        this.type = Node_1.DomType.Text;
        this.text = text;
    }
    TextNode.prototype.setText = function (text) {
        this.text = text;
    };
    TextNode.prototype.getText = function () {
        return this.text;
    };
    TextNode.prototype.format = function () {
        return {
            tag: this.tag,
            type: this.type,
            text: this.text
        };
    };
    return TextNode;
}());
exports.default = TextNode;


/***/ }),

/***/ "./src/server/plugins/html-parser/Node/index.ts":
/*!******************************************************!*\
  !*** ./src/server/plugins/html-parser/Node/index.ts ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var DomNode_1 = __webpack_require__(/*! ./DomNode */ "./src/server/plugins/html-parser/Node/DomNode.ts");
exports.DomNode = DomNode_1.default;
var TextNode_1 = __webpack_require__(/*! ./TextNode */ "./src/server/plugins/html-parser/Node/TextNode.ts");
exports.TextNode = TextNode_1.default;
var Node_1 = __webpack_require__(/*! ./Node */ "./src/server/plugins/html-parser/Node/Node.ts");
exports.DomType = Node_1.DomType;


/***/ }),

/***/ "./src/server/plugins/html-parser/index.ts":
/*!*************************************************!*\
  !*** ./src/server/plugins/html-parser/index.ts ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var singleAttrIdentifier = /([^\s"'<>/=]+)/;
var singleAttrAssign = /(?:=)/;
var singleAttrValues = [
    /"([^"]*)"+/.source,
    /'([^']*)'+/.source,
    /([^\s"'=<>`]+)/.source
];
var attribute = new RegExp('^\\s*' + singleAttrIdentifier.source +
    '(?:\\s*(' + singleAttrAssign.source + ')' +
    '\\s*(?:' + singleAttrValues.join('|') + '))?');
var ncname = '[a-zA-Z_][\\w\\-\\.]*';
var qnameCapture = '((?:' + ncname + '\\:)?' + ncname + ')';
var startTagOpen = new RegExp('^<' + qnameCapture);
var startTagClose = /^\s*(\/?)>/;
var endTag = new RegExp('^<\\/' + qnameCapture + '[^>]*>');
var doctype = /^<!DOCTYPE [^>]+>/i;
var comment = /^<!--/;
var conditionalComment = /^<!\[/;
var index_1 = __webpack_require__(/*! ./Node/index */ "./src/server/plugins/html-parser/Node/index.ts");
var HtmlParser = (function () {
    function HtmlParser(html) {
        this.index = 0;
        this.stack = [];
        console.log(html);
        this.html = html;
        this.root = new index_1.DomNode('root', index_1.DomType.Root);
        this.currentParent = this.root;
    }
    HtmlParser.prototype.buildDomNode = function (tag, type, attrs, unary) {
        if (attrs === void 0) { attrs = []; }
        if (unary === void 0) { unary = false; }
        var node = new index_1.DomNode(tag, type, attrs);
        if (!unary) {
            switch (type) {
                case index_1.DomType.Tag:
                    this.currentParent.appendChild(node);
                    node.setParent(this.currentParent);
                    this.currentParent = node;
                    break;
            }
            this.stack.push(node);
        }
        else {
            var pos = void 0;
            for (pos = this.stack.length - 1; pos >= 0; pos--) {
                if (this.stack[pos].tag === node.tag)
                    break;
            }
            if (pos >= 0) {
                this.currentParent = this.stack[pos].getParent() || this.root;
                this.stack.length = pos;
            }
            else if (tag.toLowerCase() === 'br') {
                this.currentParent.appendChild(node);
            }
        }
    };
    HtmlParser.prototype.buildTextNode = function (text) {
        this.currentParent.appendChild(new index_1.TextNode(text));
    };
    HtmlParser.prototype.parseHtml = function () {
        this.matchStartTag();
        while (true) {
            this.matchText();
            if (this.matchComment())
                continue;
            if (this.matchDoctype())
                continue;
            this.matchEndTag();
            this.matchStartTag();
            if (this.eof())
                break;
        }
        console.log(this.root.getChildren());
    };
    HtmlParser.prototype.advance = function (n) {
        this.index += n;
        this.html = this.html.substring(n);
    };
    HtmlParser.prototype.matchText = function () {
        var index = this.html.indexOf('<');
        if (index < 0) {
            this.html = '';
        }
        else if (index > 0) {
            this.buildTextNode(this.html.substring(0, index));
            this.advance(index);
        }
    };
    HtmlParser.prototype.matchDoctype = function () {
        var match = this.html.match(doctype);
        if (match) {
            this.advance(match[0].length);
            return true;
        }
        else {
            return false;
        }
    };
    HtmlParser.prototype.matchComment = function () {
        if (comment.test(this.html)) {
            var commentEnd = this.html.indexOf('-->');
            if (commentEnd >= 0) {
                this.advance(commentEnd + 3);
                return true;
            }
        }
        return false;
    };
    HtmlParser.prototype.matchStartTag = function () {
        return this.matchStartTagOpen() && this.matchStartTagClose();
    };
    HtmlParser.prototype.matchStartTagOpen = function () {
        var match = null;
        if (match = this.html.match(startTagOpen)) {
            this.advance(match[0].length);
            this.buildDomNode(match[1], index_1.DomType.Tag, [], false);
            return true;
        }
        return false;
    };
    HtmlParser.prototype.matchStartTagClose = function () {
        var closeMatch = null;
        var attrMatch = null;
        while (!(closeMatch = this.html.match(startTagClose)) && (attrMatch = this.html.match(attribute))) {
            this.advance(attrMatch[0].length);
        }
        if (closeMatch) {
            this.advance(closeMatch[0].length);
            return true;
        }
        else {
            return false;
        }
    };
    HtmlParser.prototype.matchEndTag = function () {
        var match = this.html.match(endTag);
        if (match) {
            this.advance(match[0].length);
            this.buildDomNode(match[1], index_1.DomType.Tag, [], true);
        }
    };
    HtmlParser.prototype.eof = function () {
        if (this.html === '')
            return true;
        return false;
    };
    HtmlParser.prototype.format = function () {
        return this.root.format();
    };
    return HtmlParser;
}());
exports.default = HtmlParser;
var parser = new HtmlParser("\n    <div><a>123</a></div>\n");
parser.parseHtml();
console.log(JSON.stringify(parser.format()));


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NlcnZlci9pbmRleC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc2VydmVyL3BsdWdpbnMvaHRtbC1wYXJzZXIvTm9kZS9Eb21Ob2RlLnRzIiwid2VicGFjazovLy8uL3NyYy9zZXJ2ZXIvcGx1Z2lucy9odG1sLXBhcnNlci9Ob2RlL05vZGUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NlcnZlci9wbHVnaW5zL2h0bWwtcGFyc2VyL05vZGUvVGV4dE5vZGUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NlcnZlci9wbHVnaW5zL2h0bWwtcGFyc2VyL05vZGUvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NlcnZlci9wbHVnaW5zL2h0bWwtcGFyc2VyL2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGtEQUEwQyxnQ0FBZ0M7QUFDMUU7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxnRUFBd0Qsa0JBQWtCO0FBQzFFO0FBQ0EseURBQWlELGNBQWM7QUFDL0Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlEQUF5QyxpQ0FBaUM7QUFDMUUsd0hBQWdILG1CQUFtQixFQUFFO0FBQ3JJO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFBK0Q7O0FBRXJIO0FBQ0E7OztBQUdBO0FBQ0E7Ozs7Ozs7Ozs7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LENBQUM7SUFDakIsQ0FBQztJQUVELDJCQUFNLEdBQU47UUFDSSxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUM7SUFDOUIsQ0FBQztJQUNMLGlCQUFDO0FBQUQsQ0FBQzs7QUFFRCxJQUFJLE1BQU0sR0FBRyxJQUFJLFVBQVUsQ0FBQywrQkFFM0IsQ0FBQztBQUVGLE1BQU0sQ0FBQyxTQUFTLEVBQUU7QUFDbEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxNQUFNLEVBQUUsQ0FBQyxDQUFDLENBQUMiLCJmaWxlIjoic2VydmVyLmJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL3NlcnZlci9pbmRleC50c1wiKTtcbiIsImltcG9ydCBIVE1MUGFyc2VyIGZyb20gJy4vcGx1Z2lucy9odG1sLXBhcnNlcidcclxuXHJcbm1vZHVsZS5leHBvcnRzID0gSFRNTFBhcnNlcjsiLCJpbXBvcnQgSU5vZGUsIHsgRG9tVHlwZSB9IGZyb20gJy4vTm9kZSc7XHJcbmltcG9ydCBUZXh0Tm9kZSBmcm9tICcuL1RleHROb2RlJ1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRG9tTm9kZSBpbXBsZW1lbnRzIElOb2RlIHtcclxuICAgIHRhZzogc3RyaW5nO1xyXG4gICAgdHlwZTogRG9tVHlwZTtcclxuICAgIGF0dHJzOiBBcnJheTxzdHJpbmc+O1xyXG4gICAgcGFyZW50OiBEb21Ob2RlIHwgbnVsbDtcclxuICAgIGNoaWxkcmVuOiBBcnJheTxEb21Ob2RlIHwgVGV4dE5vZGU+ID0gW107XHJcblxyXG4gICAgY29uc3RydWN0b3IoXHJcbiAgICAgICAgdGFnOiBzdHJpbmcsXHJcbiAgICAgICAgdHlwZTogRG9tVHlwZSxcclxuICAgICAgICBhdHRyczogQXJyYXk8c3RyaW5nPiA9IFtdLFxyXG4gICAgICAgIHBhcmVudDogRG9tTm9kZSB8IG51bGwgPSBudWxsLFxyXG4gICAgKSB7XHJcbiAgICAgICAgdGhpcy50YWcgPSB0YWc7XHJcbiAgICAgICAgdGhpcy50eXBlID0gdHlwZTtcclxuICAgICAgICB0aGlzLmF0dHJzID0gYXR0cnM7XHJcbiAgICAgICAgdGhpcy5wYXJlbnQgPSBwYXJlbnQ7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0UGFyZW50KHBhcmVudDogRG9tTm9kZSkge1xyXG4gICAgICAgIHRoaXMucGFyZW50ID0gcGFyZW50O1xyXG4gICAgfVxyXG5cclxuICAgIGdldFBhcmVudCgpOiBEb21Ob2RlIHwgbnVsbCB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMucGFyZW50O1xyXG4gICAgfVxyXG5cclxuICAgIHNldEF0dHJzKGF0dHJzOiBBcnJheTxzdHJpbmc+KSB7XHJcbiAgICAgICAgdGhpcy5hdHRycyA9IGF0dHJzO1xyXG4gICAgfVxyXG5cclxuICAgIGdldEF0dHJzKCk6IEFycmF5PHN0cmluZz4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmF0dHJzO1xyXG4gICAgfVxyXG5cclxuICAgIGFwcGVuZENoaWxkKGNoaWxkOiBEb21Ob2RlIHwgVGV4dE5vZGUpIHtcclxuICAgICAgICB0aGlzLmNoaWxkcmVuLnB1c2goY2hpbGQpO1xyXG4gICAgfVxyXG5cclxuICAgIGdldENoaWxkcmVuKCk6IEFycmF5PERvbU5vZGUgfCBUZXh0Tm9kZT4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmNoaWxkcmVuO1xyXG4gICAgfVxyXG5cclxuICAgIGZvcm1hdCgpOiBhbnkge1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIHRhZzogdGhpcy50YWcsXHJcbiAgICAgICAgICAgIHR5cGU6IHRoaXMudHlwZSxcclxuICAgICAgICAgICAgYXR0cnM6IHRoaXMuYXR0cnMsXHJcbiAgICAgICAgICAgIGNoaWxkcmVuOiB0aGlzLmNoaWxkcmVuLm1hcChpdGVtID0+IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBpdGVtLmZvcm1hdCgpXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiIsImltcG9ydCB7IGZvcm1hdCB9IGZyb20gXCJ1dGlsXCI7XHJcblxyXG5leHBvcnQgZW51bSBEb21UeXBlIHtcclxuICAgIFRhZyA9IDEsXHJcbiAgICBDb2RlID0gMixcclxuICAgIFRleHQgPSAzLFxyXG4gICAgUm9vdCA9IDRcclxufVxyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGludGVyZmFjZSBJTm9kZSB7XHJcbiAgICB0YWc6IHN0cmluZztcclxuICAgIHR5cGU6IERvbVR5cGU7XHJcbiAgICBmb3JtYXQ6IEZ1bmN0aW9uO1xyXG59IiwiaW1wb3J0IElOb2RlLCB7IERvbVR5cGUgfSBmcm9tICcuL05vZGUnXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUZXh0Tm9kZSBpbXBsZW1lbnRzIElOb2RlIHtcclxuICAgIHRhZzogc3RyaW5nID0gJ3RleHQnO1xyXG4gICAgdHlwZTogRG9tVHlwZSA9IERvbVR5cGUuVGV4dDtcclxuICAgIHRleHQ6IHN0cmluZztcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcih0ZXh0OiBzdHJpbmcpIHtcclxuICAgICAgICB0aGlzLnRleHQgPSB0ZXh0O1xyXG4gICAgfVxyXG5cclxuICAgIHNldFRleHQodGV4dDogc3RyaW5nKSB7XHJcbiAgICAgICAgdGhpcy50ZXh0ID0gdGV4dDtcclxuICAgIH1cclxuXHJcbiAgICBnZXRUZXh0KCk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMudGV4dDtcclxuICAgIH1cclxuXHJcbiAgICBmb3JtYXQoKTogYW55IHtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICB0YWc6IHRoaXMudGFnLFxyXG4gICAgICAgICAgICB0eXBlOiB0aGlzLnR5cGUsXHJcbiAgICAgICAgICAgIHRleHQ6IHRoaXMudGV4dFxyXG4gICAgICAgIH1cclxuICAgIH1cclxufSIsImltcG9ydCBEb21Ob2RlIGZyb20gJy4vRG9tTm9kZSdcclxuaW1wb3J0IFRleHROb2RlIGZyb20gJy4vVGV4dE5vZGUnXHJcbmltcG9ydCB7IERvbVR5cGUgfSBmcm9tICcuL05vZGUnXHJcblxyXG5leHBvcnQge1xyXG4gICAgRG9tTm9kZSxcclxuICAgIFRleHROb2RlLFxyXG4gICAgRG9tVHlwZVxyXG59IiwiY29uc3Qgc2luZ2xlQXR0cklkZW50aWZpZXIgPSAvKFteXFxzXCInPD4vPV0rKS87XHJcbmNvbnN0IHNpbmdsZUF0dHJBc3NpZ24gPSAvKD86PSkvO1xyXG5jb25zdCBzaW5nbGVBdHRyVmFsdWVzID0gW1xyXG4gICAgLy8gYXR0ciB2YWx1ZSBkb3VibGUgcXVvdGVzXHJcbiAgICAvXCIoW15cIl0qKVwiKy8uc291cmNlLFxyXG4gICAgLy8gYXR0ciB2YWx1ZSwgc2luZ2xlIHF1b3Rlc1xyXG4gICAgLycoW14nXSopJysvLnNvdXJjZSxcclxuICAgIC8vIGF0dHIgdmFsdWUsIG5vIHF1b3Rlc1xyXG4gICAgLyhbXlxcc1wiJz08PmBdKykvLnNvdXJjZVxyXG5dO1xyXG5jb25zdCBhdHRyaWJ1dGUgPSBuZXcgUmVnRXhwKFxyXG4gICAgJ15cXFxccyonICsgc2luZ2xlQXR0cklkZW50aWZpZXIuc291cmNlICtcclxuICAgICcoPzpcXFxccyooJyArIHNpbmdsZUF0dHJBc3NpZ24uc291cmNlICsgJyknICtcclxuICAgICdcXFxccyooPzonICsgc2luZ2xlQXR0clZhbHVlcy5qb2luKCd8JykgKyAnKSk/J1xyXG4pO1xyXG5jb25zdCBuY25hbWUgPSAnW2EtekEtWl9dW1xcXFx3XFxcXC1cXFxcLl0qJztcclxuY29uc3QgcW5hbWVDYXB0dXJlID0gJygoPzonICsgbmNuYW1lICsgJ1xcXFw6KT8nICsgbmNuYW1lICsgJyknO1xyXG5jb25zdCBzdGFydFRhZ09wZW4gPSBuZXcgUmVnRXhwKCdePCcgKyBxbmFtZUNhcHR1cmUpO1xyXG5jb25zdCBzdGFydFRhZ0Nsb3NlID0gL15cXHMqKFxcLz8pPi87XHJcbmNvbnN0IGVuZFRhZyA9IG5ldyBSZWdFeHAoJ148XFxcXC8nICsgcW5hbWVDYXB0dXJlICsgJ1tePl0qPicpO1xyXG5jb25zdCBkb2N0eXBlID0gL148IURPQ1RZUEUgW14+XSs+L2k7XHJcbmNvbnN0IGNvbW1lbnQgPSAvXjwhLS0vO1xyXG5jb25zdCBjb25kaXRpb25hbENvbW1lbnQgPSAvXjwhXFxbLztcclxuXHJcblxyXG5cclxuaW1wb3J0IHsgRG9tVHlwZSwgRG9tTm9kZSwgVGV4dE5vZGUgfSBmcm9tICcuL05vZGUvaW5kZXgnXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBIdG1sUGFyc2VyIHtcclxuXHJcbiAgICBodG1sOiBzdHJpbmc7IC8vIOaooeadv1xyXG4gICAgaW5kZXg6IG51bWJlciA9IDA7IC8vIOW9k+WJjee0ouW8lVxyXG4gICAgc3RhY2s6IEFycmF5PERvbU5vZGU+ID0gW107IC8vXHJcblxyXG4gICAgcm9vdDogRG9tTm9kZTsgXHJcbiAgICBjdXJyZW50UGFyZW50OiBEb21Ob2RlO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKGh0bWw6IHN0cmluZykge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGh0bWwpXHJcbiAgICAgICAgdGhpcy5odG1sID0gaHRtbDtcclxuICAgICAgICB0aGlzLnJvb3QgPSBuZXcgRG9tTm9kZSgncm9vdCcsIERvbVR5cGUuUm9vdCk7XHJcbiAgICAgICAgdGhpcy5jdXJyZW50UGFyZW50ID0gdGhpcy5yb290O1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog5Yib5bu66IqC54K577yM5bm25o+S5YWlYXN05qCR5LitXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IHRhZyDmoIfnrb7lkI1cclxuICAgICAqIEBwYXJhbSB7RG9tVHlwZX0gdHlwZSDnsbvlnotcclxuICAgICAqIEBwYXJhbSB7QXJyYXk8c3RyaW5nPn0gYXR0cnMg5bGe5oCnXHJcbiAgICAgKiBAcGFyYW0ge2Jvb2xlYW59IHVuYXJ5IOaYr+WQpue7k+adn+agh+etvlxyXG4gICAgICogQG1lbWJlcm9mIEh0bWxQYXJzZXJcclxuICAgICAqL1xyXG4gICAgYnVpbGREb21Ob2RlKHRhZzogc3RyaW5nLCB0eXBlOiBEb21UeXBlLCBhdHRyczogQXJyYXk8c3RyaW5nPiA9IFtdLCB1bmFyeTogYm9vbGVhbiA9IGZhbHNlKSB7XHJcbiAgICAgICAgbGV0IG5vZGUgPSBuZXcgRG9tTm9kZSh0YWcsIHR5cGUsIGF0dHJzKTtcclxuICAgICAgICBcclxuICAgICAgICBpZiAoIXVuYXJ5KSB7XHJcbiAgICAgICAgICAgIC8vIOS4jeaYr+e7k+adn+agh+etvlxyXG4gICAgICAgICAgICBzd2l0Y2ggKHR5cGUpIHtcclxuICAgICAgICAgICAgICAgIGNhc2UgRG9tVHlwZS5UYWc6XHJcbiAgICAgICAgICAgICAgICAgICAgLy8g5re75Yqg6IqC54K55Yiw5b2T5YmN54i26IqC54K555qEQ2hpbGRcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmN1cnJlbnRQYXJlbnQuYXBwZW5kQ2hpbGQobm9kZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8g6K6+572u5b2T5YmN6IqC54K555qE54i26IqC54K5XHJcbiAgICAgICAgICAgICAgICAgICAgbm9kZS5zZXRQYXJlbnQodGhpcy5jdXJyZW50UGFyZW50KTtcclxuICAgICAgICAgICAgICAgICAgICAvLyDlvZPliY3nmoTniLboioLngrnliIfmjaLliLDlvZPliY3oioLngrlcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmN1cnJlbnRQYXJlbnQgPSBub2RlO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMuc3RhY2sucHVzaChub2RlKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAvLyDnu5PmnZ/moIfnrb5cclxuICAgICAgICAgICAgbGV0IHBvcztcclxuICAgICAgICAgICAgZm9yIChwb3MgPSB0aGlzLnN0YWNrLmxlbmd0aCAtIDE7IHBvcyA+PSAwOyBwb3MtLSkge1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuc3RhY2tbcG9zXS50YWcgPT09IG5vZGUudGFnKSBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAocG9zID49IDApIHtcclxuICAgICAgICAgICAgICAgIC8vIOWPluWHuuW8gOWni+agh+etvuS4reS4iuS4gOWxgueahOeItuiKgueCueW9k+WBmuW9k+WJjeiKgueCuVxyXG4gICAgICAgICAgICAgICAgdGhpcy5jdXJyZW50UGFyZW50ID0gdGhpcy5zdGFja1twb3NdLmdldFBhcmVudCgpIHx8IHRoaXMucm9vdDtcclxuICAgICAgICAgICAgICAgIC8vIOa4hemZpOWghuagiFxyXG4gICAgICAgICAgICAgICAgdGhpcy5zdGFjay5sZW5ndGggPSBwb3M7XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAodGFnLnRvTG93ZXJDYXNlKCkgPT09ICdicicpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuY3VycmVudFBhcmVudC5hcHBlbmRDaGlsZChub2RlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBidWlsZFRleHROb2RlKHRleHQ6IHN0cmluZykge1xyXG4gICAgICAgIHRoaXMuY3VycmVudFBhcmVudC5hcHBlbmRDaGlsZChuZXcgVGV4dE5vZGUodGV4dCkpO1xyXG4gICAgfVxyXG5cclxuICAgIHBhcnNlSHRtbCgpIHtcclxuICAgICAgICB0aGlzLm1hdGNoU3RhcnRUYWcoKTtcclxuXHJcblxyXG4gICAgICAgIHdoaWxlKHRydWUpIHtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIC8vIOWMuemFjeaWh+acrFxyXG4gICAgICAgICAgICB0aGlzLm1hdGNoVGV4dCgpXHJcbiAgICAgICAgICAgIC8vIOWMuemFjeazqOmHilxyXG4gICAgICAgICAgICBpZiAodGhpcy5tYXRjaENvbW1lbnQoKSkgY29udGludWU7XHJcbiAgICAgICAgICAgIC8vIOWMuemFjeaWh+aho+exu+Wei1xyXG4gICAgICAgICAgICBpZiAodGhpcy5tYXRjaERvY3R5cGUoKSkgY29udGludWU7XHJcbiAgICAgICAgICAgIC8vIOWMuemFjee7k+adn+agh+etvlxyXG4gICAgICAgICAgICB0aGlzLm1hdGNoRW5kVGFnKCk7XHJcbiAgICAgICAgICAgIC8vIOWMuemFjeW8gOWni+agh+etvlxyXG4gICAgICAgICAgICB0aGlzLm1hdGNoU3RhcnRUYWcoKTtcclxuXHJcbiAgICAgICAgICAgIC8vIOajgOafpeaYr+WQpue7k+adn1xyXG4gICAgICAgICAgICBpZiAodGhpcy5lb2YoKSkgYnJlYWs7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLnJvb3QuZ2V0Q2hpbGRyZW4oKSlcclxuICAgIH1cclxuXHJcbiAgICBhZHZhbmNlKG46IG51bWJlcik6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuaW5kZXggKz0gbjtcclxuICAgICAgICB0aGlzLmh0bWwgPSB0aGlzLmh0bWwuc3Vic3RyaW5nKG4pO1xyXG4gICAgfVxyXG5cclxuICAgIG1hdGNoVGV4dCgpIHtcclxuICAgICAgICBsZXQgaW5kZXggPSB0aGlzLmh0bWwuaW5kZXhPZignPCcpO1xyXG4gICAgICAgIGlmIChpbmRleCA8IDApIHtcclxuICAgICAgICAgICAgdGhpcy5odG1sID0gJyc7XHJcbiAgICAgICAgfSBlbHNlIGlmIChpbmRleCA+IDApIHtcclxuICAgICAgICAgICAgdGhpcy5idWlsZFRleHROb2RlKHRoaXMuaHRtbC5zdWJzdHJpbmcoMCwgaW5kZXgpKTtcclxuICAgICAgICAgICAgdGhpcy5hZHZhbmNlKGluZGV4KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgbWF0Y2hEb2N0eXBlKCk6IGJvb2xlYW4ge1xyXG4gICAgICAgIGxldCBtYXRjaCA9IHRoaXMuaHRtbC5tYXRjaChkb2N0eXBlKTtcclxuICAgICAgICBpZiAobWF0Y2gpIHtcclxuICAgICAgICAgICAgdGhpcy5hZHZhbmNlKG1hdGNoWzBdLmxlbmd0aClcclxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBtYXRjaENvbW1lbnQoKTogYm9vbGVhbiB7XHJcbiAgICAgICAgaWYgKGNvbW1lbnQudGVzdCh0aGlzLmh0bWwpKSB7XHJcbiAgICAgICAgICAgIGxldCBjb21tZW50RW5kID0gdGhpcy5odG1sLmluZGV4T2YoJy0tPicpO1xyXG5cclxuICAgICAgICAgICAgaWYgKGNvbW1lbnRFbmQgPj0gMCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5hZHZhbmNlKGNvbW1lbnRFbmQgKyAzKTtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgbWF0Y2hTdGFydFRhZygpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5tYXRjaFN0YXJ0VGFnT3BlbigpICYmIHRoaXMubWF0Y2hTdGFydFRhZ0Nsb3NlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8g5Yy56YWN5byA5aeL5qCH562+55qEIDx0YWcg6YOo5YiGXHJcbiAgICBtYXRjaFN0YXJ0VGFnT3BlbigpIHtcclxuICAgICAgICBsZXQgbWF0Y2ggPSBudWxsO1xyXG5cclxuICAgICAgICBpZiggbWF0Y2ggPSB0aGlzLmh0bWwubWF0Y2goc3RhcnRUYWdPcGVuKSApIHtcclxuICAgICAgICAgICAgdGhpcy5hZHZhbmNlKG1hdGNoWzBdLmxlbmd0aClcclxuICAgICAgICAgICAgdGhpcy5idWlsZERvbU5vZGUobWF0Y2hbMV0sIERvbVR5cGUuVGFnLCBbXSwgZmFsc2UpXHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgLy8g5Yy56YWN5byA5aeL5qCH562+55qEIGF0dHJzPiDpg6jliIZcclxuICAgIG1hdGNoU3RhcnRUYWdDbG9zZSgpIHtcclxuICAgICAgICBsZXQgY2xvc2VNYXRjaCA9IG51bGw7XHJcbiAgICAgICAgbGV0IGF0dHJNYXRjaCA9IG51bGw7IFxyXG4gICAgICAgIHdoaWxlICggIShjbG9zZU1hdGNoID0gdGhpcy5odG1sLm1hdGNoKHN0YXJ0VGFnQ2xvc2UpKSAmJiAoYXR0ck1hdGNoID0gdGhpcy5odG1sLm1hdGNoKGF0dHJpYnV0ZSkpICkge1xyXG4gICAgICAgICAgICB0aGlzLmFkdmFuY2UoYXR0ck1hdGNoWzBdLmxlbmd0aClcclxuICAgICAgICAgICAgLy8gVE9ETzog6K6w5b2VYXR0cnNcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChjbG9zZU1hdGNoKSB7XHJcbiAgICAgICAgICAgIHRoaXMuYWR2YW5jZShjbG9zZU1hdGNoWzBdLmxlbmd0aCk7XHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgbWF0Y2hFbmRUYWcoKSB7XHJcbiAgICAgICAgbGV0IG1hdGNoID0gdGhpcy5odG1sLm1hdGNoKGVuZFRhZyk7XHJcbiAgICAgICAgaWYgKG1hdGNoKSB7XHJcbiAgICAgICAgICAgIHRoaXMuYWR2YW5jZShtYXRjaFswXS5sZW5ndGgpXHJcbiAgICAgICAgICAgIHRoaXMuYnVpbGREb21Ob2RlKG1hdGNoWzFdLCBEb21UeXBlLlRhZywgW10sIHRydWUpXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGVvZigpIHtcclxuICAgICAgICBpZiAodGhpcy5odG1sID09PSAnJykgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIGZvcm1hdCgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5yb290LmZvcm1hdCgpO1xyXG4gICAgfVxyXG59XHJcblxyXG5sZXQgcGFyc2VyID0gbmV3IEh0bWxQYXJzZXIoYFxyXG4gICAgPGRpdj48YT4xMjM8L2E+PC9kaXY+XHJcbmApXHJcblxyXG5wYXJzZXIucGFyc2VIdG1sKClcclxuY29uc29sZS5sb2coSlNPTi5zdHJpbmdpZnkocGFyc2VyLmZvcm1hdCgpKSk7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=