import INode, { DomType } from './Node'

export default class TextNode implements INode {
    tag: string = 'text';
    type: DomType = DomType.Text;
    text: string;

    constructor(text: string) {
        this.text = text;
    }

    setText(text: string) {
        this.text = text;
    }

    getText(): string {
        return this.text;
    }

    format(): any {
        return {
            tag: this.tag,
            type: this.type,
            text: this.text
        }
    }
}