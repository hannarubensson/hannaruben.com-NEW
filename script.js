document.getElementById('email-btn').addEventListener('click', function() {
    if (this.innerHTML === 'E-mail me') {
        this.innerHTML = 'hanna.rubensson[at]gmail.com';
    } else {
        this.innerHTML = 'E-mail me';
    }
});