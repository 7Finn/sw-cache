export enum NodeType {
    Tag = 1,
    Code = 2,
    Text = 3,
    Root = 4
}


export default class Node {
    tag: string;
    type: NodeType;
    attrs: Array<string>;
    parent: Node | null = null;
    children: Array<Node> = [];
    depth: number = 0;
    text: string = '';

    constructor(
        tag: string,
        type: NodeType,
        attrs: Array<string> = [],
        text: string = ''
    ) {
        this.tag = tag;
        this.type = type;
        this.attrs = attrs;
        this.text = text;
    }

    setParent(parent: Node) {
        this.parent = parent;
        this.depth = this.parent.getDepth() + 1;
    }

    getParent(): Node | null {
        return this.parent;
    }

    setAttrs(attrs: Array<string>) {
        this.attrs = attrs;
    }

    getAttrs(): Array<string> {
        return this.attrs;
    }

    appendChild(child: Node) {
        this.children.push(child);
        child.setParent(this);
    }

    getChildren(): Array<Node> {
        return this.children;
    }

    getDepth(): number {
        return this.depth;
    }

    getWidth(): number {
        return this.children.length;
    }

    setText(text: string) {
        this.text = text;
    }

    getText(): string {
        return this.text;
    }

    toString(): any {
        return {
            tag: this.tag,
            type: this.type,
            attrs: this.attrs,
            text: this.text,
            depth: this.depth,
            children: this.children.map(item => {
                return item.toString()
            })
        }
    }
}