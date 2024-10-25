function deepClone<T>(obj: T): T {
    if (obj === null || typeof obj !== 'object') {
        return obj;
    }

    if (Array.isArray(obj)) {
        return obj.map(item => deepClone(item)) as unknown as T;
    }

    const clonedObj: { [key: string]: any } = {};
    for (const key in obj) {
        if (obj.hasOwnProperty(key)) {
            clonedObj[key] = deepClone(obj[key]);
        }
    }

    return clonedObj as T;
}

// Приклад використання
const original = { a: 1, b: { c: 2 }, d: [3, 4] };
const copy = deepClone(original);

console.log(copy);
console.log(original !== copy);           // true
console.log(original.b !== copy.b);       // true
console.log(original.d !== copy.d);       // true