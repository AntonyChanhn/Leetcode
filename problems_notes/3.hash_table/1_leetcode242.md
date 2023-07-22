# leetcode 242. Valid Anagram

[leetcode link](https://leetcode.com/problems/valid-anagram/)

## 解題思路

使用hash table

如果兩個string的長度不是一樣,return false。用loop將其中一組string傳入hash table中,key就是字母,value就是其出現的次數。再用另一個loop將歷遍另一個string,然後對一對字母有沒有出現在Map中,如果字母沒有出現在Map中或Map中的字母value是0就return false,之後再將該字母在Map中的value減1。最後return true。

使用array當作Map

如果兩個string的長度不是一樣,return false。定義一個26個位都是0的array,用loop將兩組string傳入array對應的位置中,如字母a就傳入array的index 0位置中;字母b就傳入array的index 1位置中,如此類推(typescript中可以用charCodeAt將字母轉成數字,如a是97,b是98,z是122)。之後一組在array相對應的位置的值作加1,另一組則作減1‧。再用loop歷遍array,如array中有值不是0,就return false。最後return true。

## 重點

**當我們要快速判斷一個元素是否出現過,就可以考慮使用hash table結構。**

**當需要被儲存的元素是已知或有限及array的index可以代表元素時,可以優先考慮使用array作hash table。**

## Code

使用hash table

```typescript
const isAnagram = (s: string, t: string): boolean => {
    if(s.length != t.length) return false;
    let map:Map<string, number> = new Map<string, number>();

    for(let char of s){
        map.set(char, map.has(char) ? map.get(char)! + 1 : 1);
    }

    for(let char of t) {
        if(!map.get(char)) return false;
        map.set(char, map.get(char)! - 1);
    }

    return true;
};
```

使用array當作hash table

```typescript
const isAnagram = (s: string, t: string): boolean => {
    if(s.length != t.length) return false;
    let hash = new Array(26).fill(0);

    for(let i = 0; i < s.length; i++) {
        hash[s[i].charCodeAt(0) - "a".charCodeAt(0)]++;
        hash[t[i].charCodeAt(0) - "a".charCodeAt(0)]--;
    }

    for(let i = 0; i < hash.length; i++){
        if(hash[i] != 0) return false;
    }

    return true;
}
```
