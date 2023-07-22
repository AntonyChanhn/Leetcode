# leetcode 142. Linked List Cycle II

[leetcode link](https://leetcode.com/problems/linked-list-cycle-ii/)

## 解題思路

**雙指針法(快慢指針)**

定義兩個指針(fast, slow)指向鏈表的頭,fast每次走兩個節點,slow每次走一個節點,如果兩個指針相遇代表是循環鏈表,如果走fast到null代表不是循環鏈表(循環鏈表不會有空指針)。
之後再將一個指針指向鏈表的頭,另一個指向前一次兩個指針相遇的節點,然後這次兩個指針每次都只移動一次,再次相遇的點就是循環的入口。

## 重點

這題最難的點是想出: **將一個指針指向鏈表的頭,另一個指向前一次兩個指針相遇的節點,然後這次兩個指針每次都只移動一次,再次相遇的點就是循環的入口**

以上可以用數學證明:

let starting point of linked list to cycle entrance = x;

let cycle entrance to meeting point = y;

let meeting point to cycle entrance = z;

let times of cycle = n;

可以得出以下等式(求x):

2(x + y) = x + y + n(y + z)

x + y = n(y + z)

if n = 1

x = z

如果n > 1,其實是一樣的,只是要轉多n個圈才能相遇然而。

## Code

```typescript
const detectCycle = (head: ListNode | null): ListNode | null => {
    let fast:ListNode | null = head, slow:ListNode | null = head;

    while(fast && fast.next && fast.next.next) {
        slow = slow!.next;
        fast = fast.next.next;
        if(slow === fast) {
            slow = head;
            while(slow !== fast){
            slow = slow!.next;
            fast = fast!.next;
            }
            return slow;
        }
    }
    return null;
}
```
