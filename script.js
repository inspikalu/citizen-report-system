const form = document.getElementById("requestForm")
const submitButton = document.getElementById("submitButton")
form.addEventListener("submit", (e) => {
    e.preventDefault()
    try {

        navigator.geolocation.getCurrentPosition(
            (position) => {
                console.log("Current position", position);
            },
            (error) => {
                console.error("Error code:", error.code);
                console.error("Error message:", error.message);
            }
        );
    } catch (error) {
        console.log(error)
        fetch('http://ip-api.com/json')
            .then(response => response.json())
            .then(data => {
                console.log('IP Geolocation:', data);
                // Output will include fields like lat, lon, etc.
            })
            .catch(error => {
                console.error('Error fetching geolocation data:', error);
            });
    }



});
