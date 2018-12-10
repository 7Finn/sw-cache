import { format } from "util";

export enum DomType {
    Tag = 1,
    Code = 2,
    Text = 3,
    Root = 4
}


export default interface INode {
    tag: string;
    type: DomType;
    format: Function;
}