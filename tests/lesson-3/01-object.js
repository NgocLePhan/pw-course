//1. Tạo một object car với thuộc tính make=”Toyota”, model=”Corolla”, và year=2021. 
// Sau đó in ra năm sản xuất của xe.
const car = {
    make: "Toyota",
    model: "Corolla",
    year: "2021"
};

console.log("Năm sản xuất: " + car.year);

//2. Tạo một object person có thuộc tính name, address (là một object lồng với các thuộc tính street, city, country). 
// In ra tên đường của người này.
const person = {
    name: "Ngoc Le",
    address: {
        street: "Nam Kỳ Khởi Nghĩa",
        city: "HCM",
        country: "VN"
    }
};

console.log(`Đường: ${person.address.street}`);

//3. Tạo một object student và truy cập đến điểm môn toán (math) sử dụng ngoặc vuông.
//Biết object student bao gồm 2 thuộc tính: name và grades. 
// Trong đó grades là một object với 2 thuộc tính kiểu number: math và english
const student = {
    name: "Nguyễn văn A",
    grades: {
        math: 70,
        english: 40
    }
};

console.log(`Học sinh: ${student["name"]}. Toán: ${student["grades"]["math"]}`);

//4. Tạo một object product với các thuộc tính là tên các sản phẩm và giá trị là giá của chúng. 
// Dùng vòng lặp for...in để in ra tên và giá của mỗi sản phẩm.
// sẽ làm trong lesson-4

//5. Tạo một object settings để quản lý cài đặt của ứng dụng với các thuộc tính như volume, brightness. 
// Thay đổi volume và in ra object mới.
const settings = {
    volume: 80,
    brightness: 50
};

settings.volume = 100; // thay đổi giá trị volume
console.log("Giá trị volume mới: " + settings.volume);

//6. Tạo một object bike và sau đó thêm thuộc tính color vào object đó
const bike = {
    branch: "Honda",
    model: "Camry",
    year: 2023
}

bike.color = "Đỏ xen kẽ đen"; // thêm thuộc tính color
console.log(`Xe ${bike.model} màu ${bike.color} thuộc hãng ${bike.branch} sản xuất ${bike.year}`);

//7. Tạo một object employee với các thuộc tính: name, age và xóa thuộc tính age khỏi object này
const employee = {
    name: "Nguyễn Văn A",
    age: 20
};

delete employee.age; // xóa thuộc tính age
console.log("Thông tin nhân viên: ");
console.log(employee);

//8. Một trường học có các lớp học và học sinh như sau:
//○ classA: An, Bình, Châu
// ○ classB: Đào, Hương, Giang
// Hãy viết code để đáp ứng yêu cầu sau:
// - Khai báo tên biến: school
// - Tên class là tên thuộc tính, giá trị của các thuộc tính này là một mảng chứa tên các học sinh
// Vd:
// const school = { classA: ["Giang"]...}
const school = {
    classA: ["An", "Bình", "Châu"],
    classB: ["Đào", "Hương", "Giang"]
}
console.log(school);

