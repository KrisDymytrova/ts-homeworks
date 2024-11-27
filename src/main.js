import Student from './classes/Student';
import Teacher from './classes/Teacher';
import Course from './classes/Course';
import CourseManager from './classes/CourseManager';

const manager = new CourseManager();

const teacher1 = new Teacher('Vova', 'vova@example.com', 'password1');
const teacher2 = new Teacher('Andrew', 'andrew@example.com', 'password2');

manager.addUser(teacher1);
manager.addUser(teacher2);

const course1 = new Course('TS', null);
const course2 = new Course('React', null);

manager.addCourse(course1);
manager.addCourse(course2);

manager.assignTeacherToCourse(course1.id, teacher1.id);
manager.assignTeacherToCourse(course2.id, teacher2.id);

const student1 = new Student('Kris', 'kris@example.com', 'password123');
const student2 = new Student('Alex', 'alex@example.com', 'password456');

manager.addUser(student1);
manager.addUser(student2);

manager.enrollStudentToCourse(course1.id, student1.id);
manager.enrollStudentToCourse(course2.id, student2.id);
manager.enrollStudentToCourse(course1.id, student2.id);

CourseManager.generateReport(manager.courses, manager.users);