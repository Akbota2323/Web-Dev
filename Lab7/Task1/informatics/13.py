import math
a = int(input())
b = int(input())
for x in range(a,b+1):
    if(math.sqrt(x)**2==x):
        print(x)