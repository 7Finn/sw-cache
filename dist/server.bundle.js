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
var parser = new html_parser_1.default();
parser.parseHtml("\n<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n    <meta charset=\"UTF-8\">\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n    <meta http-equiv=\"X-UA-Compatible\" content=\"ie=edge\">\n    <title>Document</title>\n</head>\n<body>\n    <div></div>\n</body>\n</html>");
console.log(JSON.stringify(parser.toString(), null, 4));
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
    Node.prototype.toString = function () {
        return {
            tag: this.tag,
            type: this.type,
            attrs: this.attrs,
            text: this.text,
            depth: this.depth,
            children: this.children.map(function (item) {
                return item.toString();
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
            switch (tag.toLowerCase()) {
                case 'meta':
                    break;
                default:
                    this.current = node;
                    this.stack.push(node);
                    break;
            }
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
        return node;
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
    ASTree.prototype.toString = function () {
        return this.root.toString();
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
            if (this.matchConditionComment())
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
    HtmlParser.prototype.matchConditionComment = function () {
        if (regexp_1.default.conditionalComment.test(this.html)) {
            var conditionalEnd = this.html.indexOf(']>');
            if (conditionalEnd >= 0) {
                this.advance(conditionalEnd + 2);
                return true;
            }
        }
        return false;
    };
    HtmlParser.prototype.matchStartTag = function () {
        var node = this.matchStartTagOpen();
        if (node) {
            this.matchStartTagClose(node);
            return true;
        }
        else {
            return false;
        }
    };
    HtmlParser.prototype.matchStartTagOpen = function () {
        var match = null;
        if ((match = this.html.match(regexp_1.default.startTagOpen))) {
            this.advance(match[0].length);
            return this.asTree.buildTagNode(match[1], [], false);
        }
        return null;
    };
    HtmlParser.prototype.matchStartTagClose = function (node) {
        var closeMatch = null;
        var attrMatch = null;
        var attrMatches = [];
        while (!(closeMatch = this.html.match(regexp_1.default.startTagClose)) && (attrMatch = this.html.match(regexp_1.default.attribute))) {
            this.advance(attrMatch[0].length);
            attrMatches.push(attrMatch);
        }
        if (closeMatch) {
            node.setAttrs(this.parseAttrs(attrMatches));
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
    HtmlParser.prototype.parseAttrs = function (attrMatches) {
        var attrs = [];
        for (var i = 0; i < attrMatches.length; i++) {
            var args = attrMatches[i];
            if (args[0].indexOf('""') === -1) {
                if (args[3] === '') {
                    delete args[3];
                }
                if (args[4] === '') {
                    delete args[4];
                }
                if (args[5] === '') {
                    delete args[5];
                }
            }
            var value = args[3] || args[4] || args[5] || '';
            attrs[i] = {
                name: args[1],
                value: this.decodeAttr(value, true)
            };
        }
        return attrs;
    };
    HtmlParser.prototype.decodeAttr = function (value, shouldDecodeNewlines) {
        if (shouldDecodeNewlines) {
            value = value.replace(regexp_1.default.nlRE, '\n');
        }
        return value
            .replace(regexp_1.default.ltRE, '<')
            .replace(regexp_1.default.gtRE, '>')
            .replace(regexp_1.default.ampRE, '&')
            .replace(regexp_1.default.quoteRE, '"');
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
    HtmlParser.prototype.toString = function () {
        return this.asTree.toString();
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
        this.ltRE = /&lt;/g;
        this.gtRE = /&gt;/g;
        this.nlRE = /&#10;/g;
        this.ampRE = /&amp;/g;
        this.quoteRE = /&quot;/g;
    }
    return Regexp;
}());
exports.default = new Regexp();


/***/ })

/******/ })));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NlcnZlci9pbmRleC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc2VydmVyL3V0aWxzL2h0bWwtcGFyc2VyL05vZGUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NlcnZlci91dGlscy9odG1sLXBhcnNlci9UcmVlLnRzIiwid2VicGFjazovLy8uL3NyYy9zZXJ2ZXIvdXRpbHMvaHRtbC1wYXJzZXIvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NlcnZlci91dGlscy9odG1sLXBhcnNlci9yZWdleHAudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esa0RBQTBDLGdDQUFnQztBQUMxRTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGdFQUF3RCxrQkFBa0I7QUFDMUU7QUFDQSx5REFBaUQsY0FBYztBQUMvRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaURBQXlDLGlDQUFpQztBQUMxRSx3SEFBZ0gsbUJBQW1CLEVBQUU7QUFDckk7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBMkIsMEJBQTBCLEVBQUU7QUFDdkQseUNBQWlDLGVBQWU7QUFDaEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOERBQXNELCtEQUErRDs7QUFFckg7QUFDQTs7O0FBR0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDbEZBLDhHQUE2QztBQUU3QyxJQUFJLE1BQU0sR0FBRyxJQUFJLHFCQUFVLEVBQUUsQ0FBQztBQUM5QixNQUFNLENBQUMsU0FBUyxDQUFDLDZT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QUksQ0FBQyxnQkFBZ0IsQ0FBQyxNQUFNLEdBQUcsR0FBRztZQUMvQyxTQUFTLEdBQUcsSUFBSSxDQUFDLGdCQUFnQixDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxLQUFLLENBQ3RELENBQUM7UUFDRixXQUFNLEdBQUcsdUJBQXVCLENBQUM7UUFDakMsaUJBQVksR0FBRyxNQUFNLEdBQUcsSUFBSSxDQUFDLE1BQU0sR0FBRyxPQUFPLEdBQUcsSUFBSSxDQUFDLE1BQU0sR0FBRyxHQUFHLENBQUM7UUFDbEUsaUJBQVksR0FBRyxJQUFJLE1BQU0sQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDO1FBQ3BELGtCQUFhLEdBQUcsWUFBWSxDQUFDO1FBQzdCLFdBQU0sR0FBRyxJQUFJLE1BQU0sQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLFlBQVksR0FBRyxRQUFRLENBQUMsQ0FBQztRQUM1RCxZQUFPLEdBQUcsb0JBQW9CLENBQUM7UUFDL0IsWUFBTyxHQUFHLE9BQU8sQ0FBQztRQUNsQix1QkFBa0IsR0FBRyxPQUFPLENBQUM7UUFHN0IsU0FBSSxHQUFHLE9BQU87UUFDZCxTQUFJLEdBQUcsT0FBTztRQUNkLFNBQUksR0FBRyxRQUFRO1FBQ2YsVUFBSyxHQUFHLFFBQVE7UUFDaEIsWUFBTyxHQUFHLFNBQVM7SUFDdkIsQ0FBQztJQUFELGFBQUM7QUFBRCxDQUFDO0FBRUQsa0JBQWUsSUFBSSxNQUFNLEVBQUUsQ0FBQyIsImZpbGUiOiJzZXJ2ZXIuYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvc2VydmVyL2luZGV4LnRzXCIpO1xuIiwiaW1wb3J0IEh0bWxQYXJzZXIgZnJvbSAnLi91dGlscy9odG1sLXBhcnNlcic7XHJcblxyXG5sZXQgcGFyc2VyID0gbmV3IEh0bWxQYXJzZXIoKTtcclxucGFyc2VyLnBhcnNlSHRtbChgXHJcbjwhRE9DVFlQRSBodG1sPlxyXG48aHRtbCBsYW5nPVwiZW5cIj5cclxuPGhlYWQ+XHJcbiAgICA8bWV0YSBjaGFyc2V0PVwiVVRGLThcIj5cclxuICAgIDxtZXRhIG5hbWU9XCJ2aWV3cG9ydFwiIGNvbnRlbnQ9XCJ3aWR0aD1kZXZpY2Utd2lkdGgsIGluaXRpYWwtc2NhbGU9MS4wXCI+XHJcbiAgICA8bWV0YSBodHRwLWVxdWl2PVwiWC1VQS1Db21wYXRpYmxlXCIgY29udGVudD1cImllPWVkZ2VcIj5cclxuICAgIDx0aXRsZT5Eb2N1bWVudDwvdGl0bGU+XHJcbjwvaGVhZD5cclxuPGJvZHk+XHJcbiAgICA8ZGl2PjwvZGl2PlxyXG48L2JvZHk+XHJcbjwvaHRtbD5gXHJcbilcclxuXHJcbmNvbnNvbGUubG9nKEpTT04uc3RyaW5naWZ5KHBhcnNlci50b1N0cmluZygpLCBudWxsLCA0KSk7XHJcblxyXG5tb2R1bGUuZXhwb3J0cy5IdG1sUGFyc2VyID0gSHRtbFBhcnNlciIsImV4cG9ydCBlbnVtIE5vZGVUeXBlIHtcclxuICAgIFRhZyA9IDEsXHJcbiAgICBDb2RlID0gMixcclxuICAgIFRleHQgPSAzLFxyXG4gICAgUm9vdCA9IDRcclxufVxyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE5vZGUge1xyXG4gICAgdGFnOiBzdHJpbmc7XHJcbiAgICB0eXBlOiBOb2RlVHlwZTtcclxuICAgIGF0dHJzOiBBcnJheTxzdHJpbmc+O1xyXG4gICAgcGFyZW50OiBOb2RlIHwgbnVsbCA9IG51bGw7XHJcbiAgICBjaGlsZHJlbjogQXJyYXk8Tm9kZT4gPSBbXTtcclxuICAgIGRlcHRoOiBudW1iZXIgPSAwO1xyXG4gICAgdGV4dDogc3RyaW5nID0gJyc7XHJcblxyXG4gICAgY29uc3RydWN0b3IoXHJcbiAgICAgICAgdGFnOiBzdHJpbmcsXHJcbiAgICAgICAgdHlwZTogTm9kZVR5cGUsXHJcbiAgICAgICAgYXR0cnM6IEFycmF5PHN0cmluZz4gPSBbXSxcclxuICAgICAgICB0ZXh0OiBzdHJpbmcgPSAnJ1xyXG4gICAgKSB7XHJcbiAgICAgICAgdGhpcy50YWcgPSB0YWc7XHJcbiAgICAgICAgdGhpcy50eXBlID0gdHlwZTtcclxuICAgICAgICB0aGlzLmF0dHJzID0gYXR0cnM7XHJcbiAgICAgICAgdGhpcy50ZXh0ID0gdGV4dDtcclxuICAgIH1cclxuXHJcbiAgICBzZXRQYXJlbnQocGFyZW50OiBOb2RlKSB7XHJcbiAgICAgICAgdGhpcy5wYXJlbnQgPSBwYXJlbnQ7XHJcbiAgICAgICAgdGhpcy5kZXB0aCA9IHRoaXMucGFyZW50LmdldERlcHRoKCkgKyAxO1xyXG4gICAgfVxyXG5cclxuICAgIGdldFBhcmVudCgpOiBOb2RlIHwgbnVsbCB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMucGFyZW50O1xyXG4gICAgfVxyXG5cclxuICAgIHNldEF0dHJzKGF0dHJzOiBBcnJheTxzdHJpbmc+KSB7XHJcbiAgICAgICAgdGhpcy5hdHRycyA9IGF0dHJzO1xyXG4gICAgfVxyXG5cclxuICAgIGdldEF0dHJzKCk6IEFycmF5PHN0cmluZz4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmF0dHJzO1xyXG4gICAgfVxyXG5cclxuICAgIGFwcGVuZENoaWxkKGNoaWxkOiBOb2RlKSB7XHJcbiAgICAgICAgdGhpcy5jaGlsZHJlbi5wdXNoKGNoaWxkKTtcclxuICAgICAgICBjaGlsZC5zZXRQYXJlbnQodGhpcyk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0Q2hpbGRyZW4oKTogQXJyYXk8Tm9kZT4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmNoaWxkcmVuO1xyXG4gICAgfVxyXG5cclxuICAgIGdldERlcHRoKCk6IG51bWJlciB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZGVwdGg7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0V2lkdGgoKTogbnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5jaGlsZHJlbi5sZW5ndGg7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0VGV4dCh0ZXh0OiBzdHJpbmcpIHtcclxuICAgICAgICB0aGlzLnRleHQgPSB0ZXh0O1xyXG4gICAgfVxyXG5cclxuICAgIGdldFRleHQoKTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gdGhpcy50ZXh0O1xyXG4gICAgfVxyXG5cclxuICAgIHRvU3RyaW5nKCk6IGFueSB7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgdGFnOiB0aGlzLnRhZyxcclxuICAgICAgICAgICAgdHlwZTogdGhpcy50eXBlLFxyXG4gICAgICAgICAgICBhdHRyczogdGhpcy5hdHRycyxcclxuICAgICAgICAgICAgdGV4dDogdGhpcy50ZXh0LFxyXG4gICAgICAgICAgICBkZXB0aDogdGhpcy5kZXB0aCxcclxuICAgICAgICAgICAgY2hpbGRyZW46IHRoaXMuY2hpbGRyZW4ubWFwKGl0ZW0gPT4ge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGl0ZW0udG9TdHJpbmcoKVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufSIsImltcG9ydCBOb2RlLCB7IE5vZGVUeXBlIH0gZnJvbSAnLi9Ob2RlJ1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQVNUcmVlIHtcclxuICAgIHJvb3Q6IE5vZGU7XHJcbiAgICBkZXB0aDogbnVtYmVyID0gMDtcclxuICAgIHdpZHRoOiBudW1iZXIgPSAwO1xyXG4gICAgc3RhY2s6IEFycmF5PE5vZGU+ID0gW107XHJcbiAgICBjdXJyZW50OiBOb2RlO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHRoaXMucm9vdCA9IG5ldyBOb2RlKCdyb290JywgTm9kZVR5cGUuUm9vdCk7XHJcbiAgICAgICAgdGhpcy5jdXJyZW50ID0gdGhpcy5yb290O1xyXG4gICAgfVxyXG5cclxuICAgIFxyXG4gICAgLyoqXHJcbiAgICAgKiDmnoTpgKDkuIDkuKpUYWfoioLngrlcclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gdGFnIOagh+etvuWQjVxyXG4gICAgICogQHBhcmFtIHtBcnJheTxzdHJpbmc+fSBbYXR0cnM9W11dXHJcbiAgICAgKiBAcGFyYW0ge2Jvb2xlYW59IFt1bmFyeT1mYWxzZV1cclxuICAgICAqIEBtZW1iZXJvZiBBU1RyZWVcclxuICAgICAqL1xyXG4gICAgYnVpbGRUYWdOb2RlKHRhZzogc3RyaW5nLCBhdHRyczogQXJyYXk8c3RyaW5nPiA9IFtdLCB1bmFyeTogYm9vbGVhbiA9IGZhbHNlKTogTm9kZSB7XHJcbiAgICAgICAgbGV0IG5vZGUgPSBuZXcgTm9kZSh0YWcsIE5vZGVUeXBlLlRhZywgYXR0cnMpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIGlmICghdW5hcnkpIHtcclxuICAgICAgICAgICAgLy8g5LiN5piv57uT5p2f5qCH562+XHJcbiAgICAgICAgICAgIHRoaXMuYXBwZW5kKHRoaXMuY3VycmVudCwgbm9kZSk7IC8vIOa3u+WKoOiKgueCueWIsOW9k+WJjeeItuiKgueCueeahENoaWxkXHJcbiAgICAgICAgICAgIHN3aXRjaCh0YWcudG9Mb3dlckNhc2UoKSkge1xyXG4gICAgICAgICAgICAgICAgY2FzZSAnbWV0YSc6XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gbWV0YSDmsqHmnInpl63lkIjvvIzkuZ/kuI3pnIDopoHlhaXmoIhcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGRlZmF1bHQ6IFxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY3VycmVudCA9IG5vZGU7IC8vIOW9k+WJjeeahOeItuiKgueCueWIh+aNouWIsOW9k+WJjeiKgueCuVxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhY2sucHVzaChub2RlKTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIC8vIOe7k+adn+agh+etvlxyXG4gICAgICAgICAgICBsZXQgcG9zO1xyXG4gICAgICAgICAgICBmb3IgKHBvcyA9IHRoaXMuc3RhY2subGVuZ3RoIC0gMTsgcG9zID49IDA7IHBvcy0tKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5zdGFja1twb3NdLnRhZyA9PT0gbm9kZS50YWcpIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChwb3MgPj0gMCkge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgcGFyZW50ID0gdGhpcy5zdGFja1twb3NdLmdldFBhcmVudCgpOyAvLyDlj5blh7rlvIDlp4vmoIfnrb7kuK3kuIrkuIDlsYLnmoTniLboioLngrnlvZPlgZrlvZPliY3oioLngrlcclxuICAgICAgICAgICAgICAgIGlmICghcGFyZW50KSB0aHJvdyhuZXcgRXJyb3IoJ1BhcmVudCBOb2RlIGlzIE51bGwhJykpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jdXJyZW50ID0gcGFyZW50O1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zdGFjay5sZW5ndGggPSBwb3M7IC8vIOa4hemZpOWghuagiFxyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKHRhZy50b0xvd2VyQ2FzZSgpID09PSAnYnInKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmFwcGVuZCh0aGlzLmN1cnJlbnQsIG5vZGUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gbm9kZTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOS4uuaWh+acrOWIm+W7uuS4gOS4que7k+eCue+8jOWboOS4uuaWh+acrOS4jemcgOimgemXreWQiO+8jOebtOaOpeaPkuWIsOW9k+WJjeeItuiKgueCueS4re+8jOS4jeeUqOWFpeagiFxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSB0ZXh0XHJcbiAgICAgKiBAbWVtYmVyb2YgSHRtbFBhcnNlclxyXG4gICAgICovXHJcbiAgICBidWlsZFRleHROb2RlKHRleHQ6IHN0cmluZykge1xyXG4gICAgICAgIGxldCBub2RlID0gbmV3IE5vZGUoJ3RleHQnLCBOb2RlVHlwZS5UZXh0LCBbXSwgdGV4dCk7XHJcbiAgICAgICAgdGhpcy5hcHBlbmQodGhpcy5jdXJyZW50LCBub2RlKTtcclxuICAgIH1cclxuXHJcbiAgICBhcHBlbmQocGFyZW50OiBOb2RlLCBjaGlsZDogTm9kZSkge1xyXG4gICAgICAgIHBhcmVudC5hcHBlbmRDaGlsZChjaGlsZCk7XHJcblxyXG4gICAgICAgIHRoaXMuc2V0V2lkdGgocGFyZW50LmdldFdpZHRoKCkpO1xyXG4gICAgICAgIHRoaXMuc2V0RGVwdGgoY2hpbGQuZ2V0RGVwdGgoKSk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0Um9vdCgpOiBOb2RlIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5yb290O1xyXG4gICAgfVxyXG5cclxuICAgIHNldFdpZHRoKHdpZHRoOiBudW1iZXIpIHtcclxuICAgICAgICB0aGlzLndpZHRoID0gd2lkdGggPiB0aGlzLndpZHRoID8gd2lkdGggOiB0aGlzLndpZHRoO1xyXG4gICAgfVxyXG5cclxuICAgIGdldFdpZHRoKCk6IG51bWJlciB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMud2lkdGg7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0RGVwdGgoZGVwdGg6IG51bWJlcikge1xyXG4gICAgICAgIHRoaXMuZGVwdGggPSBkZXB0aCA+IHRoaXMuZGVwdGggPyBkZXB0aCA6IHRoaXMuZGVwdGg7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0RGVwdGgoKTogbnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5kZXB0aDtcclxuICAgIH1cclxuXHJcbiAgICB0b1N0cmluZygpOiBhbnkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnJvb3QudG9TdHJpbmcoKVxyXG4gICAgfVxyXG59IiwiXHJcblxyXG5pbXBvcnQgQVNUcmVlIGZyb20gJy4vVHJlZSdcclxuaW1wb3J0IE5vZGUgZnJvbSAnLi9Ob2RlJ1xyXG5pbXBvcnQgcmVnZXhwIGZyb20gJy4vcmVnZXhwJ1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSHRtbFBhcnNlciB7XHJcblxyXG4gICAgaHRtbDogc3RyaW5nID0gJyc7IC8vIOaooeadv1xyXG4gICAgaW5kZXg6IG51bWJlciA9IDA7IC8vIOW9k+WJjee0ouW8lVxyXG5cclxuICAgIGFzVHJlZTogQVNUcmVlID0gbmV3IEFTVHJlZSgpO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgfVxyXG5cclxuICAgIHBhcnNlSHRtbChodG1sOiBzdHJpbmcpIHtcclxuICAgICAgICB0aGlzLnJlc2V0KCk7XHJcbiAgICAgICAgdGhpcy5odG1sID0gaHRtbDtcclxuICAgICAgICB3aGlsZSh0cnVlKSB7XHJcbiAgICAgICAgICAgIC8vIOWMuemFjeaWh+acrFxyXG4gICAgICAgICAgICB0aGlzLm1hdGNoVGV4dCgpXHJcbiAgICAgICAgICAgIC8vIOWMuemFjeazqOmHilxyXG4gICAgICAgICAgICBpZiAodGhpcy5tYXRjaENvbW1lbnQoKSkgY29udGludWU7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLm1hdGNoQ29uZGl0aW9uQ29tbWVudCgpKSBjb250aW51ZTtcclxuICAgICAgICAgICAgLy8g5Yy56YWN5paH5qGj57G75Z6LXHJcbiAgICAgICAgICAgIGlmICh0aGlzLm1hdGNoRG9jdHlwZSgpKSBjb250aW51ZTtcclxuICAgICAgICAgICAgLy8g5Yy56YWN57uT5p2f5qCH562+XHJcbiAgICAgICAgICAgIHRoaXMubWF0Y2hFbmRUYWcoKTtcclxuICAgICAgICAgICAgLy8g5Yy56YWN5byA5aeL5qCH562+XHJcbiAgICAgICAgICAgIHRoaXMubWF0Y2hTdGFydFRhZygpO1xyXG5cclxuICAgICAgICAgICAgLy8g5qOA5p+l5piv5ZCm57uT5p2fXHJcbiAgICAgICAgICAgIGlmICh0aGlzLmVvZigpKSBicmVhaztcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgYWR2YW5jZShuOiBudW1iZXIpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLmluZGV4ICs9IG47XHJcbiAgICAgICAgdGhpcy5odG1sID0gdGhpcy5odG1sLnN1YnN0cmluZyhuKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyDljLnphY3mlofmnKxcclxuICAgIG1hdGNoVGV4dCgpIHtcclxuICAgICAgICBsZXQgaW5kZXggPSB0aGlzLmh0bWwuaW5kZXhPZignPCcpO1xyXG4gICAgICAgIGlmIChpbmRleCA8IDApIHtcclxuICAgICAgICAgICAgdGhpcy5odG1sID0gJyc7XHJcbiAgICAgICAgfSBlbHNlIGlmIChpbmRleCA+IDApIHtcclxuICAgICAgICAgICAgdGhpcy5hc1RyZWUuYnVpbGRUZXh0Tm9kZSh0aGlzLmh0bWwuc3Vic3RyaW5nKDAsIGluZGV4KSk7XHJcbiAgICAgICAgICAgIHRoaXMuYWR2YW5jZShpbmRleCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8vIOWMuemFjeaWh+aho+exu+Wei1xyXG4gICAgbWF0Y2hEb2N0eXBlKCk6IGJvb2xlYW4ge1xyXG4gICAgICAgIGxldCBtYXRjaCA9IHRoaXMuaHRtbC5tYXRjaChyZWdleHAuZG9jdHlwZSk7XHJcbiAgICAgICAgaWYgKG1hdGNoKSB7XHJcbiAgICAgICAgICAgIHRoaXMuYWR2YW5jZShtYXRjaFswXS5sZW5ndGgpXHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLy8g5Yy56YWN5rOo6YeKXHJcbiAgICBtYXRjaENvbW1lbnQoKTogYm9vbGVhbiB7XHJcbiAgICAgICAgaWYgKHJlZ2V4cC5jb21tZW50LnRlc3QodGhpcy5odG1sKSkge1xyXG4gICAgICAgICAgICBsZXQgY29tbWVudEVuZCA9IHRoaXMuaHRtbC5pbmRleE9mKCctLT4nKTtcclxuXHJcbiAgICAgICAgICAgIGlmIChjb21tZW50RW5kID49IDApIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuYWR2YW5jZShjb21tZW50RW5kICsgMyk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIG1hdGNoQ29uZGl0aW9uQ29tbWVudCgpOiBib29sZWFuIHtcclxuICAgICAgICBpZiAocmVnZXhwLmNvbmRpdGlvbmFsQ29tbWVudC50ZXN0KHRoaXMuaHRtbCkpIHtcclxuICAgICAgICAgICAgY29uc3QgY29uZGl0aW9uYWxFbmQgPSB0aGlzLmh0bWwuaW5kZXhPZignXT4nKVxyXG4gIFxyXG4gICAgICAgICAgICBpZiAoY29uZGl0aW9uYWxFbmQgPj0gMCkge1xyXG4gICAgICAgICAgICAgIHRoaXMuYWR2YW5jZShjb25kaXRpb25hbEVuZCArIDIpXHJcbiAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICAvLyDljLnphY3lvIDlp4vmoIfnrb5cclxuICAgIG1hdGNoU3RhcnRUYWcoKTogYm9vbGVhbiB7XHJcbiAgICAgICAgbGV0IG5vZGU6IE5vZGUgfCBudWxsID0gdGhpcy5tYXRjaFN0YXJ0VGFnT3BlbigpO1xyXG4gICAgICAgIGlmIChub2RlKSB7XHJcbiAgICAgICAgICAgIHRoaXMubWF0Y2hTdGFydFRhZ0Nsb3NlKG5vZGUpO1xyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8vIOWMuemFjeW8gOWni+agh+etvueahCA8dGFnIOmDqOWIhlxyXG4gICAgbWF0Y2hTdGFydFRhZ09wZW4oKTogTm9kZSB8IG51bGwge1xyXG4gICAgICAgIGxldCBtYXRjaCA9IG51bGw7XHJcbiAgICAgICAgaWYoIChtYXRjaCA9IHRoaXMuaHRtbC5tYXRjaChyZWdleHAuc3RhcnRUYWdPcGVuKSkgKSB7XHJcbiAgICAgICAgICAgIHRoaXMuYWR2YW5jZShtYXRjaFswXS5sZW5ndGgpXHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmFzVHJlZS5idWlsZFRhZ05vZGUobWF0Y2hbMV0sIFtdLCBmYWxzZSlcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICB9XHJcblxyXG4gICAgLy8g5Yy56YWN5byA5aeL5qCH562+55qEIGF0dHJzPiDpg6jliIZcclxuICAgIG1hdGNoU3RhcnRUYWdDbG9zZShub2RlOiBOb2RlKTogYm9vbGVhbiB7XHJcbiAgICAgICAgbGV0IGNsb3NlTWF0Y2ggPSBudWxsO1xyXG4gICAgICAgIGxldCBhdHRyTWF0Y2ggPSBudWxsO1xyXG4gICAgICAgIGxldCBhdHRyTWF0Y2hlcyA9IFtdO1xyXG4gICAgICAgIHdoaWxlICggIShjbG9zZU1hdGNoID0gdGhpcy5odG1sLm1hdGNoKHJlZ2V4cC5zdGFydFRhZ0Nsb3NlKSkgJiYgKGF0dHJNYXRjaCA9IHRoaXMuaHRtbC5tYXRjaChyZWdleHAuYXR0cmlidXRlKSkgKSB7XHJcbiAgICAgICAgICAgIHRoaXMuYWR2YW5jZShhdHRyTWF0Y2hbMF0ubGVuZ3RoKVxyXG4gICAgICAgICAgICAvLyBUT0RPOiDorrDlvZVhdHRyc1xyXG4gICAgICAgICAgICBhdHRyTWF0Y2hlcy5wdXNoKGF0dHJNYXRjaClcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChjbG9zZU1hdGNoKSB7XHJcbiAgICAgICAgICAgIG5vZGUuc2V0QXR0cnModGhpcy5wYXJzZUF0dHJzKGF0dHJNYXRjaGVzKSk7XHJcbiAgICAgICAgICAgIHRoaXMuYWR2YW5jZShjbG9zZU1hdGNoWzBdLmxlbmd0aCk7XHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLy8g5Yy56YWN57uT5p2f5qCH562+XHJcbiAgICBtYXRjaEVuZFRhZygpIHtcclxuICAgICAgICBsZXQgbWF0Y2ggPSB0aGlzLmh0bWwubWF0Y2gocmVnZXhwLmVuZFRhZyk7XHJcbiAgICAgICAgaWYgKG1hdGNoKSB7XHJcbiAgICAgICAgICAgIHRoaXMuYWR2YW5jZShtYXRjaFswXS5sZW5ndGgpXHJcbiAgICAgICAgICAgIHRoaXMuYXNUcmVlLmJ1aWxkVGFnTm9kZShtYXRjaFsxXSwgW10sIHRydWUpXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHBhcnNlQXR0cnMoYXR0ck1hdGNoZXM6IEFycmF5PGFueT4pOiBBcnJheTxhbnk+IHtcclxuICAgICAgICBsZXQgYXR0cnMgPSBbXTtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGF0dHJNYXRjaGVzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGxldCBhcmdzID0gYXR0ck1hdGNoZXNbaV07XHJcbiAgICAgICAgICAgIC8vIGhhY2tpc2ggd29yayBhcm91bmQgRkYgYnVnIGh0dHBzOi8vYnVnemlsbGEubW96aWxsYS5vcmcvc2hvd19idWcuY2dpP2lkPTM2OTc3OFxyXG4gICAgICAgICAgICBpZiAoYXJnc1swXS5pbmRleE9mKCdcIlwiJykgPT09IC0xKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoYXJnc1szXSA9PT0gJycpIHtcclxuICAgICAgICAgICAgICAgICAgICBkZWxldGUgYXJnc1szXTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmIChhcmdzWzRdID09PSAnJykge1xyXG4gICAgICAgICAgICAgICAgICAgIGRlbGV0ZSBhcmdzWzRdO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYgKGFyZ3NbNV0gPT09ICcnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZGVsZXRlIGFyZ3NbNV07XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgbGV0IHZhbHVlID0gYXJnc1szXSB8fCBhcmdzWzRdIHx8IGFyZ3NbNV0gfHwgJyc7XHJcbiAgICAgICAgICAgIGF0dHJzW2ldID0ge1xyXG4gICAgICAgICAgICAgICAgbmFtZTogYXJnc1sxXSxcclxuICAgICAgICAgICAgICAgIHZhbHVlOiB0aGlzLmRlY29kZUF0dHIodmFsdWUsIHRydWUpXHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gYXR0cnM7XHJcbiAgICB9XHJcblxyXG4gICAgZGVjb2RlQXR0cih2YWx1ZTogc3RyaW5nLCBzaG91bGREZWNvZGVOZXdsaW5lczogYm9vbGVhbikge1xyXG4gICAgICAgIGlmIChzaG91bGREZWNvZGVOZXdsaW5lcykge1xyXG4gICAgICAgICAgICB2YWx1ZSA9IHZhbHVlLnJlcGxhY2UocmVnZXhwLm5sUkUsICdcXG4nKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHZhbHVlXHJcbiAgICAgICAgICAgIC5yZXBsYWNlKHJlZ2V4cC5sdFJFLCAnPCcpXHJcbiAgICAgICAgICAgIC5yZXBsYWNlKHJlZ2V4cC5ndFJFLCAnPicpXHJcbiAgICAgICAgICAgIC5yZXBsYWNlKHJlZ2V4cC5hbXBSRSwgJyYnKVxyXG4gICAgICAgICAgICAucmVwbGFjZShyZWdleHAucXVvdGVSRSwgJ1wiJylcclxuICAgIH1cclxuXHJcbiAgICBlb2YoKTogYm9vbGVhbiB7XHJcbiAgICAgICAgaWYgKHRoaXMuaHRtbCA9PT0gJycpIHJldHVybiB0cnVlO1xyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICByZXNldCgpIHtcclxuICAgICAgICB0aGlzLmh0bWwgPSAnJztcclxuICAgICAgICB0aGlzLmluZGV4ID0gMDtcclxuICAgICAgICB0aGlzLmFzVHJlZSA9IG5ldyBBU1RyZWUoKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXREZXB0aCgpOiBudW1iZXIge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmFzVHJlZS5nZXREZXB0aCgpXHJcbiAgICB9XHJcblxyXG4gICAgdG9TdHJpbmcoKTogYW55IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5hc1RyZWUudG9TdHJpbmcoKTtcclxuICAgIH1cclxufSIsImNsYXNzIFJlZ2V4cCB7XHJcbiAgICBzaW5nbGVBdHRySWRlbnRpZmllciA9IC8oW15cXHNcIic8Pi89XSspLztcclxuICAgIHNpbmdsZUF0dHJBc3NpZ24gPSAvKD86PSkvO1xyXG4gICAgc2luZ2xlQXR0clZhbHVlcyA9IFtcclxuICAgICAgICAvLyBhdHRyIHZhbHVlIGRvdWJsZSBxdW90ZXNcclxuICAgICAgICAvXCIoW15cIl0qKVwiKy8uc291cmNlLFxyXG4gICAgICAgIC8vIGF0dHIgdmFsdWUsIHNpbmdsZSBxdW90ZXNcclxuICAgICAgICAvJyhbXiddKiknKy8uc291cmNlLFxyXG4gICAgICAgIC8vIGF0dHIgdmFsdWUsIG5vIHF1b3Rlc1xyXG4gICAgICAgIC8oW15cXHNcIic9PD5gXSspLy5zb3VyY2VcclxuICAgIF07XHJcbiAgICBhdHRyaWJ1dGUgPSBuZXcgUmVnRXhwKFxyXG4gICAgICAgICdeXFxcXHMqJyArIHRoaXMuc2luZ2xlQXR0cklkZW50aWZpZXIuc291cmNlICtcclxuICAgICAgICAnKD86XFxcXHMqKCcgKyB0aGlzLnNpbmdsZUF0dHJBc3NpZ24uc291cmNlICsgJyknICtcclxuICAgICAgICAnXFxcXHMqKD86JyArIHRoaXMuc2luZ2xlQXR0clZhbHVlcy5qb2luKCd8JykgKyAnKSk/J1xyXG4gICAgKTtcclxuICAgIG5jbmFtZSA9ICdbYS16QS1aX11bXFxcXHdcXFxcLVxcXFwuXSonO1xyXG4gICAgcW5hbWVDYXB0dXJlID0gJygoPzonICsgdGhpcy5uY25hbWUgKyAnXFxcXDopPycgKyB0aGlzLm5jbmFtZSArICcpJztcclxuICAgIHN0YXJ0VGFnT3BlbiA9IG5ldyBSZWdFeHAoJ148JyArIHRoaXMucW5hbWVDYXB0dXJlKTtcclxuICAgIHN0YXJ0VGFnQ2xvc2UgPSAvXlxccyooXFwvPyk+LztcclxuICAgIGVuZFRhZyA9IG5ldyBSZWdFeHAoJ148XFxcXC8nICsgdGhpcy5xbmFtZUNhcHR1cmUgKyAnW14+XSo+Jyk7XHJcbiAgICBkb2N0eXBlID0gL148IURPQ1RZUEUgW14+XSs+L2k7XHJcbiAgICBjb21tZW50ID0gL148IS0tLztcclxuICAgIGNvbmRpdGlvbmFsQ29tbWVudCA9IC9ePCFcXFsvO1xyXG5cclxuICAgIFxyXG4gICAgbHRSRSA9IC8mbHQ7L2dcclxuICAgIGd0UkUgPSAvJmd0Oy9nXHJcbiAgICBubFJFID0gLyYjMTA7L2dcclxuICAgIGFtcFJFID0gLyZhbXA7L2dcclxuICAgIHF1b3RlUkUgPSAvJnF1b3Q7L2dcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgbmV3IFJlZ2V4cCgpOyJdLCJzb3VyY2VSb290IjoiIn0=