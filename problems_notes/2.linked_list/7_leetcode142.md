# leetcode 142. Linked List Cycle II

[leetcode link](the leetcode Link)

## 解題思路



## 重點

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
