class BaseModel {
    constructor() {
        if (this.constructor === BaseModel) {
            throw new Error('Не можна створювати екземпляр абстрактного класу BaseModel');
        }
        this.createdAt = new Date();
    }

    validate() {
        throw new Error('Метод validate() має бути реалізований у дочірньому класі');
    }
}

export default BaseModel;