import BaseModel from './BaseModel';
import Student from './Student';
import Teacher from './Teacher';

class Course extends BaseModel {
    private static currentId = 0;

    public readonly id: number;
    public name: string;
    public teacher: Teacher | null;
    private _students: Student[];

    constructor(name: string, teacher: Teacher | null = null) {
        super();
        this.id = ++Course.currentId;
        this.name = name;
        this.teacher = teacher;
        this._students = [];
        this.validate();
    }

    set students(value: Student[]) {
        if (!Array.isArray(value)) {
            throw new Error('students повинні бути масивом');
        }
        this._students = value;
    }

    get students(): Student[] {
        return this._students;
    }

    addStudent(student: Student): void {
        this._students.push(student);
        student.enroll(this);
    }

    removeStudent(studentId: number): void {
        this._students = this._students.filter((student) => student.id !== studentId);
    }

    listStudents(): string[] {
        return this._students.map((student) => student.name);
    }

    validate(): void {
        if (!this.name) {
            throw new Error('Курс повинен мати назву');
        }
    }
}

export default Course;