function updateDateTime() {
    const now = new Date();
    const options = { year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: false };
    document.getElementById('datetime').textContent = now.toLocaleString('en-US', options);
}

// Update date and time every second
setInterval(updateDateTime, 1000);
// Initial call to display immediately on load
updateDateTime();

// alert massge 
alert ("Welcome to SAFESIGHT SOLUTIONS (PVT) LTD! Note that this site monitors CCTV camera footage in real-time. Please ensure that you have proper authorization before viewing any footage.");


