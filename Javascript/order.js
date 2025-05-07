function updateDateTime() {
    const now = new Date();
    const options = { year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: false };
    document.getElementById('datetime').textContent = now.toLocaleString('en-US', options);
}

// Update date and time every second
setInterval(updateDateTime, 1000);
// Initial call to display immediately on load
updateDateTime();




// handle form validation


document.getElementById('contactForm').addEventListener('submit', function (event) {
    event.preventDefault();  

    let Full_Name = document.getElementById('Full_Name').value.trim();
    let Email = document.getElementById('Email').value.trim();
    let Address = document.getElementById('Address').value.trim();
    let City = document.getElementById('City').value.trim();
    let State = document.getElementById('State').value.trim();
    let Zip_Code = document.getElementById('Zip_Code').value.trim();
    let name = document.getElementById('name').value.trim();
    let Number = document.getElementById('Number').value.trim();
    let Months = document.getElementById('Months').value.trim();
    let year = document.getElementById('year').value.trim();
    let CVV = document.getElementById('CVV').value.trim();

 
    document.getElementById('errorMessage').textContent = '';

   
    if (Full_Name === '' || Email === '' || Address === '' || City === '' || State === ''
        || Zip_Code === '' || name === '' || Number === '' || Months === '' || year === '' || CVV === '') {
        document.getElementById('errorMessage').textContent = 'All fields are required.';
        
    } else {
    console.log();
    alert ('your online payment successfully completed! Thank you for your order We’ve received your order and are processing it now. You’ll receive a confirmation email with all the details shortly. Your support means the world to us. We cant wait to get your order to you! If you have any questions or need assistance, feel free to contact our customer support team at 035 728550. Thanks again for shopping with our SAFESIGHT SOLUTIONS (PVT) LTD! ');
        document.getElementById('contactForm').reset();  
    }
});


