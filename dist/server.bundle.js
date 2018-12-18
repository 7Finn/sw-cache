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

/***/ "./src/server/core/html-parser/Node.ts":
/*!*********************************************!*\
  !*** ./src/server/core/html-parser/Node.ts ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var NodeType;
(function (NodeType) {
    NodeType["Tag"] = "Tag";
    NodeType["Code"] = "Code";
    NodeType["Text"] = "Text";
    NodeType["Root"] = "Root";
    NodeType["Directive"] = "Directive";
})(NodeType = exports.NodeType || (exports.NodeType = {}));
var BaseNode = (function () {
    function BaseNode(type) {
        this.parent = null;
        this.depth = 0;
        this.type = type;
    }
    BaseNode.prototype.setParent = function (parent) {
        this.parent = parent;
        this.depth = this.parent.getDepth() + 1;
    };
    BaseNode.prototype.getParent = function () {
        return this.parent;
    };
    BaseNode.prototype.getDepth = function () {
        return this.depth;
    };
    return BaseNode;
}());
exports.default = BaseNode;
var TagNode = (function (_super) {
    __extends(TagNode, _super);
    function TagNode(tag) {
        var _this = _super.call(this, NodeType.Tag) || this;
        _this.attrs = [];
        _this.children = [];
        _this.tag = tag;
        return _this;
    }
    TagNode.prototype.setAttrs = function (attrs) {
        this.attrs = attrs;
    };
    TagNode.prototype.getAttrs = function () {
        return this.attrs;
    };
    TagNode.prototype.appendChild = function (child) {
        this.children.push(child);
        child.setParent(this);
    };
    TagNode.prototype.getChildren = function () {
        return this.children;
    };
    TagNode.prototype.getWidth = function () {
        return this.children.length;
    };
    TagNode.prototype.toString = function () {
        return {
            tag: this.tag,
            type: this.type,
            attrs: this.attrs,
            depth: this.depth,
            children: this.children.map(function (item) {
                return item.toString();
            })
        };
    };
    return TagNode;
}(BaseNode));
exports.TagNode = TagNode;
var TextNode = (function (_super) {
    __extends(TextNode, _super);
    function TextNode(text) {
        var _this = _super.call(this, NodeType.Text) || this;
        _this.text = text;
        return _this;
    }
    TextNode.prototype.setText = function (text) {
        this.text = text;
    };
    TextNode.prototype.getText = function () {
        return this.text;
    };
    TextNode.prototype.toString = function () {
        return {
            type: this.type,
            text: this.text
        };
    };
    return TextNode;
}(BaseNode));
exports.TextNode = TextNode;
var DirectiveNode = (function (_super) {
    __extends(DirectiveNode, _super);
    function DirectiveNode(data) {
        if (data === void 0) { data = ''; }
        var _this = _super.call(this, NodeType.Directive) || this;
        _this.data = data;
        return _this;
    }
    DirectiveNode.prototype.setData = function (data) {
        this.data = data;
    };
    DirectiveNode.prototype.toString = function () {
        return {
            type: this.type,
            data: this.data
        };
    };
    return DirectiveNode;
}(BaseNode));
exports.DirectiveNode = DirectiveNode;


/***/ }),

/***/ "./src/server/core/html-parser/Tree.ts":
/*!*********************************************!*\
  !*** ./src/server/core/html-parser/Tree.ts ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Node_1 = __webpack_require__(/*! ./Node */ "./src/server/core/html-parser/Node.ts");
var ASTree = (function () {
    function ASTree() {
        this.depth = 0;
        this.width = 0;
        this.stack = [];
        this.root = new Node_1.TagNode('root');
        this.current = this.root;
    }
    ASTree.prototype.buildTagNode = function (tag, unary) {
        if (unary === void 0) { unary = false; }
        var node = new Node_1.TagNode(tag);
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
        var node = new Node_1.TextNode(text);
        this.append(this.current, node);
        return node;
    };
    ASTree.prototype.buildDirectiveNode = function (data) {
        var node = new Node_1.DirectiveNode(data);
        this.append(this.current, node);
        return node;
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
    ASTree.prototype.toString = function (space) {
        if (space === void 0) { space = 4; }
        return JSON.stringify(this.root.toString(), null, space);
    };
    return ASTree;
}());
exports.default = ASTree;


/***/ }),

/***/ "./src/server/core/html-parser/index.ts":
/*!**********************************************!*\
  !*** ./src/server/core/html-parser/index.ts ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Tree_1 = __webpack_require__(/*! ./Tree */ "./src/server/core/html-parser/Tree.ts");
var regexp_1 = __webpack_require__(/*! ./regexp */ "./src/server/core/html-parser/regexp.ts");
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
            this.asTree.buildDirectiveNode(match[1]);
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
            return this.asTree.buildTagNode(match[1], false);
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
            this.asTree.buildTagNode(match[1], true);
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

/***/ "./src/server/core/html-parser/regexp.ts":
/*!***********************************************!*\
  !*** ./src/server/core/html-parser/regexp.ts ***!
  \***********************************************/
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
        this.doctype = /^<!DOCTYPE ([^>]+)>/i;
        this.comment = /^<!--/;
        this.conditionalComment = /^<!\[/;
        this.ltRE = /&lt;/g;
        this.gtRE = /&gt;/g;
        this.nlRE = /&#10;/g;
        this.ampRE = /&amp;/g;
        this.quoteRE = /&quot;/g;
        this.space = /^\s/;
        this.checline = /^[\r\n]/;
    }
    return Regexp;
}());
exports.default = new Regexp();


