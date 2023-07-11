# 交換雙節點

## leetcode 24. Swap Nodes in Pairs

[leetcode link](https://leetcode.com/problems/swap-nodes-in-pairs/description/)

## 解題思路

## 重點

## Code

```typescript
const swapPairs = (head: ListNode | null): ListNode | null => {
    let dummyHead: ListNode = new ListNode(0,head);
    let curr: ListNode | null = dummyHead;
  
    while(curr.next && curr.next.next) {
      let temp1: ListNode = curr.next;
      let temp2: ListNode | null = curr.next.next.next;
  
      curr.next = curr.next.next;
      curr.next.next = temp1;
      curr.next.next.next = temp2;
  
      curr = curr.next.next;
    }
  
    return dummyHead.next;
  }
```
