function checkPassword() {
    var password = document.getElementById('password').value;
    var correctPassword = "Luidji2024";
    var errorMessage = document.getElementById('error-message');
    
    if (password === correctPassword) {
        window.location.href = "page.html";
    } else {
        errorMessage.style.display = 'block';
    }
}


