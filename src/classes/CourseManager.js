import Student from './Student';
import Teacher from './Teacher';

class CourseManager {
    constructor() {
        this.users = [];
        this.courses = [];
    }

    addUser(user) {
        if (!(user instanceof Student || user instanceof Teacher)) {
            throw new Error('Користувач повинен бути викладачем або студентом');
        }

        this.users.push(user);
    }

    addCourse(course) {
        if (!course.validate || typeof course.validate !== 'function') {
            throw new Error('Курс має реалізовувати метод validate()');
        }
        course.validate();
        this.courses.push(course);
    }

    assignTeacherToCourse(courseId, teacherId) {
        const course = this.courses.find(course => course.id === courseId);
        const teacher = this.users.find(user => user.id === teacherId && user instanceof Teacher);

        if (!course || !teacher) {
            throw new Error('Невірний курс або викладач');
        }

        course.teacher = teacher;
        teacher.addCourse(course);
    }

    enrollStudentToCourse(courseId, studentId) {
        const course = this.courses.find(c => c.id === courseId);
        const student = this.users.find(u => u.id === studentId && u instanceof Student);

        if (!course || !student) {
            throw new Error('Невірний курс або студент');
        }

        course.addStudent(student);
    }

    static generateReport(courses, users) {
        console.log('Звіт про систему:');
        courses.forEach(course => {
            const teacherName = course.teacher ? course.teacher.name : 'Не призначений';
            console.log(`Курс: ${course.name}, Викладач: ${teacherName}`);
            console.log('Студенти:');
            course.listStudents().forEach(student => console.log(`- ${student}`));
        });

        console.log('\nКористувачі системи:');
        users.forEach(user => console.log(user.info));
    }
}

export default CourseManager;