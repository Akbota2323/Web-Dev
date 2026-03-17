import math
a = int(input())
b = int(input())
if(a<=1000 and b<=1000):
    print(round(math.sqrt(a*a+b*b),1))
