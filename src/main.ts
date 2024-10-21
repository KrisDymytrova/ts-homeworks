function getAverage(numbers: number[]): number {
    if (numbers.length === 0) {
        return 0;
    }

    const sum = numbers.reduce((acc, num) => acc + num, 0);
    return sum / numbers.length;
}

// Приклад використання:
const values = [10, 20, 30, 40, 50];
const average = getAverage(values);
console.log(`Середнє значення: ${average}`); // Середнє значення: 30
