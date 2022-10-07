
const createStudent = (studentName, gradeLevel) => {
    const student = {
        name: studentName,
        grade: gradeLevel
    }

    return student;
}

const addMathGrade = (student) => {
    student.math = "B";

    return student;
}

const addHistoryGrade = (student) => {
    student.history = "C";

    return student;
}

const addScienceGrade = (student) => {
    student.science = "A";

    return student;
}

finalStudent = addScienceGrade(addHistoryGrade(addMathGrade(createStudent('Daniel', 7))));

console.log(finalStudent);