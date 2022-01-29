/*
PROJE 2: 
[16,21,11,8,12,22] -> Merge Sort

Yukarıdaki dizinin sort türüne göre aşamalarını yazınız.
Big-O gösterimini yazınız.

1.ADIM --> 16,21,11 ve 8,12,22 diye 2 gruba ayirdik
2.ADIM --> 16 ve 21,11 diye 1. grup, 8 ve 12,22 diye 2. grup ayrildi
3.ADIM --> 16 ve 21 ve 11 oldu , 8 ve 12 ve 22 oldu ayrilma bitti diger adimda birlestirme baslayacak
4.ADIM --> 16 ve 11,21 olarak, 8 ve 12,22 olarak birlestirildi
5.ADIM --> 11,16,21 olarak, 8,12,22 olarak birlestirildi
6.ADIM --> 8,11,12,16,21,22 olarak siralandi

Big-o gosterimi o(nlogn)

*/