# Snail Sort

Given an n x n array, return the array elements arranged from outermost elements to the middle element, traveling clockwise.

array = [[1,2,3],
[4,5,6],
[7,8,9]]
snail(array) #=> [1,2,3,6,9,8,7,4,5]
For better understanding, please follow the numbers of the next array consecutively:

array = [[1,2,3],
[8,9,4],
[7,6,5]]
snail(array) #=> [1,2,3,4,5,6,7,8,9]

## Planning

#### Coord method

- example for 3x3:

3R2D2L1U1R

```
across top
[0, 0]
[1, 0]
[2, 0]

down
[2, 1]
[2, 2]

left
[1, 2]
[0, 2]

up
[0, 1]

right
[1, 1]
```

- example for 4x4:

4R3D3L2U2R1D1L

```
r4
[0, 0]
[1, 0]
[2, 0]
[3, 0]
d3
[3, 1]
[3, 2]
[3, 3]
l3
[2, 3]
[1, 3]
[0, 3]
u2
[0, 2]
[0, 1]
r2
[1, 1]
[2, 1]
d1
[2, 2]
l1
[1, 2]
```
