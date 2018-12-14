(function(e, a) { for(var i in a) e[i] = a[i]; }(exports, /******/ (function(modules) { // webpackBootstrap
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
var html_parser_1 = __webpack_require__(/*! ./utils/html-parser */ "./src/server/utils/html-parser/index.ts");
module.exports.HtmlParser = html_parser_1.default;


/***/ }),

/***/ "./src/server/utils/html-parser/Node.ts":
/*!**********************************************!*\
  !*** ./src/server/utils/html-parser/Node.ts ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var NodeType;
(function (NodeType) {
    NodeType[NodeType["Tag"] = 1] = "Tag";
    NodeType[NodeType["Code"] = 2] = "Code";
    NodeType[NodeType["Text"] = 3] = "Text";
    NodeType[NodeType["Root"] = 4] = "Root";
})(NodeType = exports.NodeType || (exports.NodeType = {}));
var Node = (function () {
    function Node(tag, type, attrs, text) {
        if (attrs === void 0) { attrs = []; }
        if (text === void 0) { text = ''; }
        this.parent = null;
        this.children = [];
        this.depth = 0;
        this.text = '';
        this.tag = tag;
        this.type = type;
        this.attrs = attrs;
        this.text = text;
    }
    Node.prototype.setParent = function (parent) {
        this.parent = parent;
        this.depth = this.parent.getDepth() + 1;
    };
    Node.prototype.getParent = function () {
        return this.parent;
    };
    Node.prototype.setAttrs = function (attrs) {
        this.attrs = attrs;
    };
    Node.prototype.getAttrs = function () {
        return this.attrs;
    };
    Node.prototype.appendChild = function (child) {
        this.children.push(child);
        child.setParent(this);
    };
    Node.prototype.getChildren = function () {
        return this.children;
    };
    Node.prototype.getDepth = function () {
        return this.depth;
    };
    Node.prototype.getWidth = function () {
        return this.children.length;
    };
    Node.prototype.setText = function (text) {
        this.text = text;
    };
    Node.prototype.getText = function () {
        return this.text;
    };
    Node.prototype.format = function () {
        return {
            tag: this.tag,
            type: this.type,
            attrs: this.attrs,
            children: this.children.map(function (item) {
                return item.format();
            })
        };
    };
    return Node;
}());
exports.default = Node;


/***/ }),

/***/ "./src/server/utils/html-parser/Tree.ts":
/*!**********************************************!*\
  !*** ./src/server/utils/html-parser/Tree.ts ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Node_1 = __webpack_require__(/*! ./Node */ "./src/server/utils/html-parser/Node.ts");
var ASTree = (function () {
    function ASTree() {
        this.depth = 0;
        this.width = 0;
        this.stack = [];
        this.root = new Node_1.default('root', Node_1.NodeType.Root);
        this.current = this.root;
    }
    ASTree.prototype.buildTagNode = function (tag, attrs, unary) {
        if (attrs === void 0) { attrs = []; }
        if (unary === void 0) { unary = false; }
        var node = new Node_1.default(tag, Node_1.NodeType.Tag, attrs);
        if (!unary) {
            this.append(this.current, node);
            this.current = node;
            this.stack.push(node);
        }
        else {
            var pos = void 0;
            for (pos = this.stack.length - 1; pos >= 0; pos--) {
                if (this.stack[pos].tag === node.tag)
                    break;
            }
            if (pos >= 0) {
                var parent_1 = this.stack[pos].getParent();
                if (!parent_1)
                    throw (new Error('Parent Node is Null!'));
                this.current = parent_1;
                this.stack.length = pos;
            }
            else if (tag.toLowerCase() === 'br') {
                this.append(this.current, node);
            }
        }
    };
    ASTree.prototype.buildTextNode = function (text) {
        var node = new Node_1.default('text', Node_1.NodeType.Text, [], text);
        this.append(this.current, node);
    };
    ASTree.prototype.append = function (parent, child) {
        parent.appendChild(child);
        this.setWidth(parent.getWidth());
        this.setDepth(child.getDepth());
    };
    ASTree.prototype.getRoot = function () {
        return this.root;
    };
    ASTree.prototype.setWidth = function (width) {
        this.width = width > this.width ? width : this.width;
    };
    ASTree.prototype.getWidth = function () {
        return this.width;
    };
    ASTree.prototype.setDepth = function (depth) {
        this.depth = depth > this.depth ? depth : this.depth;
    };
    ASTree.prototype.getDepth = function () {
        return this.depth;
    };
    return ASTree;
}());
exports.default = ASTree;


