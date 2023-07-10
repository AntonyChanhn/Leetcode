# 設計鏈表

## leetcode 707. Design Linked List

[leetcode link](https://leetcode.com/problems/design-linked-list/)

## 解題思路

在class MyLinkedList加入: 虛擬頭節點和length

五個鏈表methods:

**get(int):** 先判斷輸入的int 是否超過length, 是就return -1。定義current指向虛擬頭節點,用loop將current指向int所指的位置再將val reurn。

**addAtHead(int):** 定義current指向虛擬頭節點,判斷current.next是否null,如是就current.next = new LinkedNode(int),否則curr.next = new LinkedNode(val, curr.next),再length + 1。
**addAtTail(int):** 


## 重點

這一題說是一題,但其實是做了五題,五個鏈表常用的基本methods都在內。非常好的鏈表練習題。

## Code

```typescript
class LinkedNode {
    val:number
    next:LinkedNode | null

    constructor(val?:number, next?:LinkedNode | null) {
        this.val = (val === undefined ? 0 : val)
        this.next = (next === undefined ? null : next)
    }
}

class MyLinkedList {

    private dummyHead:LinkedNode;
    private length:number;

    constructor(head?:LinkedNode | null) {
        this.dummyHead = new LinkedNode(0,(head === undefined ? null : head));
        this.length = 0;
    }

    get(index: number): number {
        if(index >= this.length || index < 0) return -1;

        let curr:LinkedNode | null = this.dummyHead;

        while(index--) {
            curr = curr!.next
        }
        return curr!.next!.val
    }

    addAtHead(val: number): void {
        let curr:LinkedNode | null = this.dummyHead;

        if(curr.next === null){
            curr.next = new LinkedNode(val);
        } else {
            curr.next = new LinkedNode(val, curr.next);
        }
        this.length++
    }

    addAtTail(val: number): void {
        let curr:LinkedNode | null = this.dummyHead;

        while(curr.next) {
            curr = curr.next;
        }
        curr.next = new LinkedNode(val);
        this.length++;
    }

    addAtIndex(index: number, val: number): void {
        if(index > this.length) return;
       let curr:LinkedNode | null = this.dummyHead;

        while(index--){
            curr = curr!.next
        }
        curr!.next = new LinkedNode(val,curr!.next)
        this.length++;
    }

    deleteAtIndex(index: number): void {
        if(index >= this.length || index < 0) return;

        let curr:LinkedNode | null = this.dummyHead;

        while(index--) {
            curr = curr!.next
        }
        curr!.next = curr!.next!.next
        this.length--
    }
}
```
