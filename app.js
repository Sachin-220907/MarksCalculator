
let calculateButton = document.getElementById("calculate");

calculateButton.addEventListener("click", function() {

    let name = document.getElementById("studentName").value;
    let register = document.getElementById("registerNumber").value;

    let mark1 = Number(document.getElementById("subject1").value);
    let mark2 = Number(document.getElementById("subject2").value);
    let mark3 = Number(document.getElementById("subject3").value);
    let mark4 = Number(document.getElementById("subject4").value);
    let mark5 = Number(document.getElementById("subject5").value);
    let marks = [mark1, mark2, mark3, mark4, mark5];

    if (name === "" || register === "") {
        alert("Please enter student details");
        return;
    }

    for (let i = 0; i < marks.length; i++) {

        if (document.getElementById("subject" + (i + 1)).value === "") {
            alert("Please enter all subject marks");
            return;
        }

        if (marks[i] < 0 || marks[i] > 100) {
            alert("Marks must be between 0 and 100");
            return;
        }
    }
    let total = mark1 + mark2 + mark3 + mark4 + mark5;

    let percentage = (total / 500) * 100;
    let grade;

    if (percentage >= 90) {
        grade = "A";
    }
    else if (percentage >= 80) {
        grade = "B";
    }
    else if (percentage >= 70) {
        grade = "C";
    }
    else if (percentage >= 60) {
        grade = "D";
    }
    else if (percentage >= 50) {
        grade = "E";
    }
    else {
        grade = "F";
    }

    let result;

    if (marks.every(mark => mark >= 45)) {
        result = "PASS";
    }
    else {
        result = "FAIL";
    }
    let resultSection = document.getElementById("result");

    if (resultSection === null) {
        resultSection = document.createElement("div");
        resultSection.id = "result";
        document.querySelector("form").after(resultSection);
    }

resultSection.innerHTML =
    "<h2>Student Results</h2>" +

    "<p><strong>Name:</strong> " + name + "</p>" +

    "<p><strong>Register Number:</strong> " + register + "</p>" +

    "<p><strong>Total Marks:</strong> " + total + " / 500</p>" +

    "<p><strong>Percentage:</strong> " + percentage.toFixed(2) + "%</p>" +

    "<p><strong>Grade:</strong> " + grade + "</p>" +

    "<p class='" + (result === "PASS" ? "pass" : "fail") + "'>" +
        "<strong>Status:</strong> " + result +
    "</p>";

});


document.querySelector("form").addEventListener("reset", function() {

    let resultSection = document.getElementById("result");

    if (resultSection !== null) {
        resultSection.remove();
    }

});
