export type Value = string | number;

export interface INode {
    value: Value;
    next: NodeValue;
}

export type NodeValue = INode | null;

export interface ILinkedList {
    append: (value: Value) => void;
    prepend: (value: Value) => void;
    delete: (value: Value) => void;
    find: (value: Value) => NodeValue;
    appendAfter: (targetValue: Value, value: Value) => void;
    appendBefore: (targetValue: Value, value: Value) => void;
    toArray: () => INode[];
    getHead: () => NodeValue;
    getTail: () => NodeValue;
    isCyclic: () => boolean;
}