/***/ }),

/***/ "./src/server/utils/html-parser/index.ts":
/*!***********************************************!*\
  !*** ./src/server/utils/html-parser/index.ts ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Tree_1 = __webpack_require__(/*! ./Tree */ "./src/server/utils/html-parser/Tree.ts");
var regexp_1 = __webpack_require__(/*! ./regexp */ "./src/server/utils/html-parser/regexp.ts");
var HtmlParser = (function () {
    function HtmlParser() {
        this.html = '';
        this.index = 0;
        this.asTree = new Tree_1.default();
    }
    HtmlParser.prototype.parseHtml = function (html) {
        this.reset();
        this.html = html;
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
            this.asTree.buildTextNode(this.html.substring(0, index));
            this.advance(index);
        }
    };
    HtmlParser.prototype.matchDoctype = function () {
        var match = this.html.match(regexp_1.default.doctype);
        if (match) {
            this.advance(match[0].length);
            return true;
        }
        else {
            return false;
        }
    };
    HtmlParser.prototype.matchComment = function () {
        if (regexp_1.default.comment.test(this.html)) {
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
        if (match = this.html.match(regexp_1.default.startTagOpen)) {
            this.advance(match[0].length);
            this.asTree.buildTagNode(match[1], [], false);
            return true;
        }
        return false;
    };
    HtmlParser.prototype.matchStartTagClose = function () {
        var closeMatch = null;
        var attrMatch = null;
        while (!(closeMatch = this.html.match(regexp_1.default.startTagClose)) && (attrMatch = this.html.match(regexp_1.default.attribute))) {
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
        var match = this.html.match(regexp_1.default.endTag);
        if (match) {
            this.advance(match[0].length);
            this.asTree.buildTagNode(match[1], [], true);
        }
    };
    HtmlParser.prototype.eof = function () {
        if (this.html === '')
            return true;
        return false;
    };
    HtmlParser.prototype.reset = function () {
        this.html = '';
        this.index = 0;
        this.asTree = new Tree_1.default();
    };
    HtmlParser.prototype.getDepth = function () {
        return this.asTree.getDepth();
    };
    return HtmlParser;
}());
exports.default = HtmlParser;


/***/ }),

/***/ "./src/server/utils/html-parser/regexp.ts":
/*!************************************************!*\
  !*** ./src/server/utils/html-parser/regexp.ts ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Regexp = (function () {
    function Regexp() {
        this.singleAttrIdentifier = /([^\s"'<>/=]+)/;
        this.singleAttrAssign = /(?:=)/;
        this.singleAttrValues = [
            /"([^"]*)"+/.source,
            /'([^']*)'+/.source,
            /([^\s"'=<>`]+)/.source
        ];
        this.attribute = new RegExp('^\\s*' + this.singleAttrIdentifier.source +
            '(?:\\s*(' + this.singleAttrAssign.source + ')' +
            '\\s*(?:' + this.singleAttrValues.join('|') + '))?');
        this.ncname = '[a-zA-Z_][\\w\\-\\.]*';
        this.qnameCapture = '((?:' + this.ncname + '\\:)?' + this.ncname + ')';
        this.startTagOpen = new RegExp('^<' + this.qnameCapture);
        this.startTagClose = /^\s*(\/?)>/;
        this.endTag = new RegExp('^<\\/' + this.qnameCapture + '[^>]*>');
        this.doctype = /^<!DOCTYPE [^>]+>/i;
        this.comment = /^<!--/;
        this.conditionalComment = /^<!\[/;
    }
    return Regexp;
}());
exports.default = new Regexp();


/***/ })

