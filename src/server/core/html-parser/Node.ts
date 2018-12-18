export enum NodeType {
    Tag = 'Tag',
    Code = 'Code',
    Text = 'Text',
    Root = 'Root',
    Directive = 'Directive'
}

export interface IAttr {
    name: string
    value: string
}

export default class BaseNode {
    type: NodeType
    parent: TagNode | null = null
    depth: number = 0

    constructor(type: NodeType) {
        this.type = type;
    }

    setParent(parent: TagNode) {
        this.parent = parent;
        this.depth = this.parent.getDepth() + 1;
    }

    getParent(): TagNode | null {
        return this.parent;
    }

    getDepth(): number {
        return this.depth;
    }
}

export class TagNode extends BaseNode {
    tag: string
    attrs: Array<IAttr> = []
    children: Array<TagNode | TextNode | DirectiveNode> = []

    constructor(
        tag: string
    ) {
        super(NodeType.Tag)
        this.tag = tag
    }

    setAttrs(attrs: Array<IAttr>) {
        this.attrs = attrs;
    }

    getAttrs(): Array<IAttr> {
        return this.attrs;
    }

    appendChild(child: TagNode | TextNode | DirectiveNode) {
        this.children.push(child);
        child.setParent(this);
    }

    getChildren(): Array<TagNode | TextNode | DirectiveNode> {
        return this.children;
    }

    getWidth(): number {
        return this.children.length;
    }

    toString(): any {
        return {
            tag: this.tag,
            type: this.type,
            attrs: this.attrs,
            depth: this.depth,
            children: this.children.map(item => {
                return item.toString()
            })
        }
    }
}

export class TextNode extends BaseNode {
    text: string

    constructor(
        text: string
    ) {
        super(NodeType.Text)
        this.text = text
    }

    setText(text: string) {
        this.text = text;
    }

    getText(): string {
        return this.text;
    }

    toString(): any {
        return {
            type: this.type,
            text: this.text
        }
    }
}


export class DirectiveNode extends BaseNode {
    data: string

    constructor(data: string = '') {
        super(NodeType.Directive)

        this.data = data
    }

    setData(data: string) {
        this.data = data
    }

    toString(): any {
        return {
            type: this.type,
            data: this.data
        }
    }

}