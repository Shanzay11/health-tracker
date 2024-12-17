
document.getElementById("health-form").addEventListener("submit", function(event) {
    event.preventDefault();

    const steps = document.getElementById("steps").value;
    const healthStatus = document.getElementById("health-status").value;
    const sleepHours = document.getElementById("sleep-hours").value;
    const diet = document.getElementById("diet").value;
    const waterIntake = document.getElementById("water-intake").value;

    let summary = "<ul>";
    summary += `<li><strong>Steps Counted:</strong> ${steps || "Not provided"}</li>`;
    summary += `<li><strong>Health Status:</strong> ${healthStatus || "Not provided"}</li>`;
    summary += `<li><strong>Sleep Hours:</strong> ${sleepHours || "Not provided"} hrs</li>`;
    summary += `<li><strong>Dietary Preferences:</strong> ${diet || "Not provided"}</li>`;
    summary += `<li><strong>Water Intake:</strong> ${waterIntake || "Not provided"} liters</li>`;
    summary += "</ul>";

    document.getElementById("summary").innerHTML = summary;
    document.getElementById("result").style.display = "block";
});
