function reverseArray<T>(arr: T[]): T[] {
    return arr.reverse();
}

// Приклад використання
const arr = [1, 2, 3];
const reversedArr = reverseArray(arr);

console.log(reversedArr); // [3, 2, 1]
console.log(reversedArr === arr); // true
