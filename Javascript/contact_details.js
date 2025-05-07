function updateDateTime() {
    const now = new Date();
    const options = { year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: false };
    document.getElementById('datetime').textContent = now.toLocaleString('en-US', options);
}

// Update date and time every second
setInterval(updateDateTime, 1000);
// Initial call to display immediately on load
updateDateTime();




document.getElementById('contact-form').addEventListener('submit', function (event) {
    event.preventDefault();

  
    const responseMessage = document.getElementById('responseMessage');
    responseMessage.innerHTML = '';

    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

   
    if (!name || !email || !message) {
        responseMessage.innerHTML = `<p style="color: red;">All fields are required!</p>`;
        return;
    }

    if (!validateEmail(email)) {
        responseMessage.innerHTML = `<p style="color: red;">Please enter a valid email address!</p>`;
        return;
    }


    responseMessage.innerHTML = `<p style="color: green;">Thank you, ${name}. Your message has been sent successfully!</p>`;

    
    document.getElementById('contact-us-form').reset();
    
});

// Email validation function
function validateEmail(email) {
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return regex.test(email);
}
