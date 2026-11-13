import { useState, useEffect } from 'react';

function useMarks() {

    const [student, setStudent] = useState({
        name: '',
        registerNumber: ''
    });

    const [marks, setMarks] = useState({
        Mathematics: '',
        Physics: '',
        Chemistry: '',
        'Computer Science': '',
        English: ''
    });

    const [result, setResult] = useState(null);

    const handleStudentChange = (event) => {
        const { name, value } = event.target;

        setStudent((previousStudent) => ({
            ...previousStudent,
            [name]: value
        }));
    };

    const handleMarkChange = (event) => {
        const { name, value } = event.target;

        setMarks((previousMarks) => ({
            ...previousMarks,
            [name]: value
        }));
    };

    const calculateMarks = () => {

        const subjectMarks = Object.values(marks).map(Number);

        const validMarks = Object.values(marks).every(
            (mark) =>
                mark !== '' &&
                Number.isFinite(Number(mark)) &&
                Number(mark) >= 0 &&
                Number(mark) <= 100
        );

        if (
            !student.name.trim() ||
            !student.registerNumber.trim() ||
            !validMarks
        ) {
            return {
                success: false,
                message: 'Enter valid student details and marks between 0 and 100.'
            };
        }

        const total = subjectMarks.reduce(
            (sum, mark) => sum + mark,
            0
        );

        const percentage = (total / 500) * 100;

        const grade =
            percentage >= 90 ? 'A+' :
            percentage >= 80 ? 'A' :
            percentage >= 70 ? 'B' :
            percentage >= 60 ? 'C' :
            percentage >= 50 ? 'D' : 'F';

        const status = subjectMarks.every(
            (mark) => mark >= 40
        ) ? 'Pass' : 'Fail';

        const calculatedResult = {
            total,
            percentage: percentage.toFixed(2),
            grade,
            status,
            subjectMarks: marks
        };

        setResult(calculatedResult);

        return {
    success: true,
    message: 'Results calculated successfully.',
    result: calculatedResult
};
    };

    const resetCalculator = () => {

        setStudent({
            name: '',
            registerNumber: ''
        });

        setMarks({
            Mathematics: '',
            Physics: '',
            Chemistry: '',
            'Computer Science': '',
            English: ''
        });

        setResult(null);
    };

    useEffect(() => {

        const savedData = localStorage.getItem('studentMarks');

        if (savedData) {
            try {
                const parsedData = JSON.parse(savedData);

                if (
                    parsedData &&
                    typeof parsedData === 'object' &&
                    parsedData.student &&
                    parsedData.marks &&
                    typeof parsedData.student === 'object' &&
                    typeof parsedData.marks === 'object'
                ) {
                    setStudent(parsedData.student);
                    setMarks(parsedData.marks);
                    setResult(parsedData.result ?? null);
                }
            } catch {
                localStorage.removeItem('studentMarks');
            }
        }

    }, []);

    useEffect(() => {

        const data = {
            student,
            marks,
            result
        };

        localStorage.setItem(
            'studentMarks',
            JSON.stringify(data)
        );

    }, [student, marks, result]);

    return {
        student,
        marks,
        result,
        handleStudentChange,
        handleMarkChange,
        calculateMarks,
        resetCalculator
    };
}

export default useMarks;