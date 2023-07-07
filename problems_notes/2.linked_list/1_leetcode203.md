# 處理鏈表 linked List

## leetcode 203. Remove Linked List Elements

[leetcode link](https://leetcode.com/problems/remove-linked-list-elements/)

## 解題思路

刪除鏈表中的元素有兩個方向:

 + 在原生的鏈表刪除

 + **在原生鏈表前增加虛擬頭結點刪除(建議使用這方法)**

1.在原生的鏈表進行刪除

先loop判斷頭結點是否要刪除,如果是,就將頭結點等於他的下個結點(head = head.next)。

之後**刪除結點的方法**就是:寫下個loop判斷當前結點的下個結點否要刪除,如果是,就將當前結點的下個結點等於當前結點的下個再下個結點(current.next = current.next.next)。


**2.在原生鏈表前增加虛擬頭結點刪除**

先在原生鏈表前增加虛擬頭結點(dummyHead = new ListNode(0,head)), 之後**刪除結點的方法**和上面一模一樣。

## 重點

**刪除結點的方法**就是找到要被刪除結點的**上一個結點(current)**,然後指向要被刪除結點的下個結點(current.next = current.next.next)。

操作鏈表中有兩個方向:

 + 在原生的鏈表進行

 + **在原生鏈表前增加虛擬頭結點進行(建議使用這方法)**

**在原生的鏈表進行操作時,頭結點是沒有上一個結點的,因此如操作需耍上一個結點時,需耍額外處理頭結點。**

**增加虛擬頭結點的好處就是不用獨立處理原生鏈表的頭結點。**

## Code

在原生的鏈表刪除
```typescript
const removeElements = (head: ListNode | null, val: number) : ListNode | null => {
    //to prevent head === null or can also use "head?" in typescript
    if(!head) return head
    //while(head?.val === val)
    while(head != null && head.val === val) {
        head = head.next;
    }
    let curr:ListNode | null = head;
    //while(curr?.next)
    while(curr != null && curr.next) {
        if(curr.next.val === val) {
            curr.next = curr.next.next;
        } else {
            curr = curr.next;
        }
    }
    return head;
};
```

在原生鏈表前增加虛擬頭結點刪除
```typescript
const removeElements = (head: ListNode | null, val: number) : ListNode | null => {
    let dummyHead:ListNode = new ListNode(0,head);
    let curr:ListNode | null = dummyHead;
    
    while(curr.next) {
        if(curr.next.val === val){
            curr.next = curr.next.next;
        } else {
        curr = curr.next;
        } 
    }
    return dummyHead.next;
};
```
