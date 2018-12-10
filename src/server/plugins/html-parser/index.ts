const singleAttrIdentifier = /([^\s"'<>/=]+)/;
const singleAttrAssign = /(?:=)/;
const singleAttrValues = [
    // attr value double quotes
    /"([^"]*)"+/.source,
    // attr value, single quotes
    /'([^']*)'+/.source,
    // attr value, no quotes
    /([^\s"'=<>`]+)/.source
];
const attribute = new RegExp(
    '^\\s*' + singleAttrIdentifier.source +
    '(?:\\s*(' + singleAttrAssign.source + ')' +
    '\\s*(?:' + singleAttrValues.join('|') + '))?'
);
const ncname = '[a-zA-Z_][\\w\\-\\.]*';
const qnameCapture = '((?:' + ncname + '\\:)?' + ncname + ')';
const startTagOpen = new RegExp('^<' + qnameCapture);
const startTagClose = /^\s*(\/?)>/;
const endTag = new RegExp('^<\\/' + qnameCapture + '[^>]*>');
const doctype = /^<!DOCTYPE [^>]+>/i;
const comment = /^<!--/;
const conditionalComment = /^<!\[/;



import { DomType, DomNode, TextNode } from './Node/index'

export default class HtmlParser {

    html: string; // 模板
    index: number = 0; // 当前索引
    stack: Array<DomNode> = []; //

    root: DomNode; 
    currentParent: DomNode;

    constructor(html: string) {
        console.log(html)
        this.html = html;
        this.root = new DomNode('root', DomType.Root);
        this.currentParent = this.root;
    }

    /**
     * 创建节点，并插入ast树中
     *
     * @param {string} tag 标签名
     * @param {DomType} type 类型
     * @param {Array<string>} attrs 属性
     * @param {boolean} unary 是否结束标签
     * @memberof HtmlParser
     */
    buildDomNode(tag: string, type: DomType, attrs: Array<string> = [], unary: boolean = false) {
        let node = new DomNode(tag, type, attrs);
        
        if (!unary) {
            // 不是结束标签
            switch (type) {
                case DomType.Tag:
                    // 添加节点到当前父节点的Child
                    this.currentParent.appendChild(node);
                    // 设置当前节点的父节点
                    node.setParent(this.currentParent);
                    // 当前的父节点切换到当前节点
                    this.currentParent = node;
                    break;
            }
            this.stack.push(node);
        } else {
            // 结束标签
            let pos;
            for (pos = this.stack.length - 1; pos >= 0; pos--) {
                if (this.stack[pos].tag === node.tag) break;
            }
            if (pos >= 0) {
                // 取出开始标签中上一层的父节点当做当前节点
                this.currentParent = this.stack[pos].getParent() || this.root;
                // 清除堆栈
                this.stack.length = pos;
            } else if (tag.toLowerCase() === 'br') {
                this.currentParent.appendChild(node);
            }
        }
    }

    buildTextNode(text: string) {
        this.currentParent.appendChild(new TextNode(text));
    }

    parseHtml() {
        this.matchStartTag();


        while(true) {
            
            // 匹配文本
            this.matchText()
            // 匹配注释
            if (this.matchComment()) continue;
            // 匹配文档类型
            if (this.matchDoctype()) continue;
            // 匹配结束标签
            this.matchEndTag();
            // 匹配开始标签
            this.matchStartTag();

            // 检查是否结束
            if (this.eof()) break;
        }

        console.log(this.root.getChildren())
    }

    advance(n: number): void {
        this.index += n;
        this.html = this.html.substring(n);
    }

    matchText() {
        let index = this.html.indexOf('<');
        if (index < 0) {
            this.html = '';
        } else if (index > 0) {
            this.buildTextNode(this.html.substring(0, index));
            this.advance(index);
        }
    }

    matchDoctype(): boolean {
        let match = this.html.match(doctype);
        if (match) {
            this.advance(match[0].length)
            return true;
        } else {
            return false;
        }
    }

    matchComment(): boolean {
        if (comment.test(this.html)) {
            let commentEnd = this.html.indexOf('-->');

            if (commentEnd >= 0) {
                this.advance(commentEnd + 3);
                return true;
            }
        }

        return false;
    }

    matchStartTag() {
        return this.matchStartTagOpen() && this.matchStartTagClose();
    }

    // 匹配开始标签的 <tag 部分
    matchStartTagOpen() {
        let match = null;

        if( match = this.html.match(startTagOpen) ) {
            this.advance(match[0].length)
            this.buildDomNode(match[1], DomType.Tag, [], false)
            return true;
        }
        return false;
    }

    // 匹配开始标签的 attrs> 部分
    matchStartTagClose() {
        let closeMatch = null;
        let attrMatch = null; 
        while ( !(closeMatch = this.html.match(startTagClose)) && (attrMatch = this.html.match(attribute)) ) {
            this.advance(attrMatch[0].length)
            // TODO: 记录attrs
        }

        if (closeMatch) {
            this.advance(closeMatch[0].length);
            return true;
        } else {
            return false;
        }
    }

    matchEndTag() {
        let match = this.html.match(endTag);
        if (match) {
            this.advance(match[0].length)
            this.buildDomNode(match[1], DomType.Tag, [], true)
        }
    }

    eof() {
        if (this.html === '') return true;
        return false;
    }

    format() {
        return this.root.format();
    }
}

let parser = new HtmlParser(`
    <div><a>123</a></div>
`)

parser.parseHtml()
console.log(JSON.stringify(parser.format()));
