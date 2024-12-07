import BaseModel from './BaseModel';

class User extends BaseModel {
    private static currentId = 0;
    public readonly id: number;
    public name: string;
    private _email: string = '';
    private _password: string;

    constructor(name: string, email: string, password: string) {
        super();
        this.id = ++User.currentId;
        this.name = name;
        this.email = email;
        this._password = password;
    }

    set email(value: string) {
        const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
        if (emailRegex.test(value)) {
            this._email = value;
        } else {
            throw new Error('Невірний формат email');
        }
    }

    get email(): string {
        return this._email;
    }

    changePassword(newPassword: string): void {
        this._password = newPassword;
    }

    get info(): string {
        return `ID: ${this.id}, Name: ${this.name}, Email: ${this.email}`;
    }

    validate(): void {
        if (!this.name || !this._email || !this._password) {
            throw new Error('Усі поля користувача повинні бути заповнені');
        }
    }
}

export default User;