// Завдання 1

interface Address {
    street: string;
    city: string;
    zipCode: number;
}

interface User {
    name: string;
    age: number;
}

interface UserWithAddress extends Address, User {
    email: string;
}

// Приклад використання:

const user1: UserWithAddress = {
    name: 'Kris',
    age: 33,
    street: 'Filatova',
    city: 'Odessa',
    zipCode: 65000,
    email: 'kris@example.com',
}

console.log(user1)


// Завдання 2

interface Product {
    name: string;
    price: number;
    category: {
        categoryName: string;
        categoryId: number;
    }
}

interface Order {
    orderId: number;
    userId: number;
    products: Product[];
}

type Orders = Order[];

// Приклад використання:

const orders: Orders = [
    {
        orderId: 123,
        userId: 19,
        products: [
            {
                name: 'Apple',
                price: 30,
                category: {
                    categoryName: 'Fruits',
                    categoryId: 2
                }
            },
            {
                name: 'Orange',
                price: 25,
                category: {
                    categoryName: 'Fruits',
                    categoryId: 2
                }
            }
        ]
    },
    {
        orderId: 124,
        userId: 21,
        products: [
            {
                name: 'Phone',
                price: 10000,
                category: {
                    categoryName: 'Electronics',
                    categoryId: 5
                }
            }
        ]
    }
];

console.log(orders);


// Завдання 3

interface Person {
    firstName: string;
    lastName: string;
    middleName?: string;
}

function getFullName(person: Person): string {
    return person.middleName
        ? `${person.firstName} ${person.lastName} ${person.middleName}`
        : `${person.firstName} ${person.lastName}`;
}

// Приклад використання

const person1: Person = { firstName: 'Kris', lastName: 'Dymytrova', middleName: 'Sergeevna' };
const person2: Person = { firstName: 'Kris', lastName: 'Dymytrova' };

console.log(getFullName(person1)); // Kris Dymytrova Sergeevna
console.log(getFullName(person2)); // Kris Dymytrova


// Завдання 4

interface Settings {
    theme: 'light' | 'dark';
    notifications: boolean;
    autoSave: {
        enabled: boolean;
        interval: number;
    };
}

function applySettings(settings: Settings): void {
    console.log(`Тема: ${settings.theme === 'light' ? 'Світла' : 'Темна'}`);

    if (settings.notifications) {
        console.log('Сповіщення увімкнені');
    } else {
        console.log('Сповіщення вимкнені');
    }

    if (settings.autoSave.enabled) {
        console.log(`Автозбереження увімкнене з інтервалом ${settings.autoSave.interval} хвилин.`);
    } else {
        console.log('Автозбереження вимкнене.');
    }
}

// Приклад використання

const userSettings: Settings = {
    theme: 'dark',
    notifications: true,
    autoSave: {
        enabled: true,
        interval: 5
    }
};

applySettings(userSettings);