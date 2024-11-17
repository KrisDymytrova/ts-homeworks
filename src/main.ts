interface Student {
    id: string;
    name: string;
    age: number;
}

type Subject = "Math" | "Science" | "Literature" | "History";

type Grades = Record<Subject, number>;

interface UniversityRecord {
    students: Record<string, Student>;
    grades: Record<string, Grades>;
}

const universityRecord: UniversityRecord = {
    students: {
        '1': { id: '1', name: 'Kristina', age: 29 },
        '2': { id: '2', name: 'Dima', age: 24 },
        '3': { id: '3', name: 'Vova', age: 18 }
    },
    grades: {
        '1': { Math: 87, Science: 91, Literature: 88, History: 98 },
        '2': { Math: 95, Science: 90, Literature: 89, History: 70 },
        '3': { Math: 71, Science: 87, Literature: 93, History: 85 }
    }
};

const getStudentGrades = (universityRecord: UniversityRecord, studentId: string): Grades | undefined => {
    return universityRecord.grades[studentId];
};

const getAverageGrade = (universityRecord: UniversityRecord, subject: Subject): number => {
    const allGrades = Object.values(universityRecord.grades)
        .map(grades => grades[subject])
        .filter(grade => grade !== undefined);

    const total = allGrades.reduce((sum, grade) => sum + grade, 0);
    return allGrades.length > 0 ? total / allGrades.length : 0;
};

// Приклад використання:
console.log(getStudentGrades(universityRecord, '1')); // Повертає оцінки студента з ID '1'
console.log(getAverageGrade(universityRecord, 'Math')); // Повертає середню оцінку по предмету Math