/******/ })));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NlcnZlci9pbmRleC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc2VydmVyL3V0aWxzL2h0bWwtcGFyc2VyL05vZGUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NlcnZlci91dGlscy9odG1sLXBhcnNlci9UcmVlLnRzIiwid2VicGFjazovLy8uL3NyYy9zZXJ2ZXIvdXRpbHMvaHRtbC1wYXJzZXIvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NlcnZlci91dGlscy9odG1sLXBhcnNlci9yZWdleHAudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esa0RBQTBDLGdDQUFnQztBQUMxRTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGdFQUF3RCxrQkFBa0I7QUFDMUU7QUFDQSx5REFBaUQsY0FBYztBQUMvRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaURBQXlDLGlDQUFpQztBQUMxRSx3SEFBZ0gsbUJBQW1CLEVBQUU7QUFDckk7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBMkIsMEJBQTBCLEVBQUU7QUFDdkQseUNBQWlDLGVBQWU7QUFDaEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOERBQXNELCtEQUErRDs7QUFFckg7QUFDQTs7O0FBR0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDbEZBLDhHQUE2QztBQUU3QyxNQUFNLENBQUMsT0FBTyxDQUFDLFVBQVUsR0FBRyxxQkFBVTs7Ozs7Ozs7Ozs7Ozs7O0FDRnRDLElBQVksUUFL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UUFDL0IsWUFBTyxHQUFHLE9BQU8sQ0FBQztRQUNsQix1QkFBa0IsR0FBRyxPQUFPLENBQUM7SUFDakMsQ0FBQztJQUFELGFBQUM7QUFBRCxDQUFDO0FBRUQsa0JBQWUsSUFBSSxNQUFNLEVBQUUsQ0FBQyIsImZpbGUiOiJzZXJ2ZXIuYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvc2VydmVyL2luZGV4LnRzXCIpO1xuIiwiaW1wb3J0IEh0bWxQYXJzZXIgZnJvbSAnLi91dGlscy9odG1sLXBhcnNlcic7XHJcblxyXG5tb2R1bGUuZXhwb3J0cy5IdG1sUGFyc2VyID0gSHRtbFBhcnNlciIsImV4cG9ydCBlbnVtIE5vZGVUeXBlIHtcclxuICAgIFRhZyA9IDEsXHJcbiAgICBDb2RlID0gMixcclxuICAgIFRleHQgPSAzLFxyXG4gICAgUm9vdCA9IDRcclxufVxyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE5vZGUge1xyXG4gICAgdGFnOiBzdHJpbmc7XHJcbiAgICB0eXBlOiBOb2RlVHlwZTtcclxuICAgIGF0dHJzOiBBcnJheTxzdHJpbmc+O1xyXG4gICAgcGFyZW50OiBOb2RlIHwgbnVsbCA9IG51bGw7XHJcbiAgICBjaGlsZHJlbjogQXJyYXk8Tm9kZT4gPSBbXTtcclxuICAgIGRlcHRoOiBudW1iZXIgPSAwO1xyXG4gICAgdGV4dDogc3RyaW5nID0gJyc7XHJcblxyXG4gICAgY29uc3RydWN0b3IoXHJcbiAgICAgICAgdGFnOiBzdHJpbmcsXHJcbiAgICAgICAgdHlwZTogTm9kZVR5cGUsXHJcbiAgICAgICAgYXR0cnM6IEFycmF5PHN0cmluZz4gPSBbXSxcclxuICAgICAgICB0ZXh0OiBzdHJpbmcgPSAnJ1xyXG4gICAgKSB7XHJcbiAgICAgICAgdGhpcy50YWcgPSB0YWc7XHJcbiAgICAgICAgdGhpcy50eXBlID0gdHlwZTtcclxuICAgICAgICB0aGlzLmF0dHJzID0gYXR0cnM7XHJcbiAgICAgICAgdGhpcy50ZXh0ID0gdGV4dDtcclxuICAgIH1cclxuXHJcbiAgICBzZXRQYXJlbnQocGFyZW50OiBOb2RlKSB7XHJcbiAgICAgICAgdGhpcy5wYXJlbnQgPSBwYXJlbnQ7XHJcbiAgICAgICAgdGhpcy5kZXB0aCA9IHRoaXMucGFyZW50LmdldERlcHRoKCkgKyAxO1xyXG4gICAgfVxyXG5cclxuICAgIGdldFBhcmVudCgpOiBOb2RlIHwgbnVsbCB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMucGFyZW50O1xyXG4gICAgfVxyXG5cclxuICAgIHNldEF0dHJzKGF0dHJzOiBBcnJheTxzdHJpbmc+KSB7XHJcbiAgICAgICAgdGhpcy5hdHRycyA9IGF0dHJzO1xyXG4gICAgfVxyXG5cclxuICAgIGdldEF0dHJzKCk6IEFycmF5PHN0cmluZz4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmF0dHJzO1xyXG4gICAgfVxyXG5cclxuICAgIGFwcGVuZENoaWxkKGNoaWxkOiBOb2RlKSB7XHJcbiAgICAgICAgdGhpcy5jaGlsZHJlbi5wdXNoKGNoaWxkKTtcclxuICAgICAgICBjaGlsZC5zZXRQYXJlbnQodGhpcyk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0Q2hpbGRyZW4oKTogQXJyYXk8Tm9kZT4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmNoaWxkcmVuO1xyXG4gICAgfVxyXG5cclxuICAgIGdldERlcHRoKCk6IG51bWJlciB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZGVwdGg7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0V2lkdGgoKTogbnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5jaGlsZHJlbi5sZW5ndGg7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0VGV4dCh0ZXh0OiBzdHJpbmcpIHtcclxuICAgICAgICB0aGlzLnRleHQgPSB0ZXh0O1xyXG4gICAgfVxyXG5cclxuICAgIGdldFRleHQoKTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gdGhpcy50ZXh0O1xyXG4gICAgfVxyXG5cclxuICAgIGZvcm1hdCgpOiBhbnkge1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIHRhZzogdGhpcy50YWcsXHJcbiAgICAgICAgICAgIHR5cGU6IHRoaXMudHlwZSxcclxuICAgICAgICAgICAgYXR0cnM6IHRoaXMuYXR0cnMsXHJcbiAgICAgICAgICAgIGNoaWxkcmVuOiB0aGlzLmNoaWxkcmVuLm1hcChpdGVtID0+IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBpdGVtLmZvcm1hdCgpXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59IiwiaW1wb3J0IE5vZGUsIHsgTm9kZVR5cGUgfSBmcm9tICcuL05vZGUnXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBU1RyZWUge1xyXG4gICAgcm9vdDogTm9kZTtcclxuICAgIGRlcHRoOiBudW1iZXIgPSAwO1xyXG4gICAgd2lkdGg6IG51bWJlciA9IDA7XHJcbiAgICBzdGFjazogQXJyYXk8Tm9kZT4gPSBbXTtcclxuICAgIGN1cnJlbnQ6IE5vZGU7XHJcblxyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgdGhpcy5yb290ID0gbmV3IE5vZGUoJ3Jvb3QnLCBOb2RlVHlwZS5Sb290KTtcclxuICAgICAgICB0aGlzLmN1cnJlbnQgPSB0aGlzLnJvb3Q7XHJcbiAgICB9XHJcblxyXG4gICAgXHJcbiAgICAvKipcclxuICAgICAqIOaehOmAoOS4gOS4qlRhZ+iKgueCuVxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSB0YWcg5qCH562+5ZCNXHJcbiAgICAgKiBAcGFyYW0ge0FycmF5PHN0cmluZz59IFthdHRycz1bXV1cclxuICAgICAqIEBwYXJhbSB7Ym9vbGVhbn0gW3VuYXJ5PWZhbHNlXVxyXG4gICAgICogQG1lbWJlcm9mIEFTVHJlZVxyXG4gICAgICovXHJcbiAgICBidWlsZFRhZ05vZGUodGFnOiBzdHJpbmcsIGF0dHJzOiBBcnJheTxzdHJpbmc+ID0gW10sIHVuYXJ5OiBib29sZWFuID0gZmFsc2UpIHtcclxuICAgICAgICBsZXQgbm9kZSA9IG5ldyBOb2RlKHRhZywgTm9kZVR5cGUuVGFnLCBhdHRycyk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgaWYgKCF1bmFyeSkge1xyXG4gICAgICAgICAgICAvLyDkuI3mmK/nu5PmnZ/moIfnrb5cclxuICAgICAgICAgICAgdGhpcy5hcHBlbmQodGhpcy5jdXJyZW50LCBub2RlKTsgLy8g5re75Yqg6IqC54K55Yiw5b2T5YmN54i26IqC54K555qEQ2hpbGRcclxuICAgICAgICAgICAgdGhpcy5jdXJyZW50ID0gbm9kZTsgLy8g5b2T5YmN55qE54i26IqC54K55YiH5o2i5Yiw5b2T5YmN6IqC54K5XHJcbiAgICAgICAgICAgIHRoaXMuc3RhY2sucHVzaChub2RlKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAvLyDnu5PmnZ/moIfnrb5cclxuICAgICAgICAgICAgbGV0IHBvcztcclxuICAgICAgICAgICAgZm9yIChwb3MgPSB0aGlzLnN0YWNrLmxlbmd0aCAtIDE7IHBvcyA+PSAwOyBwb3MtLSkge1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuc3RhY2tbcG9zXS50YWcgPT09IG5vZGUudGFnKSBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAocG9zID49IDApIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHBhcmVudCA9IHRoaXMuc3RhY2tbcG9zXS5nZXRQYXJlbnQoKTsgLy8g5Y+W5Ye65byA5aeL5qCH562+5Lit5LiK5LiA5bGC55qE54i26IqC54K55b2T5YGa5b2T5YmN6IqC54K5XHJcbiAgICAgICAgICAgICAgICBpZiAoIXBhcmVudCkgdGhyb3cobmV3IEVycm9yKCdQYXJlbnQgTm9kZSBpcyBOdWxsIScpKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuY3VycmVudCA9IHBhcmVudDtcclxuICAgICAgICAgICAgICAgIHRoaXMuc3RhY2subGVuZ3RoID0gcG9zOyAvLyDmuIXpmaTloIbmoIhcclxuICAgICAgICAgICAgfSBlbHNlIGlmICh0YWcudG9Mb3dlckNhc2UoKSA9PT0gJ2JyJykge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5hcHBlbmQodGhpcy5jdXJyZW50LCBub2RlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOS4uuaWh+acrOWIm+W7uuS4gOS4que7k+eCue+8jOWboOS4uuaWh+acrOS4jemcgOimgemXreWQiO+8jOebtOaOpeaPkuWIsOW9k+WJjeeItuiKgueCueS4re+8jOS4jeeUqOWFpeagiFxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSB0ZXh0XHJcbiAgICAgKiBAbWVtYmVyb2YgSHRtbFBhcnNlclxyXG4gICAgICovXHJcbiAgICBidWlsZFRleHROb2RlKHRleHQ6IHN0cmluZykge1xyXG4gICAgICAgIGxldCBub2RlID0gbmV3IE5vZGUoJ3RleHQnLCBOb2RlVHlwZS5UZXh0LCBbXSwgdGV4dCk7XHJcbiAgICAgICAgdGhpcy5hcHBlbmQodGhpcy5jdXJyZW50LCBub2RlKTtcclxuICAgIH1cclxuXHJcbiAgICBhcHBlbmQocGFyZW50OiBOb2RlLCBjaGlsZDogTm9kZSkge1xyXG4gICAgICAgIHBhcmVudC5hcHBlbmRDaGlsZChjaGlsZCk7XHJcblxyXG4gICAgICAgIHRoaXMuc2V0V2lkdGgocGFyZW50LmdldFdpZHRoKCkpO1xyXG4gICAgICAgIHRoaXMuc2V0RGVwdGgoY2hpbGQuZ2V0RGVwdGgoKSk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0Um9vdCgpOiBOb2RlIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5yb290O1xyXG4gICAgfVxyXG5cclxuICAgIHNldFdpZHRoKHdpZHRoOiBudW1iZXIpIHtcclxuICAgICAgICB0aGlzLndpZHRoID0gd2lkdGggPiB0aGlzLndpZHRoID8gd2lkdGggOiB0aGlzLndpZHRoO1xyXG4gICAgfVxyXG5cclxuICAgIGdldFdpZHRoKCk6IG51bWJlciB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMud2lkdGg7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0RGVwdGgoZGVwdGg6IG51bWJlcikge1xyXG4gICAgICAgIHRoaXMuZGVwdGggPSBkZXB0aCA+IHRoaXMuZGVwdGggPyBkZXB0aCA6IHRoaXMuZGVwdGg7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0RGVwdGgoKTogbnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5kZXB0aDtcclxuICAgIH1cclxufSIsIlxyXG5cclxuaW1wb3J0IEFTVHJlZSBmcm9tICcuL1RyZWUnXHJcbmltcG9ydCByZWdleHAgZnJvbSAnLi9yZWdleHAnXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBIdG1sUGFyc2VyIHtcclxuXHJcbiAgICBodG1sOiBzdHJpbmcgPSAnJzsgLy8g5qih5p2/XHJcbiAgICBpbmRleDogbnVtYmVyID0gMDsgLy8g5b2T5YmN57Si5byVXHJcblxyXG4gICAgYXNUcmVlOiBBU1RyZWUgPSBuZXcgQVNUcmVlKCk7XHJcblxyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICB9XHJcblxyXG4gICAgcGFyc2VIdG1sKGh0bWw6IHN0cmluZykge1xyXG4gICAgICAgIHRoaXMucmVzZXQoKTtcclxuICAgICAgICB0aGlzLmh0bWwgPSBodG1sO1xyXG4gICAgICAgIHdoaWxlKHRydWUpIHtcclxuICAgICAgICAgICAgLy8g5Yy56YWN5paH5pysXHJcbiAgICAgICAgICAgIHRoaXMubWF0Y2hUZXh0KClcclxuICAgICAgICAgICAgLy8g5Yy56YWN5rOo6YeKXHJcbiAgICAgICAgICAgIGlmICh0aGlzLm1hdGNoQ29tbWVudCgpKSBjb250aW51ZTtcclxuICAgICAgICAgICAgLy8g5Yy56YWN5paH5qGj57G75Z6LXHJcbiAgICAgICAgICAgIGlmICh0aGlzLm1hdGNoRG9jdHlwZSgpKSBjb250aW51ZTtcclxuICAgICAgICAgICAgLy8g5Yy56YWN57uT5p2f5qCH562+XHJcbiAgICAgICAgICAgIHRoaXMubWF0Y2hFbmRUYWcoKTtcclxuICAgICAgICAgICAgLy8g5Yy56YWN5byA5aeL5qCH562+XHJcbiAgICAgICAgICAgIHRoaXMubWF0Y2hTdGFydFRhZygpO1xyXG5cclxuICAgICAgICAgICAgLy8g5qOA5p+l5piv5ZCm57uT5p2fXHJcbiAgICAgICAgICAgIGlmICh0aGlzLmVvZigpKSBicmVhaztcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgYWR2YW5jZShuOiBudW1iZXIpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLmluZGV4ICs9IG47XHJcbiAgICAgICAgdGhpcy5odG1sID0gdGhpcy5odG1sLnN1YnN0cmluZyhuKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyDljLnphY3mlofmnKxcclxuICAgIG1hdGNoVGV4dCgpIHtcclxuICAgICAgICBsZXQgaW5kZXggPSB0aGlzLmh0bWwuaW5kZXhPZignPCcpO1xyXG4gICAgICAgIGlmIChpbmRleCA8IDApIHtcclxuICAgICAgICAgICAgdGhpcy5odG1sID0gJyc7XHJcbiAgICAgICAgfSBlbHNlIGlmIChpbmRleCA+IDApIHtcclxuICAgICAgICAgICAgdGhpcy5hc1RyZWUuYnVpbGRUZXh0Tm9kZSh0aGlzLmh0bWwuc3Vic3RyaW5nKDAsIGluZGV4KSk7XHJcbiAgICAgICAgICAgIHRoaXMuYWR2YW5jZShpbmRleCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8vIOWMuemFjeaWh+aho+exu+Wei1xyXG4gICAgbWF0Y2hEb2N0eXBlKCk6IGJvb2xlYW4ge1xyXG4gICAgICAgIGxldCBtYXRjaCA9IHRoaXMuaHRtbC5tYXRjaChyZWdleHAuZG9jdHlwZSk7XHJcbiAgICAgICAgaWYgKG1hdGNoKSB7XHJcbiAgICAgICAgICAgIHRoaXMuYWR2YW5jZShtYXRjaFswXS5sZW5ndGgpXHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLy8g5Yy56YWN5rOo6YeKXHJcbiAgICBtYXRjaENvbW1lbnQoKTogYm9vbGVhbiB7XHJcbiAgICAgICAgaWYgKHJlZ2V4cC5jb21tZW50LnRlc3QodGhpcy5odG1sKSkge1xyXG4gICAgICAgICAgICBsZXQgY29tbWVudEVuZCA9IHRoaXMuaHRtbC5pbmRleE9mKCctLT4nKTtcclxuXHJcbiAgICAgICAgICAgIGlmIChjb21tZW50RW5kID49IDApIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuYWR2YW5jZShjb21tZW50RW5kICsgMyk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIOWMuemFjeW8gOWni+agh+etvlxyXG4gICAgbWF0Y2hTdGFydFRhZygpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5tYXRjaFN0YXJ0VGFnT3BlbigpICYmIHRoaXMubWF0Y2hTdGFydFRhZ0Nsb3NlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8g5Yy56YWN5byA5aeL5qCH562+55qEIDx0YWcg6YOo5YiGXHJcbiAgICBtYXRjaFN0YXJ0VGFnT3BlbigpOiBib29sZWFuIHtcclxuICAgICAgICBsZXQgbWF0Y2ggPSBudWxsO1xyXG5cclxuICAgICAgICBpZiggbWF0Y2ggPSB0aGlzLmh0bWwubWF0Y2gocmVnZXhwLnN0YXJ0VGFnT3BlbikgKSB7XHJcbiAgICAgICAgICAgIHRoaXMuYWR2YW5jZShtYXRjaFswXS5sZW5ndGgpXHJcbiAgICAgICAgICAgIHRoaXMuYXNUcmVlLmJ1aWxkVGFnTm9kZShtYXRjaFsxXSwgW10sIGZhbHNlKVxyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIOWMuemFjeW8gOWni+agh+etvueahCBhdHRycz4g6YOo5YiGXHJcbiAgICBtYXRjaFN0YXJ0VGFnQ2xvc2UoKTogYm9vbGVhbiB7XHJcbiAgICAgICAgbGV0IGNsb3NlTWF0Y2ggPSBudWxsO1xyXG4gICAgICAgIGxldCBhdHRyTWF0Y2ggPSBudWxsOyBcclxuICAgICAgICB3aGlsZSAoICEoY2xvc2VNYXRjaCA9IHRoaXMuaHRtbC5tYXRjaChyZWdleHAuc3RhcnRUYWdDbG9zZSkpICYmIChhdHRyTWF0Y2ggPSB0aGlzLmh0bWwubWF0Y2gocmVnZXhwLmF0dHJpYnV0ZSkpICkge1xyXG4gICAgICAgICAgICB0aGlzLmFkdmFuY2UoYXR0ck1hdGNoWzBdLmxlbmd0aClcclxuICAgICAgICAgICAgLy8gVE9ETzog6K6w5b2VYXR0cnNcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChjbG9zZU1hdGNoKSB7XHJcbiAgICAgICAgICAgIHRoaXMuYWR2YW5jZShjbG9zZU1hdGNoWzBdLmxlbmd0aCk7XHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLy8g5Yy56YWN57uT5p2f5qCH562+XHJcbiAgICBtYXRjaEVuZFRhZygpIHtcclxuICAgICAgICBsZXQgbWF0Y2ggPSB0aGlzLmh0bWwubWF0Y2gocmVnZXhwLmVuZFRhZyk7XHJcbiAgICAgICAgaWYgKG1hdGNoKSB7XHJcbiAgICAgICAgICAgIHRoaXMuYWR2YW5jZShtYXRjaFswXS5sZW5ndGgpXHJcbiAgICAgICAgICAgIHRoaXMuYXNUcmVlLmJ1aWxkVGFnTm9kZShtYXRjaFsxXSwgW10sIHRydWUpXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGVvZigpOiBib29sZWFuIHtcclxuICAgICAgICBpZiAodGhpcy5odG1sID09PSAnJykgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIHJlc2V0KCkge1xyXG4gICAgICAgIHRoaXMuaHRtbCA9ICcnO1xyXG4gICAgICAgIHRoaXMuaW5kZXggPSAwO1xyXG4gICAgICAgIHRoaXMuYXNUcmVlID0gbmV3IEFTVHJlZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIGdldERlcHRoKCk6IG51bWJlciB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuYXNUcmVlLmdldERlcHRoKClcclxuICAgIH1cclxufSIsImNsYXNzIFJlZ2V4cCB7XHJcbiAgICBzaW5nbGVBdHRySWRlbnRpZmllciA9IC8oW15cXHNcIic8Pi89XSspLztcclxuICAgIHNpbmdsZUF0dHJBc3NpZ24gPSAvKD86PSkvO1xyXG4gICAgc2luZ2xlQXR0clZhbHVlcyA9IFtcclxuICAgICAgICAvLyBhdHRyIHZhbHVlIGRvdWJsZSBxdW90ZXNcclxuICAgICAgICAvXCIoW15cIl0qKVwiKy8uc291cmNlLFxyXG4gICAgICAgIC8vIGF0dHIgdmFsdWUsIHNpbmdsZSBxdW90ZXNcclxuICAgICAgICAvJyhbXiddKiknKy8uc291cmNlLFxyXG4gICAgICAgIC8vIGF0dHIgdmFsdWUsIG5vIHF1b3Rlc1xyXG4gICAgICAgIC8oW15cXHNcIic9PD5gXSspLy5zb3VyY2VcclxuICAgIF07XHJcbiAgICBhdHRyaWJ1dGUgPSBuZXcgUmVnRXhwKFxyXG4gICAgICAgICdeXFxcXHMqJyArIHRoaXMuc2luZ2xlQXR0cklkZW50aWZpZXIuc291cmNlICtcclxuICAgICAgICAnKD86XFxcXHMqKCcgKyB0aGlzLnNpbmdsZUF0dHJBc3NpZ24uc291cmNlICsgJyknICtcclxuICAgICAgICAnXFxcXHMqKD86JyArIHRoaXMuc2luZ2xlQXR0clZhbHVlcy5qb2luKCd8JykgKyAnKSk/J1xyXG4gICAgKTtcclxuICAgIG5jbmFtZSA9ICdbYS16QS1aX11bXFxcXHdcXFxcLVxcXFwuXSonO1xyXG4gICAgcW5hbWVDYXB0dXJlID0gJygoPzonICsgdGhpcy5uY25hbWUgKyAnXFxcXDopPycgKyB0aGlzLm5jbmFtZSArICcpJztcclxuICAgIHN0YXJ0VGFnT3BlbiA9IG5ldyBSZWdFeHAoJ148JyArIHRoaXMucW5hbWVDYXB0dXJlKTtcclxuICAgIHN0YXJ0VGFnQ2xvc2UgPSAvXlxccyooXFwvPyk+LztcclxuICAgIGVuZFRhZyA9IG5ldyBSZWdFeHAoJ148XFxcXC8nICsgdGhpcy5xbmFtZUNhcHR1cmUgKyAnW14+XSo+Jyk7XHJcbiAgICBkb2N0eXBlID0gL148IURPQ1RZUEUgW14+XSs+L2k7XHJcbiAgICBjb21tZW50ID0gL148IS0tLztcclxuICAgIGNvbmRpdGlvbmFsQ29tbWVudCA9IC9ePCFcXFsvO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBuZXcgUmVnZXhwKCk7Il0sInNvdXJjZVJvb3QiOiIifQ==