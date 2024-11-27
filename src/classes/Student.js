import User from './User';

class Student extends User {
    constructor(name, email, password) {
        super(name, email, password);
        this.courses = [];
    }

    enroll(course) {
        if (!this.courses.includes(course)) {
            this.courses.push(course);
        }
    }

    validate() {
        super.validate();
    }
}

export default Student;