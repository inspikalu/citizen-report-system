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

const inputCategory = document.getElementById("input-category")
const inputCategoryLabel = document.getElementById("input-category-label")
const category = document.getElementById("category")

category.addEventListener("change", (e) => {
    console.log(e.target.value)
    if (e.target.value === "others") {
        inputCategory.style.display = "block"
        inputCategoryLabel.style.display = "block"
        inputCategory.setAttribute("required","true")
    } else {
        inputCategory.style.display = "none"
        inputCategoryLabel.style.display = "none"
        inputCategory.setAttribute("required","false")
    }
})
