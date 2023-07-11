# 反轉鏈表

## leetcode 206. Reverse Linked List

[leetcode link](https://leetcode.com/problems/reverse-linked-list/)

## 解題思路

**雙指針法**

定義兩個指針(prev,curr),prev先為空,curr指向鏈表的頭。寫個loop運行條件是curr不為空,先儲存curr的下個節點為temp,再將curr的下個節點指向prev,之後再改變兩個指針的位置,prev 變為curr, curr變為temp。最後return prev。

**遞歸法**

寫個function,要輸入的參數就是prev,curr,結束運行的條件就是curr為空,那就return prev。否則就繼續運行,儲存curr的下個節點為temp,再將curr的下個節點指向prev,之後再改變兩個指針的位置,prev 變為curr, curr變為temp, 然後return自己,輸入的參數變成(curr,temp)。最後在main function中 直接return寫好的function,輸入的值為null和鏈表的頭。

## 重點

**雙指針法**將現在指針的節點指向上個指針指向的節點就可完成反轉。

**遞歸法**邏輯上和雙指針法一樣, 只是寫法不同。先定好結束運行的條件,再處理要return的參數,最後return自己及輸入處理好的參數。

## Code

雙指針法
```typescript
const reverseList = (head: ListNode | null): ListNode | null => {
    let prev: ListNode | null = null, curr: ListNode | null = head;
    let temp: ListNode | null;

    while(curr) {
       temp = curr.next;
       curr.next = prev;
       prev = curr;
       curr = temp ;
    }
    return prev;
}
```
recursion 遞歸法
```typescript
const reverse = (prev: ListNode | null, curr: ListNode | null): ListNode | null =>{
    if(!curr) return prev;

    let temp: ListNode | null = curr.next;
    curr.next = prev;
    // prev = curr;
    // curr = temp;

    // return reverse(prev, curr);
    return reverse(curr, temp);
}

const reverseList = (head: ListNode | null): ListNode | null => {
    return reverse(null, head);
};
```
