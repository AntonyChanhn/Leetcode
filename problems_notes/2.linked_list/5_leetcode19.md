# 刪除倒數第n個節點

## leetcode 19. Remove Nth Node From End of List

[leetcode link](https://leetcode.com/problems/remove-nth-node-from-end-of-list/)

## 解題思路

數節點

使用虛擬頭節點,寫個loop,數數總共有多少個節點(length)。再寫個loop,運行的次數就是length 減n 次,移動現時節點。完成兩個loop後,現時節點的下個節點就是要刪除的節點,因此將現時節點的下個節點 = 現時節點的下下個節點,最後return 虛擬頭節點的下個節點。這種寫法Time complexity:O(N²)。

**快慢指針法**

使用虛擬頭節點,定義兩個指針(fast,slow)指向虛擬頭節點。寫個loop,條件是n--,移動fast指針n次,再寫個loop,條件是fast.next不為null,每次移動fast 及slow一次。完成兩個loop後,slow 的下個節點就是要刪除的節點,因此將slow 的下個節點 = slow 的下下個節點,最後return 虛擬頭節點的下個節點。這種寫法Time complexity:O(N)。

## 重點

**使用虛擬頭節點**

**快慢指針法**的重點就是如何移動指針。

## Code

數節點
```typescript
const removeNthFromEnd = (head: ListNode | null, n: number): ListNode | null => {
    let dummyHead: ListNode = new ListNode(0, head), curr: ListNode = dummyHead;
    let length:number = 0, loop: number;
  
    while(curr.next) {
      curr = curr.next;
      length++;
    }
    
    curr = dummyHead;
    loop = length - n;
  
    while(loop--){
      curr = curr.next!;
    }
    curr.next = curr.next!.next;
  
    return dummyHead.next;
  }
```

快慢指針法
```typescript
const removeNthFromEnd = (head: ListNode | null, n: number): ListNode | null => {
    let dummyHead: ListNode = new ListNode(0,head);
    let slow: ListNode = dummyHead, fast: ListNode = dummyHead;
    
    while(n--) {
      fast = fast.next!;
    }

    while(fast.next) {
      slow = slow.next!;
      fast = fast.next;
    }
    slow.next = slow.next!.next;

    return dummyHead.next;
}
```
