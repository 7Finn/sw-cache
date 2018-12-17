import Node, { NodeType } from './Node'

export default class ASTree {
    root: Node;
    depth: number = 0;
    width: number = 0;
    stack: Array<Node> = [];
    current: Node;

    constructor() {
        this.root = new Node('root', NodeType.Root);
        this.current = this.root;
    }

    
    /**
     * 构造一个Tag节点
     *
     * @param {string} tag 标签名
     * @param {Array<string>} [attrs=[]]
     * @param {boolean} [unary=false]
     * @memberof ASTree
     */
    buildTagNode(tag: string, attrs: Array<string> = [], unary: boolean = false): Node {
        let node = new Node(tag, NodeType.Tag, attrs);
        
        if (!unary) {
            // 不是结束标签
            this.append(this.current, node); // 添加节点到当前父节点的Child
            switch(tag.toLowerCase()) {
                case 'meta':
                    // meta 没有闭合，也不需要入栈
                    break;
                default: 
                    this.current = node; // 当前的父节点切换到当前节点
                    this.stack.push(node);
                    break;
            }
        } else {
            // 结束标签
            let pos;
            for (pos = this.stack.length - 1; pos >= 0; pos--) {
                if (this.stack[pos].tag === node.tag) break;
            }
            if (pos >= 0) {
                const parent = this.stack[pos].getParent(); // 取出开始标签中上一层的父节点当做当前节点
                if (!parent) throw(new Error('Parent Node is Null!'));
                this.current = parent;
                this.stack.length = pos; // 清除堆栈
            } else if (tag.toLowerCase() === 'br') {
                this.append(this.current, node);
            }
        }

        return node;
    }

    /**
     * 为文本创建一个结点，因为文本不需要闭合，直接插到当前父节点中，不用入栈
     *
     * @param {string} text
     * @memberof HtmlParser
     */
    buildTextNode(text: string) {
        let node = new Node('text', NodeType.Text, [], text);
        this.append(this.current, node);
    }

    append(parent: Node, child: Node) {
        parent.appendChild(child);

        this.setWidth(parent.getWidth());
        this.setDepth(child.getDepth());
    }

    getRoot(): Node {
        return this.root;
    }

    setWidth(width: number) {
        this.width = width > this.width ? width : this.width;
    }

    getWidth(): number {
        return this.width;
    }

    setDepth(depth: number) {
        this.depth = depth > this.depth ? depth : this.depth;
    }

    getDepth(): number {
        return this.depth;
    }

    toString(): any {
        return this.root.toString()
    }
}