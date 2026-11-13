import { useNavigate } from 'react-router-dom';
import StudentForm from '../components/StudentForm';
import useMarks from '../hooks/Usemarks';

function Calculator() {

    const navigate = useNavigate();

    const {
        student,
        marks,
        handleStudentChange,
        handleMarkChange,
        calculateMarks,
        resetCalculator
    } = useMarks();

    const handleSubmit = (event) => {

        event.preventDefault();

        const response = calculateMarks();

        if (response.success) {
            navigate('/results', {
                state: {
                    student,
                    result: response.result
                }
            });
        } else {
            alert(response.message);
        }
    };

    return (
        <div className="calculator-page">

            <h1>Student Marks Calculator</h1>

            <StudentForm
                student={student}
                marks={marks}
                onStudentChange={handleStudentChange}
                onMarkChange={handleMarkChange}
                onSubmit={handleSubmit}
                onReset={resetCalculator}
            />

        </div>
    );
}

export default Calculator;