/*1. In ra tên và giá trị của mỗi thuộc tính trong một đối tượng. Ví dụ: object student
= {“name”: “Alex”, “age”: 10} thì in ra
name=Alex
age=10*/
let car = {
    branch: "Toyota",
    model: "Camry",
    year: 2022
}

for (let proberty in car) {
    console.log(proberty + " = " + car[proberty]);
}

/*2. Tính tổng các giá trị số của các thuộc tính trong một đối tượng. Ví dụ: object
student={“name”: “Alex”, “age”: 10, “salary”: 20} thì in ra tổng
30 (=10+20).*/
let products = {
    menu: "các loại bánh hôm nay",
    Tiramisu: 150,
    Cheese_cake: 200,
    Chocolate_cake: 85
}

let total = 0;
for (let cake in products) {
    if(typeof products[cake] === 'number'){
        total += products[cake];
    }
}

console.log("Tổng giá các loại bánh: " + total);

/*3. Tạo một mảng chứa tất cả các tên thuộc tính của một đối tượng. Ví dụ object
student={“name”: “Alex”, “age”: 10} thì sẽ tạo ra một mảng
[“name”, “age”]*/
let student = {
    name: "Happy",
    age: "30",
    class: "E101"
}

let arrayProberty = [];
for (let proberty in student) {
    arrayProberty.push(proberty);
}

console.log(arrayProberty);