# 刪除倒數第n個節點

## leetcode 19. Remove Nth Node From End of List

[leetcode link](https://leetcode.com/problems/remove-nth-node-from-end-of-list/)

## 解題思路

快慢指針法

使用虛擬頭節點,定義兩個指針(fast,slow)指向虛擬頭節點。寫個loop,條件是n--,移動fast指針n次,再寫個loop,條件是fast.next不為null,每次移動fast 及slow一次。完成兩個loop後,slow 的下個節點就是要刪除的節點,因此將slow 的下個節點 = slow 的下下個節點,最後return 虛擬頭節點的下個節點。

## 重點

**使用虛擬頭節點**

**快慢指針法**的重點就是如何移動指針。

## Code

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
