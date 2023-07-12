# 兩個鏈表的相交

## leetcode 160. Intersection of Two Linked Lists

[leetcode link](https://leetcode.com/problems/intersection-of-two-linked-lists/)

## 解題思路

暴力破解

兩個loop,對兩鏈表的每個節點。Time complexity為O(N²)。

**雙指針法**

先定義兩個指針分別指向鏈表A的頭及鏈表B的頭。再用兩個loop得出兩個鏈表的長度及長度差,那個鏈表較長就移動那個鏈表的指針,移動的節點數就是兩個鏈表的長度差,這個動作就是將兩個鏈表從尾部對齊。
之後就是對比兩個節點是否一樣,是就直接return,不是就繼續移動兩個節點,找到尾都沒有就return null。Time complexity為O(N)。

## 重點

這題雙指針的移動方法其實相對簡單,最難在於是否想到可以將兩個鏈表從尾部對齊,想到的話就可以使用雙指針法。

## Code

暴力破解
```typescript
const getIntersectionNode = (headA: ListNode | null, headB: ListNode | null): ListNode | null => {
    let currA: ListNode | null = headA, currB: ListNode | null;
  
    while(currA){
      currB = headB;
  
      while(currB){
        if(currA === currB){
          return currB;
        }
        currB = currB.next;
      }
      currA = currA.next;  
    }
  
    return null;
};
```

雙指針法
```typescript
const getIntersectionNode = (headA: ListNode | null, headB: ListNode | null): ListNode | null  => {
    let currA: ListNode | null = headA, currB: ListNode | null = headB;
    let lengthA:number = 0, lengthB:number = 0;
    let loop:number;

    while(currA) {
        currA = currA.next;
        lengthA++;
    }

    while(currB) {
        currB = currB.next;
        lengthB++;
    }

    currA = headA;
    currB = headB;
    
    if(lengthA < lengthB) {
        loop = lengthB -lengthA;

        while(loop--) {
            currB = currB!.next;
        }

        while(currB) {
            if(currA === currB) {
                return currB;
            }
            currA = currA!.next;
            currB = currB.next;
        }
    } else {
        loop = lengthA - lengthB;

        while(loop--) {
            currA = currA!.next;
        }

        while(currA) {
            if(currA === currB) {
                return currA;
            }
            currA = currA.next;
            currB = currB!.next;
        }
    }

    return null;
}
```