/***/ }),

/***/ "./src/server/index.ts":
/*!*****************************!*\
  !*** ./src/server/index.ts ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var html_parser_1 = __webpack_require__(/*! ./core/html-parser */ "./src/server/core/html-parser/index.ts");
var parser = new html_parser_1.default();
parser.parseHtml("\n<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n    <meta charset=\"UTF-8\">\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n    <meta http-equiv=\"X-UA-Compatible\" content=\"ie=edge\">\n    <title>Document</title>\n</head>\n<body>\n    <div></div>\n</body>\n</html>");
console.log(parser.toString());
module.exports.HtmlParser = html_parser_1.default;


/***/ })

/******/ })));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NlcnZlci9jb3JlL2h0bWwtcGFyc2VyL05vZGUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NlcnZlci9jb3JlL2h0bWwtcGFyc2VyL1RyZWUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NlcnZlci9jb3JlL2h0bWwtcGFyc2VyL2luZGV4LnRzIiwid2VicGFjazovLy8uL3NyYy9zZXJ2ZXIvY29yZS9odG1sLXBhcnNlci9yZWdleHAudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NlcnZlci9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxrREFBMEMsZ0NBQWdDO0FBQzFFO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZ0VBQXdELGtCQUFrQjtBQUMxRTtBQUNBLHlEQUFpRCxjQUFjO0FBQy9EOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpREFBeUMsaUNBQWlDO0FBQzFFLHdIQUFnSCxtQkFBbUIsRUFBRTtBQUNySTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBc0QsK0RBQStEOztBQUVySDtBQUNBOzs7QUFHQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbEZBLElBQVksUUFNWDtBQU5ELFdBQVksUUFBUTtJQUNoQix1QkFBVztJQUNYLHlCQUFhO0lBQ2IseUJBQWE7SUFDYix5QkFB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LE9BQU8sR0FBRyxJQUFJLENBQUMsWUFBWSxHQUFHLFFBQVEsQ0FBQyxDQUFDO1FBQzVELFlBQU8sR0FBRyxzQkFBc0IsQ0FBQztRQUNqQyxZQUFPLEdBQUcsT0FBTyxDQUFDO1FBQ2xCLHVCQUFrQixHQUFHLE9BQU8sQ0FBQztRQUc3QixTQUFJLEdBQUcsT0FBTztRQUNkLFNBQUksR0FBRyxPQUFPO1FBQ2QsU0FBSSxHQUFHLFFBQVE7UUFDZixVQUFLLEdBQUcsUUFBUTtRQUNoQixZQUFPLEdBQUcsU0FBUztRQUVuQixVQUFLLEdBQUcsS0FBSyxDQUFDO1FBQ2QsYUFBUSxHQUFHLFNBQVMsQ0FBQztJQUN6QixDQUFDO0lBQUQsYUFBQztBQUFELENBQUM7QUFFRCxrQkFBZSxJQUFJLE1BQU0sRUFBRSxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7QUNwQzVCLDRHQUE0QztBQUU1QyxJQUFJLE1BQU0sR0FBRyxJQUFJLHFCQUFVLEVBQUUsQ0FBQztBQUM5QixNQUFNLENBQUMsU0FBUyxDQUFDLDZTQVlULENBQ1A7QUFFRCxPQUFPLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDO0FBRS9CLE1BQU0sQ0FBQyxPQUFPLENBQUMsVUFBVSxHQUFHLHFCQUFVIiwiZmlsZSI6InNlcnZlci5idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9zZXJ2ZXIvaW5kZXgudHNcIik7XG4iLCJleHBvcnQgZW51bSBOb2RlVHlwZSB7XHJcbiAgICBUYWcgPSAnVGFnJyxcclxuICAgIENvZGUgPSAnQ29kZScsXHJcbiAgICBUZXh0ID0gJ1RleHQnLFxyXG4gICAgUm9vdCA9ICdSb290JyxcclxuICAgIERpcmVjdGl2ZSA9ICdEaXJlY3RpdmUnXHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgSUF0dHIge1xyXG4gICAgbmFtZTogc3RyaW5nXHJcbiAgICB2YWx1ZTogc3RyaW5nXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEJhc2VOb2RlIHtcclxuICAgIHR5cGU6IE5vZGVUeXBlXHJcbiAgICBwYXJlbnQ6IFRhZ05vZGUgfCBudWxsID0gbnVsbFxyXG4gICAgZGVwdGg6IG51bWJlciA9IDBcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcih0eXBlOiBOb2RlVHlwZSkge1xyXG4gICAgICAgIHRoaXMudHlwZSA9IHR5cGU7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0UGFyZW50KHBhcmVudDogVGFnTm9kZSkge1xyXG4gICAgICAgIHRoaXMucGFyZW50ID0gcGFyZW50O1xyXG4gICAgICAgIHRoaXMuZGVwdGggPSB0aGlzLnBhcmVudC5nZXREZXB0aCgpICsgMTtcclxuICAgIH1cclxuXHJcbiAgICBnZXRQYXJlbnQoKTogVGFnTm9kZSB8IG51bGwge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnBhcmVudDtcclxuICAgIH1cclxuXHJcbiAgICBnZXREZXB0aCgpOiBudW1iZXIge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmRlcHRoO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgVGFnTm9kZSBleHRlbmRzIEJhc2VOb2RlIHtcclxuICAgIHRhZzogc3RyaW5nXHJcbiAgICBhdHRyczogQXJyYXk8SUF0dHI+ID0gW11cclxuICAgIGNoaWxkcmVuOiBBcnJheTxUYWdOb2RlIHwgVGV4dE5vZGUgfCBEaXJlY3RpdmVOb2RlPiA9IFtdXHJcblxyXG4gICAgY29uc3RydWN0b3IoXHJcbiAgICAgICAgdGFnOiBzdHJpbmdcclxuICAgICkge1xyXG4gICAgICAgIHN1cGVyKE5vZGVUeXBlLlRhZylcclxuICAgICAgICB0aGlzLnRhZyA9IHRhZ1xyXG4gICAgfVxyXG5cclxuICAgIHNldEF0dHJzKGF0dHJzOiBBcnJheTxJQXR0cj4pIHtcclxuICAgICAgICB0aGlzLmF0dHJzID0gYXR0cnM7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0QXR0cnMoKTogQXJyYXk8SUF0dHI+IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5hdHRycztcclxuICAgIH1cclxuXHJcbiAgICBhcHBlbmRDaGlsZChjaGlsZDogVGFnTm9kZSB8IFRleHROb2RlIHwgRGlyZWN0aXZlTm9kZSkge1xyXG4gICAgICAgIHRoaXMuY2hpbGRyZW4ucHVzaChjaGlsZCk7XHJcbiAgICAgICAgY2hpbGQuc2V0UGFyZW50KHRoaXMpO1xyXG4gICAgfVxyXG5cclxuICAgIGdldENoaWxkcmVuKCk6IEFycmF5PFRhZ05vZGUgfCBUZXh0Tm9kZSB8IERpcmVjdGl2ZU5vZGU+IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5jaGlsZHJlbjtcclxuICAgIH1cclxuXHJcbiAgICBnZXRXaWR0aCgpOiBudW1iZXIge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmNoaWxkcmVuLmxlbmd0aDtcclxuICAgIH1cclxuXHJcbiAgICB0b1N0cmluZygpOiBhbnkge1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIHRhZzogdGhpcy50YWcsXHJcbiAgICAgICAgICAgIHR5cGU6IHRoaXMudHlwZSxcclxuICAgICAgICAgICAgYXR0cnM6IHRoaXMuYXR0cnMsXHJcbiAgICAgICAgICAgIGRlcHRoOiB0aGlzLmRlcHRoLFxyXG4gICAgICAgICAgICBjaGlsZHJlbjogdGhpcy5jaGlsZHJlbi5tYXAoaXRlbSA9PiB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gaXRlbS50b1N0cmluZygpXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgVGV4dE5vZGUgZXh0ZW5kcyBCYXNlTm9kZSB7XHJcbiAgICB0ZXh0OiBzdHJpbmdcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihcclxuICAgICAgICB0ZXh0OiBzdHJpbmdcclxuICAgICkge1xyXG4gICAgICAgIHN1cGVyKE5vZGVUeXBlLlRleHQpXHJcbiAgICAgICAgdGhpcy50ZXh0ID0gdGV4dFxyXG4gICAgfVxyXG5cclxuICAgIHNldFRleHQodGV4dDogc3RyaW5nKSB7XHJcbiAgICAgICAgdGhpcy50ZXh0ID0gdGV4dDtcclxuICAgIH1cclxuXHJcbiAgICBnZXRUZXh0KCk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMudGV4dDtcclxuICAgIH1cclxuXHJcbiAgICB0b1N0cmluZygpOiBhbnkge1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIHR5cGU6IHRoaXMudHlwZSxcclxuICAgICAgICAgICAgdGV4dDogdGhpcy50ZXh0XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5cclxuZXhwb3J0IGNsYXNzIERpcmVjdGl2ZU5vZGUgZXh0ZW5kcyBCYXNlTm9kZSB7XHJcbiAgICBkYXRhOiBzdHJpbmdcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihkYXRhOiBzdHJpbmcgPSAnJykge1xyXG4gICAgICAgIHN1cGVyKE5vZGVUeXBlLkRpcmVjdGl2ZSlcclxuXHJcbiAgICAgICAgdGhpcy5kYXRhID0gZGF0YVxyXG4gICAgfVxyXG5cclxuICAgIHNldERhdGEoZGF0YTogc3RyaW5nKSB7XHJcbiAgICAgICAgdGhpcy5kYXRhID0gZGF0YVxyXG4gICAgfVxyXG5cclxuICAgIHRvU3RyaW5nKCk6IGFueSB7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgdHlwZTogdGhpcy50eXBlLFxyXG4gICAgICAgICAgICBkYXRhOiB0aGlzLmRhdGFcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG59IiwiaW1wb3J0IHsgVGFnTm9kZSwgVGV4dE5vZGUsIERpcmVjdGl2ZU5vZGUsIE5vZGVUeXBlLCBJQXR0ciB9IGZyb20gJy4vTm9kZSdcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEFTVHJlZSB7XHJcbiAgICByb290OiBUYWdOb2RlO1xyXG4gICAgZGVwdGg6IG51bWJlciA9IDA7XHJcbiAgICB3aWR0aDogbnVtYmVyID0gMDtcclxuICAgIHN0YWNrOiBBcnJheTxUYWdOb2RlPiA9IFtdO1xyXG4gICAgY3VycmVudDogVGFnTm9kZTtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICB0aGlzLnJvb3QgPSBuZXcgVGFnTm9kZSgncm9vdCcpO1xyXG4gICAgICAgIHRoaXMuY3VycmVudCA9IHRoaXMucm9vdDtcclxuICAgIH1cclxuXHJcbiAgICBcclxuICAgIC8qKlxyXG4gICAgICog5p6E6YCg5LiA5LiqVGFn6IqC54K5XHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IHRhZyDmoIfnrb7lkI1cclxuICAgICAqIEBwYXJhbSB7Ym9vbGVhbn0gW3VuYXJ5PWZhbHNlXVxyXG4gICAgICogQG1lbWJlcm9mIEFTVHJlZVxyXG4gICAgICovXHJcbiAgICBidWlsZFRhZ05vZGUodGFnOiBzdHJpbmcsIHVuYXJ5OiBib29sZWFuID0gZmFsc2UpOiBUYWdOb2RlIHtcclxuICAgICAgICBsZXQgbm9kZSA9IG5ldyBUYWdOb2RlKHRhZyk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgaWYgKCF1bmFyeSkge1xyXG4gICAgICAgICAgICAvLyDkuI3mmK/nu5PmnZ/moIfnrb5cclxuICAgICAgICAgICAgdGhpcy5hcHBlbmQodGhpcy5jdXJyZW50LCBub2RlKTsgLy8g5re75Yqg6IqC54K55Yiw5b2T5YmN54i26IqC54K555qEQ2hpbGRcclxuICAgICAgICAgICAgc3dpdGNoKHRhZy50b0xvd2VyQ2FzZSgpKSB7XHJcbiAgICAgICAgICAgICAgICBjYXNlICdtZXRhJzpcclxuICAgICAgICAgICAgICAgICAgICAvLyBtZXRhIOayoeaciemXreWQiO+8jOS5n+S4jemcgOimgeWFpeagiFxyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgZGVmYXVsdDogXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jdXJyZW50ID0gbm9kZTsgLy8g5b2T5YmN55qE54i26IqC54K55YiH5o2i5Yiw5b2T5YmN6IqC54K5XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGFjay5wdXNoKG5vZGUpO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgLy8g57uT5p2f5qCH562+XHJcbiAgICAgICAgICAgIGxldCBwb3M7XHJcbiAgICAgICAgICAgIGZvciAocG9zID0gdGhpcy5zdGFjay5sZW5ndGggLSAxOyBwb3MgPj0gMDsgcG9zLS0pIHtcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLnN0YWNrW3Bvc10udGFnID09PSBub2RlLnRhZykgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKHBvcyA+PSAwKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBwYXJlbnQgPSB0aGlzLnN0YWNrW3Bvc10uZ2V0UGFyZW50KCk7IC8vIOWPluWHuuW8gOWni+agh+etvuS4reS4iuS4gOWxgueahOeItuiKgueCueW9k+WBmuW9k+WJjeiKgueCuVxyXG4gICAgICAgICAgICAgICAgaWYgKCFwYXJlbnQpIHRocm93KG5ldyBFcnJvcignUGFyZW50IE5vZGUgaXMgTnVsbCEnKSk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmN1cnJlbnQgPSBwYXJlbnQ7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnN0YWNrLmxlbmd0aCA9IHBvczsgLy8g5riF6Zmk5aCG5qCIXHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAodGFnLnRvTG93ZXJDYXNlKCkgPT09ICdicicpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuYXBwZW5kKHRoaXMuY3VycmVudCwgbm9kZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBub2RlO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog5Li65paH5pys5Yib5bu65LiA5Liq57uT54K577yM5Zug5Li65paH5pys5LiN6ZyA6KaB6Zet5ZCI77yM55u05o6l5o+S5Yiw5b2T5YmN54i26IqC54K55Lit77yM5LiN55So5YWl5qCIXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IHRleHRcclxuICAgICAqIEBtZW1iZXJvZiBIdG1sUGFyc2VyXHJcbiAgICAgKi9cclxuICAgIGJ1aWxkVGV4dE5vZGUodGV4dDogc3RyaW5nKTogVGV4dE5vZGUge1xyXG4gICAgICAgIGxldCBub2RlID0gbmV3IFRleHROb2RlKHRleHQpO1xyXG4gICAgICAgIHRoaXMuYXBwZW5kKHRoaXMuY3VycmVudCwgbm9kZSk7XHJcbiAgICAgICAgcmV0dXJuIG5vZGU7XHJcbiAgICB9XHJcblxyXG4gICAgYnVpbGREaXJlY3RpdmVOb2RlKGRhdGE6IHN0cmluZyk6IERpcmVjdGl2ZU5vZGUge1xyXG4gICAgICAgIGxldCBub2RlID0gbmV3IERpcmVjdGl2ZU5vZGUoZGF0YSlcclxuICAgICAgICB0aGlzLmFwcGVuZCh0aGlzLmN1cnJlbnQsIG5vZGUpO1xyXG4gICAgICAgIHJldHVybiBub2RlO1xyXG4gICAgfVxyXG5cclxuICAgIGFwcGVuZChwYXJlbnQ6IFRhZ05vZGUsIGNoaWxkOiBUYWdOb2RlIHwgVGV4dE5vZGUgfCBEaXJlY3RpdmVOb2RlKSB7XHJcbiAgICAgICAgcGFyZW50LmFwcGVuZENoaWxkKGNoaWxkKTtcclxuXHJcbiAgICAgICAgdGhpcy5zZXRXaWR0aChwYXJlbnQuZ2V0V2lkdGgoKSk7XHJcbiAgICAgICAgdGhpcy5zZXREZXB0aChjaGlsZC5nZXREZXB0aCgpKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXRSb290KCk6IFRhZ05vZGUge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnJvb3Q7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0V2lkdGgod2lkdGg6IG51bWJlcikge1xyXG4gICAgICAgIHRoaXMud2lkdGggPSB3aWR0aCA+IHRoaXMud2lkdGggPyB3aWR0aCA6IHRoaXMud2lkdGg7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0V2lkdGgoKTogbnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gdGhpcy53aWR0aDtcclxuICAgIH1cclxuXHJcbiAgICBzZXREZXB0aChkZXB0aDogbnVtYmVyKSB7XHJcbiAgICAgICAgdGhpcy5kZXB0aCA9IGRlcHRoID4gdGhpcy5kZXB0aCA/IGRlcHRoIDogdGhpcy5kZXB0aDtcclxuICAgIH1cclxuXHJcbiAgICBnZXREZXB0aCgpOiBudW1iZXIge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmRlcHRoO1xyXG4gICAgfVxyXG5cclxuICAgIHRvU3RyaW5nKHNwYWNlID0gNCk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIEpTT04uc3RyaW5naWZ5KHRoaXMucm9vdC50b1N0cmluZygpLCBudWxsLCBzcGFjZSlcclxuICAgIH1cclxufSIsIlxyXG5cclxuaW1wb3J0IEFTVHJlZSBmcm9tICcuL1RyZWUnXHJcbmltcG9ydCB7IFRhZ05vZGUsIFRleHROb2RlLCBJQXR0ciB9IGZyb20gJy4vTm9kZSdcclxuaW1wb3J0IHJlZ2V4cCBmcm9tICcuL3JlZ2V4cCdcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEh0bWxQYXJzZXIge1xyXG5cclxuICAgIGh0bWw6IHN0cmluZyA9ICcnOyAvLyDmqKHmnb9cclxuICAgIGluZGV4OiBudW1iZXIgPSAwOyAvLyDlvZPliY3ntKLlvJVcclxuXHJcbiAgICBhc1RyZWU6IEFTVHJlZSA9IG5ldyBBU1RyZWUoKTtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgcGFyc2VIdG1sKGh0bWw6IHN0cmluZykge1xyXG4gICAgICAgIHRoaXMucmVzZXQoKTtcclxuICAgICAgICB0aGlzLmh0bWwgPSBodG1sO1xyXG4gICAgICAgIHdoaWxlKHRydWUpIHtcclxuICAgICAgICAgICAgLy8g5Yy56YWN5paH5pysXHJcbiAgICAgICAgICAgIHRoaXMubWF0Y2hUZXh0KClcclxuICAgICAgICAgICAgLy8g5Yy56YWN5rOo6YeKXHJcbiAgICAgICAgICAgIGlmICh0aGlzLm1hdGNoQ29tbWVudCgpKSBjb250aW51ZTtcclxuICAgICAgICAgICAgaWYgKHRoaXMubWF0Y2hDb25kaXRpb25Db21tZW50KCkpIGNvbnRpbnVlO1xyXG4gICAgICAgICAgICAvLyDljLnphY3mlofmoaPnsbvlnotcclxuICAgICAgICAgICAgaWYgKHRoaXMubWF0Y2hEb2N0eXBlKCkpIGNvbnRpbnVlO1xyXG4gICAgICAgICAgICAvLyDljLnphY3nu5PmnZ/moIfnrb5cclxuICAgICAgICAgICAgdGhpcy5tYXRjaEVuZFRhZygpO1xyXG4gICAgICAgICAgICAvLyDljLnphY3lvIDlp4vmoIfnrb5cclxuICAgICAgICAgICAgdGhpcy5tYXRjaFN0YXJ0VGFnKCk7XHJcblxyXG4gICAgICAgICAgICAvLyDmo4Dmn6XmmK/lkKbnu5PmnZ9cclxuICAgICAgICAgICAgaWYgKHRoaXMuZW9mKCkpIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBhZHZhbmNlKG46IG51bWJlcik6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuaW5kZXggKz0gbjtcclxuICAgICAgICB0aGlzLmh0bWwgPSB0aGlzLmh0bWwuc3Vic3RyaW5nKG4pO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIOWMuemFjeaWh+acrFxyXG4gICAgbWF0Y2hUZXh0KCkge1xyXG4gICAgICAgIGxldCBpbmRleCA9IHRoaXMuaHRtbC5pbmRleE9mKCc8Jyk7XHJcbiAgICAgICAgaWYgKGluZGV4IDwgMCkge1xyXG4gICAgICAgICAgICB0aGlzLmh0bWwgPSAnJztcclxuICAgICAgICB9IGVsc2UgaWYgKGluZGV4ID4gMCkge1xyXG4gICAgICAgICAgICB0aGlzLmFzVHJlZS5idWlsZFRleHROb2RlKHRoaXMuaHRtbC5zdWJzdHJpbmcoMCwgaW5kZXgpKTtcclxuICAgICAgICAgICAgdGhpcy5hZHZhbmNlKGluZGV4KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLy8g5Yy56YWN5paH5qGj57G75Z6LXHJcbiAgICBtYXRjaERvY3R5cGUoKTogYm9vbGVhbiB7XHJcbiAgICAgICAgbGV0IG1hdGNoID0gdGhpcy5odG1sLm1hdGNoKHJlZ2V4cC5kb2N0eXBlKTtcclxuICAgICAgICBpZiAobWF0Y2gpIHtcclxuICAgICAgICAgICAgdGhpcy5hZHZhbmNlKG1hdGNoWzBdLmxlbmd0aClcclxuICAgICAgICAgICAgdGhpcy5hc1RyZWUuYnVpbGREaXJlY3RpdmVOb2RlKG1hdGNoWzFdKVxyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8vIOWMuemFjeazqOmHilxyXG4gICAgbWF0Y2hDb21tZW50KCk6IGJvb2xlYW4ge1xyXG4gICAgICAgIGlmIChyZWdleHAuY29tbWVudC50ZXN0KHRoaXMuaHRtbCkpIHtcclxuICAgICAgICAgICAgbGV0IGNvbW1lbnRFbmQgPSB0aGlzLmh0bWwuaW5kZXhPZignLS0+Jyk7XHJcblxyXG4gICAgICAgICAgICBpZiAoY29tbWVudEVuZCA+PSAwKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmFkdmFuY2UoY29tbWVudEVuZCArIDMpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICBtYXRjaENvbmRpdGlvbkNvbW1lbnQoKTogYm9vbGVhbiB7XHJcbiAgICAgICAgaWYgKHJlZ2V4cC5jb25kaXRpb25hbENvbW1lbnQudGVzdCh0aGlzLmh0bWwpKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGNvbmRpdGlvbmFsRW5kID0gdGhpcy5odG1sLmluZGV4T2YoJ10+JylcclxuICBcclxuICAgICAgICAgICAgaWYgKGNvbmRpdGlvbmFsRW5kID49IDApIHtcclxuICAgICAgICAgICAgICB0aGlzLmFkdmFuY2UoY29uZGl0aW9uYWxFbmQgKyAyKVxyXG4gICAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgLy8g5Yy56YWN5byA5aeL5qCH562+XHJcbiAgICBtYXRjaFN0YXJ0VGFnKCk6IGJvb2xlYW4ge1xyXG4gICAgICAgIGxldCBub2RlOiBUYWdOb2RlIHwgbnVsbCA9IHRoaXMubWF0Y2hTdGFydFRhZ09wZW4oKTtcclxuICAgICAgICBpZiAobm9kZSkge1xyXG4gICAgICAgICAgICB0aGlzLm1hdGNoU3RhcnRUYWdDbG9zZShub2RlKTtcclxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvLyDljLnphY3lvIDlp4vmoIfnrb7nmoQgPHRhZyDpg6jliIZcclxuICAgIG1hdGNoU3RhcnRUYWdPcGVuKCk6IFRhZ05vZGUgfCBudWxsIHtcclxuICAgICAgICBsZXQgbWF0Y2ggPSBudWxsO1xyXG4gICAgICAgIGlmKCAobWF0Y2ggPSB0aGlzLmh0bWwubWF0Y2gocmVnZXhwLnN0YXJ0VGFnT3BlbikpICkge1xyXG4gICAgICAgICAgICB0aGlzLmFkdmFuY2UobWF0Y2hbMF0ubGVuZ3RoKVxyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5hc1RyZWUuYnVpbGRUYWdOb2RlKG1hdGNoWzFdLCBmYWxzZSlcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICB9XHJcblxyXG4gICAgLy8g5Yy56YWN5byA5aeL5qCH562+55qEIGF0dHJzPiDpg6jliIZcclxuICAgIG1hdGNoU3RhcnRUYWdDbG9zZShub2RlOiBUYWdOb2RlKTogYm9vbGVhbiB7XHJcbiAgICAgICAgbGV0IGNsb3NlTWF0Y2ggPSBudWxsO1xyXG4gICAgICAgIGxldCBhdHRyTWF0Y2ggPSBudWxsO1xyXG4gICAgICAgIGxldCBhdHRyTWF0Y2hlcyA9IFtdO1xyXG5cclxuICAgICAgICAvLyDorrDlvZVhdHRyc1xyXG4gICAgICAgIHdoaWxlICggIShjbG9zZU1hdGNoID0gdGhpcy5odG1sLm1hdGNoKHJlZ2V4cC5zdGFydFRhZ0Nsb3NlKSkgJiYgKGF0dHJNYXRjaCA9IHRoaXMuaHRtbC5tYXRjaChyZWdleHAuYXR0cmlidXRlKSkgKSB7XHJcbiAgICAgICAgICAgIHRoaXMuYWR2YW5jZShhdHRyTWF0Y2hbMF0ubGVuZ3RoKVxyXG4gICAgICAgICAgICBhdHRyTWF0Y2hlcy5wdXNoKGF0dHJNYXRjaClcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChjbG9zZU1hdGNoKSB7XHJcbiAgICAgICAgICAgIG5vZGUuc2V0QXR0cnModGhpcy5wYXJzZUF0dHJzKGF0dHJNYXRjaGVzKSk7XHJcbiAgICAgICAgICAgIHRoaXMuYWR2YW5jZShjbG9zZU1hdGNoWzBdLmxlbmd0aCk7XHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLy8g5Yy56YWN57uT5p2f5qCH562+XHJcbiAgICBtYXRjaEVuZFRhZygpIHtcclxuICAgICAgICBsZXQgbWF0Y2ggPSB0aGlzLmh0bWwubWF0Y2gocmVnZXhwLmVuZFRhZyk7XHJcbiAgICAgICAgaWYgKG1hdGNoKSB7XHJcbiAgICAgICAgICAgIHRoaXMuYWR2YW5jZShtYXRjaFswXS5sZW5ndGgpXHJcbiAgICAgICAgICAgIHRoaXMuYXNUcmVlLmJ1aWxkVGFnTm9kZShtYXRjaFsxXSwgdHJ1ZSlcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDop6PmnpBhdHRyc+eahOato+WImeWMuemFjVxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSB7QXJyYXk8YW55Pn0gYXR0ck1hdGNoZXMg5q2j5YiZ5Yy56YWN5pWw57uEXHJcbiAgICAgKiBAcmV0dXJucyB7QXJyYXk8SUF0dHI+fSBhdHRyc+aVsOe7hFxyXG4gICAgICogQG1lbWJlcm9mIEh0bWxQYXJzZXJcclxuICAgICAqL1xyXG4gICAgcGFyc2VBdHRycyhhdHRyTWF0Y2hlczogQXJyYXk8YW55Pik6IEFycmF5PElBdHRyPiB7XHJcbiAgICAgICAgbGV0IGF0dHJzID0gW107XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBhdHRyTWF0Y2hlcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBsZXQgYXJncyA9IGF0dHJNYXRjaGVzW2ldO1xyXG4gICAgICAgICAgICBpZiAoYXJnc1swXS5pbmRleE9mKCdcIlwiJykgPT09IC0xKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoYXJnc1szXSA9PT0gJycpIHtcclxuICAgICAgICAgICAgICAgICAgICBkZWxldGUgYXJnc1szXTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmIChhcmdzWzRdID09PSAnJykge1xyXG4gICAgICAgICAgICAgICAgICAgIGRlbGV0ZSBhcmdzWzRdO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYgKGFyZ3NbNV0gPT09ICcnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZGVsZXRlIGFyZ3NbNV07XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgbGV0IHZhbHVlID0gYXJnc1szXSB8fCBhcmdzWzRdIHx8IGFyZ3NbNV0gfHwgJyc7XHJcbiAgICAgICAgICAgIGF0dHJzW2ldID0ge1xyXG4gICAgICAgICAgICAgICAgbmFtZTogYXJnc1sxXSxcclxuICAgICAgICAgICAgICAgIHZhbHVlOiB0aGlzLmRlY29kZUF0dHIodmFsdWUsIHRydWUpXHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gYXR0cnM7XHJcbiAgICB9XHJcblxyXG4gICAgZGVjb2RlQXR0cih2YWx1ZTogc3RyaW5nLCBzaG91bGREZWNvZGVOZXdsaW5lczogYm9vbGVhbik6IHN0cmluZyB7XHJcbiAgICAgICAgaWYgKHNob3VsZERlY29kZU5ld2xpbmVzKSB7XHJcbiAgICAgICAgICAgIHZhbHVlID0gdmFsdWUucmVwbGFjZShyZWdleHAubmxSRSwgJ1xcbicpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdmFsdWVcclxuICAgICAgICAgICAgLnJlcGxhY2UocmVnZXhwLmx0UkUsICc8JylcclxuICAgICAgICAgICAgLnJlcGxhY2UocmVnZXhwLmd0UkUsICc+JylcclxuICAgICAgICAgICAgLnJlcGxhY2UocmVnZXhwLmFtcFJFLCAnJicpXHJcbiAgICAgICAgICAgIC5yZXBsYWNlKHJlZ2V4cC5xdW90ZVJFLCAnXCInKVxyXG4gICAgfVxyXG5cclxuICAgIGVvZigpOiBib29sZWFuIHtcclxuICAgICAgICBpZiAodGhpcy5odG1sID09PSAnJykgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIHJlc2V0KCkge1xyXG4gICAgICAgIHRoaXMuaHRtbCA9ICcnO1xyXG4gICAgICAgIHRoaXMuaW5kZXggPSAwO1xyXG4gICAgICAgIHRoaXMuYXNUcmVlID0gbmV3IEFTVHJlZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIGdldERlcHRoKCk6IG51bWJlciB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuYXNUcmVlLmdldERlcHRoKClcclxuICAgIH1cclxuXHJcbiAgICB0b1N0cmluZygpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmFzVHJlZS50b1N0cmluZygpO1xyXG4gICAgfVxyXG59IiwiY2xhc3MgUmVnZXhwIHtcclxuICAgIHNpbmdsZUF0dHJJZGVudGlmaWVyID0gLyhbXlxcc1wiJzw+Lz1dKykvO1xyXG4gICAgc2luZ2xlQXR0ckFzc2lnbiA9IC8oPzo9KS87XHJcbiAgICBzaW5nbGVBdHRyVmFsdWVzID0gW1xyXG4gICAgICAgIC8vIGF0dHIgdmFsdWUgZG91YmxlIHF1b3Rlc1xyXG4gICAgICAgIC9cIihbXlwiXSopXCIrLy5zb3VyY2UsXHJcbiAgICAgICAgLy8gYXR0ciB2YWx1ZSwgc2luZ2xlIHF1b3Rlc1xyXG4gICAgICAgIC8nKFteJ10qKScrLy5zb3VyY2UsXHJcbiAgICAgICAgLy8gYXR0ciB2YWx1ZSwgbm8gcXVvdGVzXHJcbiAgICAgICAgLyhbXlxcc1wiJz08PmBdKykvLnNvdXJjZVxyXG4gICAgXTtcclxuICAgIGF0dHJpYnV0ZSA9IG5ldyBSZWdFeHAoXHJcbiAgICAgICAgJ15cXFxccyonICsgdGhpcy5zaW5nbGVBdHRySWRlbnRpZmllci5zb3VyY2UgK1xyXG4gICAgICAgICcoPzpcXFxccyooJyArIHRoaXMuc2luZ2xlQXR0ckFzc2lnbi5zb3VyY2UgKyAnKScgK1xyXG4gICAgICAgICdcXFxccyooPzonICsgdGhpcy5zaW5nbGVBdHRyVmFsdWVzLmpvaW4oJ3wnKSArICcpKT8nXHJcbiAgICApO1xyXG4gICAgbmNuYW1lID0gJ1thLXpBLVpfXVtcXFxcd1xcXFwtXFxcXC5dKic7XHJcbiAgICBxbmFtZUNhcHR1cmUgPSAnKCg/OicgKyB0aGlzLm5jbmFtZSArICdcXFxcOik/JyArIHRoaXMubmNuYW1lICsgJyknO1xyXG4gICAgc3RhcnRUYWdPcGVuID0gbmV3IFJlZ0V4cCgnXjwnICsgdGhpcy5xbmFtZUNhcHR1cmUpO1xyXG4gICAgc3RhcnRUYWdDbG9zZSA9IC9eXFxzKihcXC8/KT4vO1xyXG4gICAgZW5kVGFnID0gbmV3IFJlZ0V4cCgnXjxcXFxcLycgKyB0aGlzLnFuYW1lQ2FwdHVyZSArICdbXj5dKj4nKTtcclxuICAgIGRvY3R5cGUgPSAvXjwhRE9DVFlQRSAoW14+XSspPi9pO1xyXG4gICAgY29tbWVudCA9IC9ePCEtLS87XHJcbiAgICBjb25kaXRpb25hbENvbW1lbnQgPSAvXjwhXFxbLztcclxuXHJcbiAgICBcclxuICAgIGx0UkUgPSAvJmx0Oy9nXHJcbiAgICBndFJFID0gLyZndDsvZ1xyXG4gICAgbmxSRSA9IC8mIzEwOy9nXHJcbiAgICBhbXBSRSA9IC8mYW1wOy9nXHJcbiAgICBxdW90ZVJFID0gLyZxdW90Oy9nXHJcblxyXG4gICAgc3BhY2UgPSAvXlxccy87XHJcbiAgICBjaGVjbGluZSA9IC9eW1xcclxcbl0vO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBuZXcgUmVnZXhwKCk7IiwiaW1wb3J0IEh0bWxQYXJzZXIgZnJvbSAnLi9jb3JlL2h0bWwtcGFyc2VyJztcclxuXHJcbmxldCBwYXJzZXIgPSBuZXcgSHRtbFBhcnNlcigpO1xyXG5wYXJzZXIucGFyc2VIdG1sKGBcclxuPCFET0NUWVBFIGh0bWw+XHJcbjxodG1sIGxhbmc9XCJlblwiPlxyXG48aGVhZD5cclxuICAgIDxtZXRhIGNoYXJzZXQ9XCJVVEYtOFwiPlxyXG4gICAgPG1ldGEgbmFtZT1cInZpZXdwb3J0XCIgY29udGVudD1cIndpZHRoPWRldmljZS13aWR0aCwgaW5pdGlhbC1zY2FsZT0xLjBcIj5cclxuICAgIDxtZXRhIGh0dHAtZXF1aXY9XCJYLVVBLUNvbXBhdGlibGVcIiBjb250ZW50PVwiaWU9ZWRnZVwiPlxyXG4gICAgPHRpdGxlPkRvY3VtZW50PC90aXRsZT5cclxuPC9oZWFkPlxyXG48Ym9keT5cclxuICAgIDxkaXY+PC9kaXY+XHJcbjwvYm9keT5cclxuPC9odG1sPmBcclxuKVxyXG5cclxuY29uc29sZS5sb2cocGFyc2VyLnRvU3RyaW5nKCkpO1xyXG5cclxubW9kdWxlLmV4cG9ydHMuSHRtbFBhcnNlciA9IEh0bWxQYXJzZXIiXSwic291cmNlUm9vdCI6IiJ9