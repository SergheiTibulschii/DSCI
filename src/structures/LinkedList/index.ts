import { ILinkedList, INode, NodeValue, Value } from "./types";

class LinkedList implements ILinkedList {
    head: NodeValue;
    tail: NodeValue;

    constructor() {
        this.head = null;
        this.tail = null;
    }

    append(value: Value): void {
        const newNode: INode = { value, next: null };

        if (this.tail !== null) {
            this.tail.next = newNode;
        }

        if (this.head === null) {
            this.head = newNode;
        }

        this.tail = newNode;
    }

    appendAfter(targetValue: Value, value: Value): void {
        const targetNode = this.find(targetValue);
        if (!targetNode) {
            return;
        }

        const newNode: INode = { value, next: targetNode.next };
        targetNode.next = newNode;
        if (this.tail!.value === targetNode.value) {
            this.tail = newNode;
        }
    }

    appendBefore(targetValue: Value, value: Value): void {
        const targetNode = this.find(targetValue);
        if (!targetNode) {
            return;
        }

        const newNode: INode = { value, next: targetNode };
        if (this.head!.value === targetNode.value) {
            this.head = newNode;
        }
    }

    delete(value: Value): void {
        if (this.head === null) {
            return;
        }

        while (this.head !== null && this.head.value === value) {
            this.head = this.head.next;
        }

        let node: NodeValue = this.head;
        while (node && node.next !== null) {
            if (node.next.value === value) {
                node.next = node.next.next;
            }

            node = node.next;
        }
    }

    find(value: Value): NodeValue {
        if (this.head === null) {
            return null;
        }

        let node: NodeValue = this.head;
        while (node !== null) {
            if (node.value === value) {
                return node;
            }

            node = node.next;
        }

        return null;
    }

    prepend(value: Value): void {
        let newNode: NodeValue = null;
        if (this.head) {
            newNode = { value, next: this.head };
            this.head = newNode;
        } else {
            newNode = { value, next: null };
            this.tail = newNode;
        }
        this.head = newNode;
    }

    toArray(): INode[] {
        const arr: INode[] = [];

        let node: NodeValue = this.head;
        while (node !== null) {
            arr.push(node);
            node = node.next;
        }

        return arr;
    }

    getTail(): NodeValue {
        return this.tail;
    }

    getHead(): NodeValue {
        return this.head;
    }

    isCyclic(): boolean {
        if(this.head === null) {
            return false;
        }
        let slow: NodeValue = this.head;
        let fast: NodeValue = this.head;

        while(fast !== null && fast!.next !== null) {
            slow = slow!.next;
            fast = fast!.next!.next

            if(slow?.value === fast?.value) {
                return true
            }
        }

        return false;
    }
}

export default LinkedList;
