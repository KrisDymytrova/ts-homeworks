import User from './User';
import Course from './Course';

export class Teacher extends User {
    public courses: Course[];

    constructor(name: string, email: string, password: string) {
        super(name, email, password);
        this.courses = [];
    }

    addCourse(course: Course): void {
        if (!course) {
            throw new Error('Некоректний курс');
        }
        this.courses.push(course);
    }

    validate(): void {
        super.validate();

        if (this.courses.length === 0) {
            throw new Error('Викладач повинен мати хоча б один курс');
        }
    }
}

export default Teacher;
