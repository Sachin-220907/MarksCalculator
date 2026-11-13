function ResultCard({ student, result }) {

    if (!result) {
        return (
            <div className="result-card">
                <p>No results available yet.</p>
            </div>
        );
    }

    return (
        <div className="result-card">

            <h2>Student Results</h2>

            <h3>{student.name}</h3>

            <p>
                Register Number: {student.registerNumber}
            </p>

            <div className="result-summary">

                <div>
                    <h4>Total Marks</h4>
                    <p>{result.total} / 500</p>
                </div>

                <div>
                    <h4>Percentage</h4>
                    <p>{result.percentage}%</p>
                </div>

                <div>
                    <h4>Grade</h4>
                    <p>{result.grade}</p>
                </div>

                <div>
                    <h4>Status</h4>
                    <p>{result.status}</p>
                </div>

            </div>

            <h3>Subject-wise Marks</h3>

            {Object.entries(result.subjectMarks).map(
                ([subject, mark]) => (
                    <p key={subject}>
                        {subject}: {mark}
                    </p>
                )
            )}

        </div>
    );
}

export default ResultCard;