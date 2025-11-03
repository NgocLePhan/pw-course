//1. Viết một hàm để tính chỉ số BMI (Body Mass Index) 
// dựa trên chiều cao (mét) và cân nặng (kg) và trả về phân loại BMI (Thiếu cân, Bình thường, Thừa cân, Béo phì).
// Biết:
// ○ Chiều cao được tính theo đơn vị mét (VD: 1.75m)
// ○ Cân nặng tính theo kg
// ○ Công thức tính BMI: cân nặng / (chiều cao*chiều cao)
// ○ BMI < 18.5: Thiếu cân
// ○ BMI < 25: Bình thường
// ○ BMI < 30: Thừa cân
// ○ BMI >= 30: Béo phì
function calculateBMI(weight, height) {
    return weight / (height * height);
}

const BMI = calculateBMI(65, 1.55);

if (BMI < 18.5) {
    console.log("BMI: " + BMI + ", Thiếu Cân");
}
else if (BMI < 25) {
    console.log("BMI: " + BMI + ", Bình Thường");
}
else if (BMI < 30) {
    console.log("BMI: " + BMI + ", Thừa Cân");
}
else if (BMI >= 30) {
    console.log("BMI: " + BMI + ", Béo Phì");
}

//2. Viết một hàm để chuyển đổi nhiệt độ từ độ C sang độ F và ngược lại. 
// Hàm sẽ nhận vào giá trị nhiệt độ và loại nhiệt độ ('C' hoặc 'F') và trả về nhiệt độ đã chuyển đổi.
// Biết công thức chuyển đổi:
// ○ Từ độ C sang độ F: độ F = (độ C) * 9/5 + 32;
// ○ Từ độ F sang độ C: (độ F - 32) * 5 / 9;
function convertTemperate(value, type) {
    if (type === "C") {
        return value * 9 / 5 + 32;
    }
    else if (type === "F") {
        return (value - 32) * 5 / 9;
    }
}

const Temp = convertTemperate(35, "C");
console.log("Nhiệt độ được chuyển đổi: " + Temp);

//3. Khai báo một mảng các phần tử bất kì. Viết một hàm để tính tổng của các phần tử trong một mảng số.
const numbers = [1, 2, 3, 4, 5, 6];

function sumNumber(arr) {
    let sum = 0;
    let arrLength = arr.length;
    for (let i = 0; i < arrLength; i++) {
        sum += arr[i]
    }
    return sum;
}

const result = sumNumber(numbers);
console.log("Tổng giá trị của mảng: " + result);

//4. Viết một hàm để lọc ra các số nguyên tố từ một mảng số đã cho.
//Biết:
//○ Số 0, số 1 không phải số nguyên tố.
//○ Các số nguyên tố là số chỉ chia hết cho 1 và chính nó
const numbersArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

//Kiểm tra 1 số có phải số nguyên tố không
function isPrime(num) {
    if (num < 2) {
        return false; // Số 0, số 1 không phải số nguyên tố.
    }
    // Math.sqrt là hàm tính căn bật 2
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
}

// Tìm số nguyên tố trong mảng
function findPrime(arr) {
    const primeNumbers = [];
    for (let i = 0; i < arr.length; i++) {
        if (isPrime(arr[i])) {
            primeNumbers.push(arr[i]);
        }
    }
    return primeNumbers;
}

const numberPrime = findPrime(numbersArray);
console.log("Số Nguyên Tố: " + numberPrime);

//5. Tạo một function để cập nhật email cho người dùng trong một danh sách, dựa trên tên người dùng.
//Đoạn code giả mã (pseudo code) như sau:
// Khai báo mảng global các object có 2 thuộc tính: name, email
const users = [
    { name: "Thúy", email: "thuy@gmail.com" },
    { name: "Tuấn", email: "tuan@gmail.com" },
    { name: "Doanh", email: "doanh@gmail.com" },
    { name: "Hòa", email: "hoa@gmail.com" },
    { name: "Ngọc", email: "ngoc@gmail.com" }
];
// Khai báo hàm có 2 tham số: name, newEmail
// Sử dụng vòng for, duyệt trong mảng, nếu gặp phần tử nào có tên trùng với tham số name, cập nhật giá trị email về newEmail
function updateEmail(name, newEmail) {
    for (let i = 0; i < users.length; i++) {
        if (users[i].name === name) {
            users[i].email = newEmail;
            return;
        }
    }
}
updateEmail("Hòa", "hoacute@gmail.com");
console.log(`Danh sách người dùng:`);
console.log(users);

