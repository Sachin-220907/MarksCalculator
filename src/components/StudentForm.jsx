import InputField from './InputField';
import Button from './Button';

function StudentForm({
    student,
    marks,
    onStudentChange,
    onMarkChange,
    onSubmit,
    onReset
}) {
    const subjects = [
        "Mathematics",
        "Physics",
        "Chemistry",
        "Computer Science",
        "English"
    ];

    return (
        <form className="student-form" onSubmit={onSubmit}>

            <h2>Student Details</h2>

            <InputField
                label="Student Name"
                name="name"
                value={student.name}
                onChange={onStudentChange}
                placeholder="Enter student name"
            />

            <InputField
                label="Register Number"
                name="registerNumber"
                value={student.registerNumber}
                onChange={onStudentChange}
                placeholder="Enter register number"
            />

            <h2>Subject Marks</h2>

            {subjects.map((subject) => (
                <InputField
                    key={subject}
                    label={subject}
                    name={subject}
                    type="number"
                    value={marks[subject]}
                    onChange={onMarkChange}
                    placeholder="Enter marks (0-100)"
                    min="0"
                    max="100"
                />
            ))}

            <div className="form-buttons">

                <Button type="submit">
                    Calculate Marks
                </Button>

                <Button
                    type="button"
                    variant="secondary"
                    onClick={onReset}
                >
                    Reset
                </Button>

            </div>

        </form>
    );
}

export default StudentForm;