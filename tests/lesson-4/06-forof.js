/*1. Tìm và in ra vị trí phần tử đầu tiên và cuối cùng trong một mảng bằng với giá trị
cho trước. Ví dụ với mảng [1, 2, 3, 4, 3, 55, 23] và giá trị cho trước là
3 thì vị trí cần in ra đầu tiên là 2 và vị trí cuối cùng cần in ra là 4.*/
const arrayNumber = [1, 2, 3, 4, 3, 55, 23];

function findIndex(arr, num) {
    let firstIndex = -1;
    let lastIndex = -1;
    let index = 0;

    for (let element of arr) {
        if (element === num) {
            if (firstIndex === -1) {
                firstIndex = index;
            }
            lastIndex = index;
        }
        index++;
    }
    return { firstIndex, lastIndex };
}

const results = findIndex(arrayNumber, 3);
console.log(`Vị trí đầu tiên: ${results.firstIndex} và vị trí cuối cùng: ${results.lastIndex}`);

/*2. Tạo mảng chứa các kí tự nghịch đảo từ một chuỗi đã cho. Ví dụ với chuỗi
”Playwright” thì mảng kết quả sẽ là [“t”, “h”, “g”, “i”, “r”, “w”,
“y”, “a”, “l”, “P”] => dua vao bai tap for*/
const str = "Playwright";
const covertArray = [];

for (let i = str.length - 1; i >= 0; i--) {
    covertArray.push(str[i]);
}

console.log(covertArray);

/*3. Lọc ra tất cả các phần tử duy nhất trong một mảng. Ví dụ với mảng [1, 2, 3,
1, 2, 4, 5] thì các phần tử duy nhất (xuất hiện 1 lần) là: [3, 4, 5]*/
const arrNumbers = [1, 2, 3, 1, 2, 4, 5];
const uniqueNumbers = [];

for (let number of arrNumbers) {
    let count = 0;

    //Tìm 1 số xuất hình bao nhiêu lần trong mảng
    for (let num of arrNumbers) {
        if (number === num) {
            count++;
        }
    }

    //thêm vào số chỉ xuất hiện 1 lần
    if (count === 1) {
        uniqueNumbers.push(number);
    }
}

console.log(uniqueNumbers);

