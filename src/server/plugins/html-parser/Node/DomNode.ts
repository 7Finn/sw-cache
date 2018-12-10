import INode, { DomType } from './Node';
import TextNode from './TextNode'

export default class DomNode implements INode {
    tag: string;
    type: DomType;
    attrs: Array<string>;
    parent: DomNode | null;
    children: Array<DomNode | TextNode> = [];

    constructor(
        tag: string,
        type: DomType,
        attrs: Array<string> = [],
        parent: DomNode | null = null,
    ) {
        this.tag = tag;
        this.type = type;
        this.attrs = attrs;
        this.parent = parent;
    }

    setParent(parent: DomNode) {
        this.parent = parent;
    }

    getParent(): DomNode | null {
        return this.parent;
    }

    setAttrs(attrs: Array<string>) {
        this.attrs = attrs;
    }

    getAttrs(): Array<string> {
        return this.attrs;
    }

    appendChild(child: DomNode | TextNode) {
        this.children.push(child);
    }

    getChildren(): Array<DomNode | TextNode> {
        return this.children;
    }

    format(): any {
        return {
            tag: this.tag,
            type: this.type,
            attrs: this.attrs,
            children: this.children.map(item => {
                return item.format()
            })
        }
    }
}
