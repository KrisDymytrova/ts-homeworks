import BaseModel from './BaseModel';

class User extends BaseModel {
    static currentId = 0;

    constructor(name, email, password) {
        super();
        this.id = ++User.currentId;
        this.name = name;
        this.email = email;
        this._password = password;
    }

    set email(value) {
        const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
        if (emailRegex.test(value)) {
            this._email = value;
        } else {
            throw new Error('Невірний формат email');
        }
    }

    get email() {
        return this._email;
    }

    changePassword(newPassword) {
        this._password = newPassword;
    }

    get info() {
        return `ID: ${this.id}, Name: ${this.name}, Email: ${this.email}`;
    }

    validate() {
        if (!this.name || !this.email || !this._password) {
            throw new Error('Усі поля користувача повинні бути заповнені');
        }
    }
}

export default User;