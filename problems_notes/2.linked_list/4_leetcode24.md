# 交換雙節點

## leetcode 24. Swap Nodes in Pairs

[leetcode link](https://leetcode.com/problems/swap-nodes-in-pairs/description/)

## 解題思路

使用虛擬頭節點,定義指針(curr)指向虛擬頭節點。定義loop當curr.next及curr.next.next不為空時運行。定義兩個變數暫儲curr的下個節點(temp1)及curr的下下下個節點(temp2)。之後要進行節點的交換:curr的下個節點為curr的下下個節點;curr的下下個節點為temp1;curr的下下下個節點為temp2。loop的最後將curr指向curr的下下個節點。最後return 虛擬頭節點的下個節點。

## 重點

重點就是畫圖,不然會很亂。

還有就是使用虛擬頭節點。關於虛擬頭節點的使用時機:基本上發現需要使用上一個節點或頭節點需要獨立處理時,最好就使用虛擬頭節點。

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
