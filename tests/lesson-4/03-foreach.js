/*1. In ra tất cả các phần tử của một mảng. Ví dụ mảng [1, 2, 3] thì in ra
1
2
3*/
const arrNumber = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

arrNumber.forEach((value) => {
    console.log(value);
})

/*2. Tính tổng, tìm giá trị lớn nhất và nhỏ nhất trong một mảng. Ví dụ mảng [1, 2,
3] thì tổng sẽ là 6 (1+2+3) và giá trị lớn nhất là 3*/
const number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let total = 0;
let max = number[0]; // Lấy phần tử đầu tiên của mảng làm “giá trị lớn nhất tạm thời”.
let min = number[0]; // Lấy phần tử đầu tiên của mảng làm “giá trị nhỏ nhất tạm thời”.

number.forEach((value) => {

    total += value; // tính tổng các số trong mảng

    // tìm ra số lớn nhất
    if (value > max) {
        max = value;
    }

    // tìm ra số nhỏ nhất
    if (value < min) {
        min = value;
    }

})

console.log(`Tổng các số: ${total}`);
console.log(`Số lớn nhất là: ${max}`);
console.log(`Số nhỏ nhất là: ${min}`);

/*3. Tạo một mảng mới từ một mảng đã cho, trong đó mỗi phần tử được nhân đôi. Ví
dụ mảng [1, 2, 3] thì mảng mới sẽ là [2, 4, 6]*/
const array = [2, 4, 6, 8, 10, 12, 14, 16, 18];
const newArray = [];

array.forEach((value) => {
    newArray.push(value * 2);
})

console.log(newArray);