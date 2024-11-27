import BaseModel from './BaseModel';
import Student from './Student';
import Teacher from './Teacher';

class Course extends BaseModel {
    static currentId = 0;

    constructor(name, teacher = null) {
        super();
        this.id = ++Course.currentId;
        this.name = name;
        this.teacher = teacher;
        this._students = [];
    }

    set students(value) {
        if (Array.isArray(value)) {
            value.forEach(student => {
                if (!(student instanceof Student)) {
                    throw new Error('Усі студенти повинні бути екземплярами класу Student');
                }
            });
            this._students = value;
        } else {
            throw new Error('students повинні бути масивом');
        }
    }

    get students() {
        return this._students;
    }

    addStudent(student) {
        if (student instanceof Student) {
            this._students.push(student);
            student.enroll(this);
        } else {
            throw new Error('Тільки екземпляри класу Student можуть бути додані до курсу');
        }
    }

    removeStudent(studentId) {
        this._students = this._students.filter(student => student.id !== studentId);
    }

    listStudents() {
        return this._students.map(student => student.name);
    }

    validate() {
        if (!this.name) {
            throw new Error('Курс повинен мати назву');
        }

        if (this.teacher !== null && !(this.teacher instanceof Teacher)) {
            throw new Error('Викладач має бути об’єктом класу Teacher або null');
        }
    }
}

export default Course;