abstract class BaseModel {
    readonly createdAt: Date;

    protected constructor() {
        if (new.target === BaseModel) {
            throw new Error("Не можна створювати екземпляр абстрактного класу BaseModel");
        }
        this.createdAt = new Date();
    }

    abstract validate(): void;
}

export default BaseModel;