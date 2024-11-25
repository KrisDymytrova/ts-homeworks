import { OrderStatus, PaymentType } from './OrderEnums';
import { Order } from './OrderInterfaces';

const orders: Order[] = [
    { id: '1', amount: 1000, status: OrderStatus.Processing, paymentType: PaymentType.CreditCard },
    { id: '2', amount: 2500, status: OrderStatus.Shipped, paymentType: PaymentType.BankTransfer },
    { id: '3', amount: 1200, status: OrderStatus.Pending, paymentType: PaymentType.BankTransfer },
    { id: '4', amount: 300, status: OrderStatus.Delivered, paymentType: PaymentType.CashOnDelivery },
];

const updateOrderStatus = (
    order: Order,
    getStatus: (currentStatus: OrderStatus) => OrderStatus
): Order => {
    const newStatus = getStatus(order.status);
    const updatedOrder = { ...order, status: newStatus };
    console.log(`Статус замовлення з ID ${order.id} оновлено до: ${newStatus}`);
    return updatedOrder;
};

const getOrdersByStatus = (orders: Order[], status: OrderStatus): Order[] => {
    return orders.filter(order => order.status === status);
};

// Приклад використання:

const updatedOrder = updateOrderStatus(orders[0], currentStatus => {
    if (currentStatus === OrderStatus.Processing) {
        return OrderStatus.Shipped;
    }
    return currentStatus;
});
console.log('Оновлене замовлення:', updatedOrder);

const pendingOrders = getOrdersByStatus(orders, OrderStatus.Pending);
console.log('Замовлення зі статусом Pending:', pendingOrders);
