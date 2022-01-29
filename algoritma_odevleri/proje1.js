/*
PROJE 1: 
[22,27,16,2,18,6] -> Insertion Sort

Yukarı verilen dizinin sort türüne göre aşamalarını yazınız.
Big-O gösterimini yazınız.
Time Complexity: Average case: Aradığımız sayının ortada olması,Worst case: Aradığımız sayının sonda olması, Best case: Aradığımız sayının dizinin en başında olması.
Dizi sıralandıktan sonra 18 sayısı hangi case kapsamına girer? Yazınız.

Big o --> o(n)
18 sayısı ortada olduğundan average case sınıfındadır

1.ADIM --> En küçük sayı bulunur 2. ve baştaki sayı ile yer değiştirir. [2,27,16,22,18,6] --> n 
2.ADIM --> 2.En küçük sayı bulunur 6. ve 2. sayı ile yer değiştirir. [2,6,16,22,18,27] --> n-1
3.ADIM --> 3.En küçük sayı bulunur 16. ve yerinde kalır. [2,6,16,22,18,27] --> n-2
4.ADIM --> 4.En küçük sayı bulunur 18. ve 4. sayı ile yer değiştirir. [2,6,16,18,22,27] --> n-3 
5.ADIM --> 5.En küçük sayı bulunur 22. ve yerinde kalır.[2,6,16,18,22,27] --> n-4
6.ADIM --> 6.En küçük sayı bulunur 27. ve yerinde kalır.[2,6,16,18,22,27] sıramız hazırr --> 1



*/
/*
[7,3,5,8,2,9,4,15,6] dizisinin Insertion Sort'a göre ilk 4 adımını yazınız.

1.ADIM -->En küçük sayı bulunur 2. ve baştaki sayı ile yer değiştirir.[2,3,5,8,7,9,4,15,6]
2.ADIM -->2.En küçük sayı bulunur 3. ve yerinde kalır [2,3,5,8,7,9,4,15,6]
3.ADIM -->3.En küçük sayı bulunur 4. ve 3. sayı ile yer değiştirir.[2,3,4,8,7,9,5,15,6]
4.ADIM -->4.En küçük sayı bulunur 5. ve 4. sayı ile yer değiştirir.[2,3,4,5,7,9,8,15,6]
5.ADIM -->5.En küçük sayı bulunur 6. ve 5. sayı ile yer değiştirir.[2,3,4,5,6,9,8,15,7]
6.ADIM -->6.En küçük sayı bulunur 7. ve 6. sayı ile yer değiştirir.[2,3,4,5,6,7,8,15,9]
7.ADIM -->7.En küçük sayı bulunur 8. ve yerinde kalır [2,3,4,5,6,7,8,15,9]
8.ADIM -->8.En küçük sayı bulunur 9. ve 8. sayı ile yer değiştirir.[2,3,4,5,6,7,8,9,15]
9.ADIM -->9.En küçük sayı bulunur 15. ve yerinde kalır [2,3,4,5,6,7,8,15,9] SURA HAZIRR!!
*/