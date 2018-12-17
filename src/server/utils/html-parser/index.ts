

import ASTree from './Tree'
import Node from './Node'
import regexp from './regexp'

export default class HtmlParser {

    html: string = ''; // 模板
    index: number = 0; // 当前索引

    asTree: ASTree = new ASTree();

    constructor() {
    }

    parseHtml(html: string) {
        this.reset();
        this.html = html;
        while(true) {
            // 匹配文本
            this.matchText()
            // 匹配注释
            if (this.matchComment()) continue;
            if (this.matchConditionComment()) continue;
            // 匹配文档类型
            if (this.matchDoctype()) continue;
            // 匹配结束标签
            this.matchEndTag();
            // 匹配开始标签
            this.matchStartTag();

            // 检查是否结束
            if (this.eof()) break;
        }
    }

    advance(n: number): void {
        this.index += n;
        this.html = this.html.substring(n);
    }

    // 匹配文本
    matchText() {
        let index = this.html.indexOf('<');
        if (index < 0) {
            this.html = '';
        } else if (index > 0) {
            this.asTree.buildTextNode(this.html.substring(0, index));
            this.advance(index);
        }
    }

    // 匹配文档类型
    matchDoctype(): boolean {
        let match = this.html.match(regexp.doctype);
        if (match) {
            this.advance(match[0].length)
            return true;
        } else {
            return false;
        }
    }

    // 匹配注释
    matchComment(): boolean {
        if (regexp.comment.test(this.html)) {
            let commentEnd = this.html.indexOf('-->');

            if (commentEnd >= 0) {
                this.advance(commentEnd + 3);
                return true;
            }
        }

        return false;
    }

    matchConditionComment(): boolean {
        if (regexp.conditionalComment.test(this.html)) {
            const conditionalEnd = this.html.indexOf(']>')
  
            if (conditionalEnd >= 0) {
              this.advance(conditionalEnd + 2)
              return true;
            }
        }

        return false;
    }

    // 匹配开始标签
    matchStartTag(): boolean {
        let node: Node | null = this.matchStartTagOpen();
        if (node) {
            this.matchStartTagClose(node);
            return true;
        } else {
            return false;
        }
    }

    // 匹配开始标签的 <tag 部分
    matchStartTagOpen(): Node | null {
        let match = null;
        if( (match = this.html.match(regexp.startTagOpen)) ) {
            this.advance(match[0].length)
            return this.asTree.buildTagNode(match[1], [], false)
        }
        return null;
    }

    // 匹配开始标签的 attrs> 部分
    matchStartTagClose(node: Node): boolean {
        let closeMatch = null;
        let attrMatch = null;
        let attrMatches = [];
        while ( !(closeMatch = this.html.match(regexp.startTagClose)) && (attrMatch = this.html.match(regexp.attribute)) ) {
            this.advance(attrMatch[0].length)
            // TODO: 记录attrs
            attrMatches.push(attrMatch)
        }

        if (closeMatch) {
            node.setAttrs(this.parseAttrs(attrMatches));
            this.advance(closeMatch[0].length);
            return true;
        } else {
            return false;
        }
    }

    // 匹配结束标签
    matchEndTag() {
        let match = this.html.match(regexp.endTag);
        if (match) {
            this.advance(match[0].length)
            this.asTree.buildTagNode(match[1], [], true)
        }
    }

    parseAttrs(attrMatches: Array<any>): Array<any> {
        let attrs = [];
        for (let i = 0; i < attrMatches.length; i++) {
            let args = attrMatches[i];
            // hackish work around FF bug https://bugzilla.mozilla.org/show_bug.cgi?id=369778
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
            let value = args[3] || args[4] || args[5] || '';
            attrs[i] = {
                name: args[1],
                value: this.decodeAttr(value, true)
            };
        }

        return attrs;
    }

    decodeAttr(value: string, shouldDecodeNewlines: boolean) {
        if (shouldDecodeNewlines) {
            value = value.replace(regexp.nlRE, '\n');
        }
        return value
            .replace(regexp.ltRE, '<')
            .replace(regexp.gtRE, '>')
            .replace(regexp.ampRE, '&')
            .replace(regexp.quoteRE, '"')
    }

    eof(): boolean {
        if (this.html === '') return true;
        return false;
    }

    reset() {
        this.html = '';
        this.index = 0;
        this.asTree = new ASTree();
    }

    getDepth(): number {
        return this.asTree.getDepth()
    }

    toString(): any {
        return this.asTree.toString();
    }
}