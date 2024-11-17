enum OrderStatus {
    Pending = 'Pending',
    Processing = 'Processing',
    Shipped = 'Shipped',
    Delivered = 'Delivered',
    Cancelled = 'Cancelled'
}

enum PaymentType {
    CreditCard = 'CreditCard',
    PayPal = 'PayPal',
    BankTransfer = 'BankTransfer',
    CashOnDelivery = 'CashOnDelivery'
}

interface Order {
    id: string;
    amount: number;
    status: OrderStatus;
    paymentType: PaymentType;
}

const orders: Order[] = [
    { id: '1', amount: 1000, status: OrderStatus.Processing, paymentType: PaymentType.CreditCard },
    { id: '2', amount: 2500, status: OrderStatus.Shipped, paymentType: PaymentType.BankTransfer },
    { id: '3', amount: 1200, status: OrderStatus.Pending, paymentType: PaymentType.BankTransfer },
    { id: '4', amount: 300, status: OrderStatus.Delivered, paymentType: PaymentType.CashOnDelivery },
];

const updateOrderStatus = (order: Order, status: OrderStatus): void => {
    order.status = status;
    console.log(`Статус замовлення з ID ${order.id} оновлено до: ${status}`);
};

const getOrdersByStatus = (orders: Order[], status: OrderStatus): Order[] => {
    return orders.filter(order => order.status === status);
};

// Приклад використання:

updateOrderStatus(orders[0], OrderStatus.Shipped); // Статус замовлення з ID 1 оновлено до: Shipped

const shippedOrders = getOrdersByStatus(orders, OrderStatus.Shipped);
console.log('Замовлення зі статусом Shipped:', shippedOrders); // [{ id: '1', amount: 1000, status: OrderStatus.Shipped, paymentType: PaymentType.CreditCard }, { id: '2', amount: 2500, status: OrderStatus.Shipped, paymentType: PaymentType.BankTransfer }]
