import { useLocation, useNavigate } from 'react-router-dom';
import ResultCard from '../components/ResultCard';
import Button from '../components/Button';

function Results() {

    const location = useLocation();
    const navigate = useNavigate();

    const student = location.state?.student;
    const result = location.state?.result;

    return (
        <div className="results-page">

            <h1>Student Results</h1>

            {result ? (

                <>
                    <ResultCard
                        student={student}
                        result={result}
                    />

                    <Button onClick={() => navigate('/calculator')}>
                        Calculate Again
                    </Button>
                </>

            ) : (

                <div className="no-results">

                    <p>No results available. Please calculate your marks first.</p>

                    <Button onClick={() => navigate('/calculator')}>
                        Go to Calculator
                    </Button>

                </div>

            )}

        </div>
    );
}

export default Results;