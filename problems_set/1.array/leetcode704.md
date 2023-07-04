# 二分法

## leetcode 704. Binary Search
[leetcode link](https://leetcode.com/problems/binary-search/)

##解題思路及重點
設定三個變數分別指向數組的開端(start),終端(end)以及開端和終端的長度中間(mid)。取num[mid]與輸入的target比較,如果mid較大就移動end,mid較小就移動start,相等就直接return mid。
重點是如何設定數組的長度,也就是end = nums.lenght 或 end = nums.lenght - 1。 這會分別影響loop的終結條件(是 < 或是 <=)及如何改變end/start(是end/start = mid +1/-1 或是 直接end/start = mid)。

其實就是一開始時是如何定義**數組的區間**。如果定義了end = nums.lenght那**數組的區間就是包頭不包尾**。
試想想,如果組數是[1,2,3,4],而end = nums.lenght,在loop的最後num[end]就是num[4]<-這是undefined。所以loop要在此之前停止,因此**數組的區間就是包頭不包尾**。

而如果是end = nums.lenght - 1**數組的區間就是包頭包尾**。
同理end = nums.lenght - 1,在loop的最後num[end]就是num[3]<-這是4。所以loop要在此之後才停止,因此**數組的區間就是包頭包尾**。

而當定義好**數組的區間**後就不要再改變對區間的定義。也就是**循環不變量**。如果定義了數組的區間是包頭不包尾也就是end = nums.lenght那loop的終結條件就會是 < 或 >而不是=,=在此是沒有意義的,
因為如果是=的話,在loop的最後num[end]就是undefined。因此定義好的數組的區間就是不變量之後loop中的處理都是根據定義好的數組的區間,否則只會引起邏輯混亂。

## 總結
**數組的區間**就是包不包含數組的頭及尾,理論上有四種可能性:
+ 包頭包尾
+ 包頭不包尾
+ 不包頭包尾
+ 不包頭不包尾

但一般而言,多數都是包頭包尾或包頭不包尾。

**循環不變量**就是在循環中堅持對數組區間的定義進行處理。
