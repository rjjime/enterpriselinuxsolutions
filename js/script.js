// script.js
document.addEventListener('DOMContentLoaded', function() {
    // Form validation
    const form = document.getElementById('consultationForm');
    if (form) {
        form.addEventListener('submit', function(event) {
            if (!form.checkValidity()) {
                event.preventDefault();
                event.stopPropagation();
            }
            form.classList.add('was-validated');
        });
    }

    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Animate elements on scroll
    const observerOptions = {
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate');
            }
        });
    }, observerOptions);

    document.querySelectorAll('.service-card, .process-step, .support-card').forEach(element => {
        observer.observe(element);
    });
});


function selectPack(packType) {
    // You can customize this function to handle the pack selection
    const pack = packType === '20hour' ? '20-Hour' : '40-Hour';
    window.location.href = `#contact?pack=${packType}`;
}


/*
// Initialize EmailJS with API Key
emailjs.init("z8Mpl-RexmK6SSogd"); // Replace with your actual EmailJS User ID/API key

// Handler for Consultation Form Submission
document.getElementById("consultationForm").addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent default form submission

    // Validate form fields (optional, but recommended)
    const companyName = document.getElementById("companyName").value;
    const contactName = document.getElementById("contactName").value;
    const email = document.getElementById("email").value;
    const serviceType = document.getElementById("service").value;
    const message = document.getElementById("message").value;

    if (!companyName || !contactName || !email || !serviceType || !message) {
        alert("Please fill in all required fields.");
        return;
    }

    // Send email using EmailJS
    emailjs.send(
        "service_7039b2d", // Replace with your EmailJS Service ID
        "contact_form", // Replace with your EmailJS Template ID
        {
            company_name: companyName,
            from_name: contactName,
            from_email: email,
            service_type: serviceType,
            message: message,
        },
        "z8Mpl-RexmK6SSogd" // Replace with your actual EmailJS API key
    ).then(
        function () {
            alert("Consultation request sent successfully!");
            document.getElementById("consultationForm").reset(); // Reset the form
        },
        function (error) {
            console.error("Error sending consultation request:", error);
            alert("Failed to send the consultation request. Please try again later.");
        }
    );
});         */







// Initialize EmailJS with API Key
emailjs.init("z8Mpl-RexmK6SSogd"); // Replace with your actual EmailJS API key

// Handler for Consultation Form Submission
document.getElementById("consultationForm").addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent default form submission

    
    // Send form data using EmailJS
    emailjs.sendForm(
        "service_7039b2d", // Replace with your EmailJS Service ID
        "contact_form", // Replace with your EmailJS Template ID
        this, // Current form element
        "z8Mpl-RexmK6SSogd" // Replace with your actual EmailJS API key
    ).then(
        function () {
            alert("Consultation request sent successfully!");
            document.getElementById("consultationForm").reset(); // Reset the form
        },
        function (error) {
            console.error("Error sending consultation request:", error);
            alert("Failed to send the consultation request. Please try again later.");
        }
    );
});

// Handler for Contact Form Submission
document.getElementById("contact-form").addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent default form submission

    // Get form data
    const company = document.getElementById("company").value;
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const service = document.getElementById("service").value;
    const message = document.getElementById("message").value;

    // Validate form fields (optional, but recommended)
    if (!company || !name || !email || !service || !message) {
        alert("Please fill in all required fields.");
        return;
    }

    // Send email using EmailJS
    emailjs.send(
        "service_7039b2d", // Replace with your EmailJS Service ID
        "contact_form", // Replace with your EmailJS Template ID
        {
            company_name: company,
            from_name: name,
            from_email: email,
            service_type: service,
            message: message,
        },
        "z8Mpl-RexmK6SSogd" // Replace with your actual EmailJS API key
    ).then(
        function () {
            alert("Message sent successfully!");
            document.getElementById("contact-form").reset(); // Reset the form
        },
        function (error) {
            console.error("Error sending message:", error);
            alert("Failed to send your message. Please try again later.");
        }
    );
});


 








