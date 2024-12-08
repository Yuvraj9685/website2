// Scroll Effect on Hero Section Button
document.getElementById("start-free-trial").addEventListener("click", function () {
    window.scrollTo({
        top: window.innerHeight, // Scroll to the next section
        behavior: "smooth"
    });
});

// Handle form submission (optional animation)
document.querySelector(".signup form").addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent the form from actually submitting
    alert("Thank you for signing up! We will get back to you soon.");
});
