// Дан массив [16,-37,54,-4,72,-56,47,4,-16,25,-37,46,4,-51,27,-63,4,-54,76,-4,12,-35,4,47]
// Найти сумму и количество положительных элементов.
// Найти минимальный элемент массива.
// Найти максимальный элемент массива.
// Определить количество отрицательных элементов.
// Найти количество нечетных положительных элементов.
// Найти количество четных положительных элементов.
// Найти сумму четных положительных элементов.
// Найти сумму нечетных положительных элементов.
// Найти определить количество элементов, равных 4.

check = [16,-37,54,-4,72,-56,47,4,-16,25,-37,46,4,-51,27,-63,4,-54,76,-4,12,-35,4,47];

let sumPositive = 0;
let countPositive = 0;
let minArray = 0;
let maxArray = 0;
let countNegative = 0;
let countOddPositive = 0; 
let sumOddPositive = 0;
let countEvenPositive = 0;
let sumEvenPositive = 0;
let countFour = 0;

function array() {
  

  for (let i = 0; i < check.length; i++) {
    if (check[i] > 0) {
        sumPositive += check[i];
        countPositive++;
    }
    if (check[i] < minArray) {
        minArray = check[i];
    }  
    if (check[i] > maxArray) {
        maxArray = check[i];
    } 
    if (check[i] < 0) {
        countNegative++;
    }
    if (check[i] > 0 && check[i] % 2 !== 0) {
        countOddPositive++;
        sumOddPositive += check[i];
    }
    if (check[i] > 0 && check[i] % 2 == 0) {
        countEvenPositive++;
        sumEvenPositive += check[i];
    }
    if (check[i] == 4) {
        countFour++;
    }
  }
  console.log ('Сумму и количество положительных элементов ' + sumPositive + ", " + countPositive);
  console.log ('Минимальный элемент массива ' + minArray);
  console.log ("Максимальный элемент массива " + maxArray);
  console.log ('Количество отрицательных элементов ' + countNegative);
  console.log ("Количество нечетных положительных элементов " + countOddPositive);
  console.log ('Количество четных положительных элементов ' + countEvenPositive);
  console.log ('Сумма нечетных положительных элементов ' + sumOddPositive);
  console.log ('Сумма четных положительных элементов ' + sumEvenPositive);
  console.log ('Количество элементов, равных 4: ' + countFour);
}
array();
