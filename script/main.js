document.addEventListener('DOMContentLoaded', function() {
    // Action for Learn More button
    document.getElementById('learnMoreBtn').addEventListener('click', function() {
        alert('Thank you for your interest! Please scroll down to learn more.');
    });

    // Form submission action
    document.getElementById('contactForm').addEventListener('submit', function(event) {
        event.preventDefault(); // Prevents the default form submission action
        let name = document.getElementById('name').value;
        let gender = document.querySelector('input[name="gender"]:checked') ? document.querySelector('input[name="gender"]:checked').value : 'Not specified';
        let interests = Array.from(document.querySelectorAll('input[name="interest"]:checked')).map(checkbox => checkbox.value);
        let otherInterest = document.getElementById('otherInterest').value.trim();

        if (otherInterest) {
            interests.push(otherInterest);
        }

        interests = interests.join(', ') || 'No interests selected';

        alert(`Name: ${name}\nGender: ${gender}\nInterests: ${interests} \n\nBerhasil di submit`);
    });
});
