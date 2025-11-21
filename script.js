// Task 4 - Background Color Change
let isGradient = true;

document.getElementById("colorBtn").addEventListener("click", function () {
    if (isGradient) {
        document.body.style.backgroundImage = "none";
    } else {
        document.body.style.backgroundImage = "linear-gradient(to bottom, #FFF7E9, #F9E4C8)";
    }
    isGradient = !isGradient;
});

// Task 5 - API Fetch
function getUser() {
    fetch("https://jsonplaceholder.typicode.com/users/1")
        .then(response => response.json())
        .then(data => {
            document.getElementById("userData").innerText =
                `Name: ${data.name}, Email: ${data.email}`;
        })
        .catch(() => {
            document.getElementById("userData").innerText = "Failed to load data";
        });
}

// Task 6 - Form Validation
document.getElementById("myForm").addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const msg = document.getElementById("errorMsg");

    if (name === "" || email === "") {
        msg.style.color = "red";
        msg.innerText = "Please fill all fields!";
    } else {
        msg.style.color = "green";
        msg.innerText = "Form submitted successfully ✅";
    }
});
