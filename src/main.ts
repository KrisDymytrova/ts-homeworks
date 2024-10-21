type Product = {
    name: string;
    price: number;
    isAvailable: boolean;
};

function getProductDescription(product: Product): string {
    const availability = product.isAvailable ? 'Так' : 'Ні';
    return `Товар: ${product.name}, Ціна: ${product.price} грн., В наявності: ${availability}`;
}

// Приклад використання:
const product: Product = {
    name: 'Смартфон',
    price: 25000,
    isAvailable: true
};

const description = getProductDescription(product);
console.log(description); // Товар: Смартфон, Ціна: 25000 грн., В наявності: Так