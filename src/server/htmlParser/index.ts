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



import DomNode, { DomType } from './Node'

export default class HtmlParser {

    html: string; // 模板
    index: number = 0; // 当前索引
    stack: Array<DomNode> = []; //
    startStack: Array<DomNode> = [];
    endStack: Array<any> = [];

    root: DomNode; 
    currentParent: DomNode | null = null;

    constructor(html: string) {
        this.html = html;
        this.root = new DomNode('root', DomType.Root)
    }

    parse(html: string) {
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
    build(tag: string, type: DomType, attrs: Array<string>, unary: boolean) {
        let node = new DomNode(tag, type, attrs);

        // 有父节点，并且不是结束标签
        if (this.currentParent && !unary) {
            this.currentParent.appendChild(node);
            node.setParent(this.currentParent);
        }

        
        if (!unary) {
            // 不是结束标签
            switch (type) {
                case DomType.Tag:
                    // 当前的父节点切换到当前节点
                    this.currentParent = node;
                    this.startStack.push(node);
                    break;
            }
            this.stack.push(node);
        } else {
            // 记录结束标签
            this.endStack.push(node);
            // 取出开始标签中上一层的父节点当做当前节点
            this.currentParent = this.startStack[this.endStack.length - 1].getParent();
        }
    }

    parseHtml(html: string) {
        let stack = [];
        let index = 0; // 记录html当前索引
        let isUnaryTag = false;

        while(true) {
            // 匹配注释
            if (this.matchComment()) continue;
            // 匹配文档类型
            if (this.matchDoctype()) continue;
            // 匹配开始标签
            this.matchStartTag();
            // 匹配结束标签

        }
    }

    advance(n: number): void {
        this.index += n;
        this.html = this.html.substring(n);
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
        const { tag } = this.matchStartTagOpen()
        if (tag) {
            this.matchStartTagClose();
            return 
        }
    }

    // 匹配开始标签的 <tag 部分
    matchStartTagOpen() {
        let match = null;

        if( match = this.html.match(startTagOpen) ) {
            this.advance(match[0].length)

            return {
                tag: match[1]
            }
        } else {
            return { }
        }
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
            return { }
        } else {
            return { }
        }
    }

    matchEndTag() {
        let match = this.html.match(endTag);
        if (match) {
            
        }
    }
}