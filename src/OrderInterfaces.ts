import { OrderStatus, PaymentType } from './OrderEnums';

export interface Order {
    id: string;
    amount: number;
    status: OrderStatus;
    paymentType: PaymentType;
}
