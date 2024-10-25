ДЗ 5. TS: Deep Copy

Напиши функцію для рекурсивного копіювання об'єкта, враховуючи вкладені об'єкти та масиви.

<pre> const original = { a: 1, b: { c: 2 }, d: [3, 4] };
const copy = deepClone(original);
// original !== copy
// original.b !== copy.b
// original.d !== copy.d </pre>