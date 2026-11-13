import { Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import Home from './pages/Home';
import Calculator from './pages/calculator';
import Results from './pages/Result';

import './App.css';
import './styles/Navbar.css';
import './styles/Component.css';
import './styles/Home.css';
import './styles/Calculator.css';
import './styles/Results.css';

function App() {

    return (
        <div className="app">

            <Navbar />

            <main className="main-content">

                <Routes>

                    <Route path="/" element={<Home />} />

                    <Route path="/calculator" element={<Calculator />} />

                    <Route path="/results" element={<Results />} />

                </Routes>

            </main>

        </div>
    );
}

export default App;