export enum DomType {
    Tag = 1,
    Code = 2,
    Text = 3
}


export default class DomNode {
    tag: string;
    type: DomType;
    attrs: Array<string>;
    parent: DomNode | null;
    children: Array<DomNode>;

    constructor(
        tag: string,
        type: DomType,
        attrs: Array<string> = [],
        parent: DomNode | null = null,
        children: Array<DomNode> = []
    ) {
        this.tag = tag;
        this.type = type;
        this.attrs = attrs;
        this.parent = parent;
        this.children = children;
    }

    setParent(parent: DomNode) {
        this.parent = parent;
    }

    getParent() {
        return this.parent;
    }

    setAttrs(attrs: Array<string>) {
        this.attrs = attrs;
    }

    appendChild(child: DomNode) {
        this.children.push(child);
    }
}
