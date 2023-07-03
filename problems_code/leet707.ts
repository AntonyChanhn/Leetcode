class LinkedNode {
  val: number;
  next: LinkedNode | null;

  constructor(val?: number, next?: LinkedNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

class MyLinkedList {
  dummyHead: LinkedNode;
  length: number;
  constructor() {
    this.dummyHead = new LinkedNode(0);
    this.length = 0;
  }

  get(index: number): number {
    if (index < 0 || index > this.length - 1) {
      return -1;
    }
    let cur = this.dummyHead.next;
    while (index--) {
      cur = cur!.next;
    }
    return cur!.val;
  }

  addAtHead(val: number): void {
    if (this.dummyHead.next) {
      this.dummyHead.next = new LinkedNode(val, this.dummyHead.next);
    } else {
      this.dummyHead.next = new LinkedNode(val);
    }
    this.length++;
  }

  addAtTail(val: number): void {
    let cur: LinkedNode | null = this.dummyHead;
    let loop = this.length;

    while (loop--) {
      cur = cur!.next;
    }
    cur!.next = new LinkedNode(val);
    this.length++;
  }

  addAtIndex(index: number, val: number): void {
    if (index < 0 || index > this.length) {
      return;
    }
    let cur: LinkedNode | null = this.dummyHead;
    while (index--) {
      cur = cur!.next;
    }
    cur!.next = new LinkedNode(val, cur!.next);
    this.length++;
  }

  deleteAtIndex(index: number): void {
    if (index < 0 || index >= this.length) {
      return;
    }
    let cur: LinkedNode | null = this.dummyHead;
    while (index--) {
      cur = cur!.next;
    }
    cur!.next = cur!.next!.next;
    this.length--;
  }
}

//  Your MyLinkedList object will be instantiated and called as such:
let obj = new MyLinkedList();
obj.addAtHead(2);
console.log("head: " + obj.get(0) + obj.get(1));

// obj.addAtTail(1);
// console.log("tail: " + obj.get(0) + obj.get(1));

// obj.addAtIndex(2, 2);
// console.log("index: " + obj.get(0) + obj.get(1) + obj.get(2));

obj.deleteAtIndex(1);
console.log("delete: " + obj.get(0) + obj.get(1));
