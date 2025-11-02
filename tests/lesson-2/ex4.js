// Khai báo biến cân nặng
const heigh = 155;

// Tính cân nặng lý tưởng
// Tính mức cân tối đa
// Tính mức cân tối thiểu
const maxWeigh = 155 % 100;
const idealWeight = (maxWeigh * 9) / 10;
const minWeight = (maxWeigh * 8) / 10;

// In cân nặng lý tưởng, mức cân tối đa, mức cân tối thiểu
console.log("Cân nặng lý tưởng: " + idealWeight + ", Mức cân tối đa: " + maxWeigh + ", Mức cân tối thiểu: " + minWeight);