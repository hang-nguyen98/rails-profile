// Form validation and submission feedback with email service integration
console.log(" ===== CONTACT JS IS RUNNING  =====");

// Wait for the Turbo page load event to ensure the DOM is fully loaded
// Without document.addEventListener("turbo:load", () => {}),
// the script may not find the form and thus send null data to Formspree
document.addEventListener("turbo:load", () => {
    const form = document.getElementById('contactForm');
    const successAlert = document.getElementById('successAlert');
    if (form) {
        console.log(" ===== FORM IS RUNNING =====");

        form.addEventListener("submit", async (e) => {
            e.preventDefault(); // Prevent the default form submission behavior
            // Check if the form is valid before submitting
            if (!form.checkValidity()) {
                form.classList.add("was-validated");
                return;
            }

            // Send the form data to Formspree 
            const response = await fetch(form.action, {
                method: "POST",
                body: new FormData(form),
                headers: {
                    Accept: "application/json"
                }
            });

            // Handle the success response from Formspree
            if (response.ok) {
                successAlert.classList.remove("d-none");
                form.reset();
                form.classList.remove("was-validated");
            }


        });
    }
});