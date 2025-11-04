// Khai báo biến cân nặng
const height = 155;

// Tính cân nặng lý tưởng
// Tính mức cân tối đa
// Tính mức cân tối thiểu
const maxWeight = 155 % 100;
const idealWeight = (maxWeight * 9) / 10;
const minWeight = (maxWeight * 8) / 10;

// In cân nặng lý tưởng, mức cân tối đa, mức cân tối thiểu
console.log("Cân nặng lý tưởng: " + idealWeight + ", Mức cân tối đa: " + maxWeight + ", Mức cân tối thiểu: " + minWeight);