//6. Viết một hàm tính điểm trung bình của các sinh viên dựa trên điểm số lưu trong một mảng các object.
//Biết object có cấu trúc như sau: {“name”: “Alex”, score: 85}
const student = [
    { name: "Dũng", score: 8 },
    { name: "Thế", score: 10 },
    { name: "Doanh", score: 5 },
    { name: "Thành", score: 10 },
    { name: "Hải", score: 7 }
];

function calAvgScore(student) {
    let totalScore = 0;
    for (let i = 0; i < student.length; i++) {
        totalScore += student[i].score;
    }

    let average = totalScore / student.length;
    return average;
}

const avg = calAvgScore(student);
console.log("Điểm trung bình: " + avg);

//7. Viết một hàm để kiểm tra xem tất cả sản phẩm trong một mảng có giá lớn hơn 0 không.
//Biết giỏ hàng là một mảng chứa các object sản phẩm. Sản phẩm có cấu trúc: {“name”: “product 1”, price: 100 }
const product = [
    { name: "Matcha Haru", price: 95 },
    { name: "Matcha Aki", price: 81 },
    { name: "Matcha Natsu", price: 70 },
    { name: "Hojicha", price: 0 },
    { name: "Genmaicha", price: 56 }
]

function checkProductPrice(product) {
    for (let i = 0; i < product.length; i++) {
        if (product[i].price <= 0) {
            return false;
        }
    }
    return true;
}

const resultProduct = checkProductPrice(product);
console.log(resultProduct);

//8. Viết hàm có một tham số là giờ, in ra cửa hàng còn mở cửa hay không. Biết cửa hàng mở cửa từ 9 giờ sáng đến 9 giờ tối.
function openClose(openHour) {
    if (openHour >= 9 && openHour <= 21) {
        console.log("Cửa hàng đang mở cửa");
    }
    else {
        console.log("Cửa hàng đang đóng cửa");
    }
}

openClose(10);

//9. Viết hàm có tham số là tuổi, in ra mức giá vé vào cổng tùy theo độ tuổi: 
// trẻ em dưới 5 tuổi miễn phí, người lớn từ 18 tuổi trở lên là 100k, và trẻ em từ 6 đến 17 tuổi là 50k.
function ticketPrice(age) {
    if (age <= 5) {
        console.log("Trẻ dưới 5 tuổi miễn phí.");
    }
    else if (age >= 18) {
        console.log("Người lớn từ 18 tuổi trở lên là 100k.");
    }
    else if (age >= 6 && age <= 18) {
        console.log("Trẻ em từ 6 đến 17 tuổi là 50k");
    }
}

ticketPrice(15);

//10. Viết hàm in ra tên tháng dựa vào số tháng được nhập vào. Sử dụng câu lệnh switch...case để xử lý.
// => Làm ở bài tập 4.

//11. Viết hàm nhập vào điểm số. In ra phân loại điểm số của học sinh: 
// giỏi (>= 8), khá (>= 6.5 và < 8), trung bình (>= 5 và < 6.5), yếu (< 5).
function studentScore(score) {
    if (score >= 8) {
        console.log("Giỏi");
    }
    else if (score >= 6.5 && score < 8) {
        console.log("Khá");
    }
    else if (score >= 5 && score < 6.5) {
        console.log("Trung Bình");
    }
    else if (score < 5) {
        console.log("Yếu");
    }
}

studentScore(6.2);

//12. Viết hàm có một tham số là nhiệt độ, in ra nhiệt độ và thông báo trạng thái thời tiết: 
// nóng (>= 30 độ C), mát (< 30 độ C và >= 20 độ C), lạnh (< 20 độ C)
function temperature(temp) {
    if (temp >= 30) {
        console.log(`Nhiệt độ hôm nay ${temp} độ C, trời nóng`);
    }
    else if (temp < 30 && temp >= 20) {
        console.log(`Nhiệt độ hôm nay ${temp} độ C, trời mát`);
    }
    else if (temp < 20) {
        console.log(`Nhiệt độ hôm nay ${temp} độ C, trời lạnh`);
    }
}
temperature(25);

