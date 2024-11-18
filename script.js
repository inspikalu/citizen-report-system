const form = document.getElementById("feedbackForm")
const submitButton = document.getElementById("submitButton")
submitButton.addEventListener("click", () => {
    navigator.geolocation.getCurrentPosition(
        (position) => {
            console.log("Current position", position);
        },
        (error) => {
            console.error("Error code:", error.code);
            console.error("Error message:", error.message);
        }
    );
});
