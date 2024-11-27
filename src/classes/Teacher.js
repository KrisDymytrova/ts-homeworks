import User from './User';

class Teacher extends User {
    constructor(name, email, password) {
        super(name, email, password);
        this.courses = [];
    }

    addCourse(course) {
        if (!course || typeof course !== 'object' || !course.name) {
            throw new Error('Некоректний курс');
        }
        this.courses.push(course);
    }

    validate() {
        super.validate();
        if (this.courses.length === 0) {
            throw new Error('Викладач повинен мати хоча б один курс');
        }
    }
}

export default Teacher;