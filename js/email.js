  
(function() {
    // https://dashboard.emailjs.com/admin/account
    emailjs.init({
        publicKey: "3xkGWscWh4TujDkql",
    });
})();
  
window.onload = function() {
    document.getElementById('contact-form').addEventListener('submit', function(event) {
        event.preventDefault();
        
        const submitBtn = document.getElementById('submitBtn');
        const originalText = submitBtn.innerText;
        
        // Show loader
        submitBtn.disabled = true;
        submitBtn.innerHTML = '<div class="loader" style="border-color: rgba(0, 0, 0, 0.2); border-top-color: #000;"></div>';
        
        // Send form
        emailjs.sendForm('service_gnvzu3j', 'template_9upchqp', this)
            .then(() => {
                console.log('SUCCESS!');
                // Show confirmation modal
                const modal = document.getElementById('confirmationModal');
                modal.classList.add('active');
                document.body.style.overflow = 'hidden';
                
                // Reset form and button
                document.getElementById('contact-form').reset();
                submitBtn.innerHTML = originalText;
                submitBtn.disabled = false;
            }, (error) => {
                console.log('FAILED...', error);
                // Reset button on error
                submitBtn.innerHTML = originalText;
                submitBtn.disabled = false;
                alert('An error occurred. Please try again.');
            });
    });
}
    