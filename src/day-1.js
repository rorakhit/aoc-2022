const fs = require('fs');

const text = fs.readFileSync("../aoc-2022-day1-input.txt").toString();
const textByElf = text.split("\n\n");


const elfSepCalorieCount = [];
for (let i = 0; i < textByElf.length; i++) {
    elfSepCalorieCount.push(textByElf[i].split('\n'));
}

const elfSepTotalCalories = [];
for (let j = 0; j < elfSepCalorieCount.length; j++) {
    let calorieCount = 0;
    for (let k = 0; k < elfSepCalorieCount[j].length; k++) {
        calorieCount += Number(elfSepCalorieCount[j][k]);
    }
    elfSepTotalCalories.push(calorieCount);
}

console.log(elfSepTotalCalories)
let highestCalorie = Math.max(...elfSepTotalCalories);
console.log(highestCalorie);
const index = elfSepTotalCalories.indexOf(highestCalorie);


console.log(index);
