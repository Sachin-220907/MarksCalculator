import { useNavigate } from 'react-router-dom';
import Button from '../components/Button';

function Home() {

    const navigate = useNavigate();

    return (
        <div className="home-page">

            <section className="hero-section">

                <h1>Student Marks Calculator</h1>

                <p>
                    Calculate your marks, percentage and grade
                    with ease.
                </p>

                <div className="home-buttons">

                    <Button onClick={() => navigate('/calculator')}>
                        Click Here to Calculate Marks
                    </Button>

                    <Button
                        variant="secondary"
                        onClick={() => navigate('/results')}
                    >
                        View Results
                    </Button>

                </div>

            </section>

        </div>
    );
}

export default Home;