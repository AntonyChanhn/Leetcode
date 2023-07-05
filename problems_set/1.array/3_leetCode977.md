# 雙指針法

## leetcode 977. Squares of a Sorted Array

[leetcode link](https://leetcode.com/problems/squares-of-a-sorted-array/)

## 解題思路

如果使用built-in function(like Typescript:sort()),那將每個元素平方後再.sort()就做完了。但此題有更佳更巧妙的解法。

此題是一個sorted array,每個元素被平方後才打亂了次序(有負數的出現)。因此出現最大數字的可能性只有頭尾兩端,不可能在中間。

設定兩個指針:頭指針指向數組的頭;尾指針指向數組的尾。比較頭尾指針的元素那個較大,較大的元素放進新數組,再移動指針向數姐的中間移動(頭指針較大就向後移,尾指針較大就向前移,較小的就不移動)。

## 重點

我覺得這題最難的點在於能夠察覺出**"出現最大數字的可能性只有頭尾兩端,不可能在中間"**這一點上。只要察覺這點,不難想出使用雙指針法。

## Code

```typescript

```
