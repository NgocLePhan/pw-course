//1. Tính tổng từ 1 đến 100.
let total = 0;
for (let i = 1; i <= 100; i++) {
    total += i;
};
console.log(total);

//2. In bảng cửu chương từ 2 đến 9.
for (let i = 2; i <= 9; i++) {
    console.log(`\n Bảng cửu chương ${i}:`);

    for (let j = 1; j <= 10; j++) {
        console.log(`${i} x ${j} = ${i * j}`);
    }
}

//3. Tạo một mảng chứa các số lẻ từ 1 đến 99.
const number = [];
for (let i = 1; i <= 99; i++) {
    if (i % 2 !== 0) {
        number.push(i);
    }
}
console.log("Mảng số lẻ: ");
console.log(number);

//4. In ra 10 email dựa trên tên người dùng và số thứ tự (ví dụ: user-1@example.com, user2@example.com, ..., user10@example.com).
for (let i = 1; i <= 10; i++) {
    console.log(`ngoc-${i}@gmail.com`);
}

/*5. Tính tổng doanh thu của 12 tháng trong năm dựa trên mảng doanh thu đã cho và
in ra tổng doanh thu. Biết cấu trúc object của mảng doanh thu như sau:
{“month”: 2, “total”: 100}*/
const revenues = [
    { month: 1, total: 100 },
    { month: 2, total: 200 },
    { month: 3, total: 150 },
    { month: 4, total: 180 },
    { month: 5, total: 220 },
    { month: 6, total: 300 },
    { month: 7, total: 250 },
    { month: 8, total: 190 },
    { month: 9, total: 450 },
    { month: 10, total: 250 },
    { month: 11, total: 170 },
    { month: 12, total: 260 }
];

let totalRevenues = 0;
for (let i = 0; i < revenues.length; i++) {
    totalRevenues += revenues[i].total;
}

console.log(`Tổng doanh số trong năm ${totalRevenues}`);