class LinkedNode {
    val:number;
    next:LinkedNode | null;

    constructor(val?:number, next?:LinkedNode | null) {
        this.val = (val === undefined ? 0 : val);
        this.next = (next === undefined ? null : next);
    }
}

class MyLinkedList {
    dummyHead:LinkedNode;
    length:number;
    constructor() {
        this.dummyHead = new LinkedNode(0);
        this.length = 0;
    }

    get(index: number): number {
        if(index < 0 || index > this.length - 1) {
            return -1
        }
        let cur = this.dummyHead.next;
        while(index --) {
            cur = cur!.next;
        }
        return cur!.val
    }

    addAtHead(val: number): void {
        if(this.dummyHead.next){
            this.dummyHead.next = new LinkedNode(val,this.dummyHead.next);
        }else{
            this.dummyHead.next = new LinkedNode(val);
        }
        this.length++
    }

    addAtTail(val: number): void {
        let cur = this.dummyHead.next;
        let loop = this.length - 1;
        while(loop --) {
            cur = cur!.next;
        }
        cur!.next = new LinkedNode(val)
        this.length++
    }

    addAtIndex(index: number, val: number): void {
        if(index < 0 || index > this.length) {
            throw new Error('exceed the length');
        }
        let cur: LinkedNode | null | undefined = this.dummyHead;
        while( index --) {
            cur = cur!.next;
        }
        cur!.next = new LinkedNode(val, cur!.next)
        this.length++
    }

    deleteAtIndex(index: number): void {

    }
}


//  Your MyLinkedList object will be instantiated and called as such:
let obj = new MyLinkedList()
obj.addAtHead(1);
console.log("head: " + obj.get(0) );//MyLinkedList{val:1, next:null}

obj.addAtTail(3);
console.log("tail: " + obj.get(0) + obj.get(1));//MyLinkedList{val:1, next:{val:3, next:null}}

obj.addAtIndex(2,2);
console.log("index: " + obj.get(0) + obj.get(1) + obj.get(2));//MyLinkedList{val:1, next:{val:2, next:{val:3, next:null}}}

obj.deleteAtIndex(1);
console.log("delete: " + obj.get(0) + obj.get(1) + obj.get(2));//MyLinkedList{val:1, next:{val:3, next:null}}

 