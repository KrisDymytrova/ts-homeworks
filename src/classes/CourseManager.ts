import Student from './Student';
import Teacher from './Teacher';
import Course from './Course';

class CourseManager {
    public users: (Student | Teacher)[];
    public courses: Course[];

    constructor() {
        this.users = [];
        this.courses = [];
    }

    addUser(user: Student | Teacher): void {
        this.users.push(user);
    }

    addCourse(course: Course): void {
        if (!course.validate || typeof course.validate !== 'function') {
            throw new Error('Курс має реалізовувати метод validate()');
        }

        course.validate();
        this.courses.push(course);
    }

    assignTeacherToCourse(courseId: number, teacherId: number): void {
        const course = this.courses.find((c) => c.id === courseId);
        const teacher = this.users.find(
            (u) => u.id === teacherId && u instanceof Teacher
        ) as Teacher | undefined;

        if (!course || !teacher) {
            throw new Error('Невірний курс або викладач');
        }

        course.teacher = teacher;
        teacher.addCourse(course);
    }

    enrollStudentToCourse(courseId: number, studentId: number): void {
        const course = this.courses.find((c) => c.id === courseId);
        const student = this.users.find(
            (u) => u.id === studentId && u instanceof Student
        ) as Student | undefined;

        if (!course || !student) {
            throw new Error('Невірний курс або студент');
        }

        course.addStudent(student);
    }

    static generateReport(courses: Course[], users: (Student | Teacher)[]): void {
        console.log('Звіт про систему:');
        courses.forEach((course) => {
            const teacherName = course.teacher ? course.teacher.name : 'Не призначений';
            console.log(`Курс: ${course.name}, Викладач: ${teacherName}`);
            console.log('Студенти:');
            course.listStudents().forEach((student) => console.log(`- ${student}`));
        });

        console.log('\nКористувачі системи:');
        users.forEach((user) => console.log(user.info));
    }
}

export default CourseManager;
