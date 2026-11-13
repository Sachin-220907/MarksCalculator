function App() {

    return (
        <div className="container">

            <h1>Student Marks Calculator</h1>

            <form>

                <label>Student Name</label>
                <input type="text" placeholder="Enter the name" />

                <label>Register Number</label>
                <input type="text" placeholder="Enter your roll number" />

                <h3>Enter Subject Marks</h3>

                <label>Sub 1</label>
                <input type="number" placeholder="Enter the marks" />

                <label>Sub 2</label>
                <input type="number" placeholder="Enter the marks" />

                <label>Sub 3</label>
                <input type="number" placeholder="Enter the marks" />

                <label>Sub 4</label>
                <input type="number" placeholder="Enter the marks" />

                <label>Sub 5</label>
                <input type="number" placeholder="Enter the marks" />

                <button type="button">Calculate</button>

                <button type="reset">Reset</button>

            </form>

        </div>
    );

}

export default App;