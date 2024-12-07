import User from './User';
import Course from './Course';

class Student extends User {
    public courses: Course[];

    constructor(name: string, email: string, password: string) {
        super(name, email, password);
        this.courses = [];
    }

    enroll(course: Course): void {
        if (!this.courses.includes(course)) {
            this.courses.push(course);
        }
    }

    validate(): void {
        super.validate();

        if (this.courses.length === 0) {
            throw new Error('Студент повинен бути записаний хоча б на один курс');
        }
    }
}

export default Student;
