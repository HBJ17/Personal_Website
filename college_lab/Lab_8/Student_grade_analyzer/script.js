document.querySelector("button").addEventListener("click", function () {

    let m = document.getElementById("maths").value;
    let p = document.getElementById("physics").value;
    let c = document.getElementById("chemistry").value;
    let b = document.getElementById("biology").value;
    let e = document.getElementById("english").value;

    let inputs = [m, p, c, b, e];

    for (let i = 0; i < inputs.length; i++) {
        if (inputs[i] === "") {
            alert("Please fill all fields!");
            return;
        }
    }
    let marks = inputs.map(Number);

    for (let i = 0; i < marks.length; i++) {
        if (marks[i] < 0 || marks[i] > 100) {
            alert("Marks must be between 0 and 100!");
            return;
        }
    }

    let total = 0;
    for (let i = 0; i < marks.length; i++) {
        total += marks[i];
    }

    let average = total / marks.length;
    let percentage = average;


    let grade, performance;

    if (average >= 90) {
        grade = "A";
        performance = "Excellent";
    } else if (average >= 75) {
        grade = "B";
        performance = "Good";
    } else if (average >= 60) {
        grade = "C";
        performance = "Average";
    } else if (average >= 50) {
        grade = "D";
        performance = "Poor";
    } else {
        grade = "Fail";
        performance = "Very Poor";
    }

    function getFeedback(avg) {
        if (avg >= 90) {
            return "Outstanding performance! Keep it up 🎉";
        } else if (avg >= 75) {
            return "Good job! A little more effort can take you higher.";
        } else if (avg >= 60) {
            return "Decent performance. Focus more on weak subjects.";
        } else if (avg >= 50) {
            return "You need improvement. Practice regularly.";
        } else {
            return "Strongly recommended to revise basics and study consistently.";
        }
    }

    let feedbackMsg = getFeedback(average);

    document.getElementById("result").innerHTML = `
        <h4>Total: ${total}</h4>
        <h4>Average: ${average.toFixed(2)}</h4>
        <h4>Percentage: ${percentage.toFixed(2)}%</h4>
        <h4>Grade: ${grade}</h4>
    `;

    document.getElementById("feedback").innerHTML = `
        <h4>Performance: ${performance}</h4>
        <h4>${feedbackMsg}</h4>

        <div style="background:#ddd; width:100%; height:20px; border-radius:10px;">
            <div style="
                width:${percentage}%;
                height:100%;
                background:green;
                border-radius:10px;">
            </div>
        </div>
        <p>${percentage.toFixed(2)}%</p>
    `;
});