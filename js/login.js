document.getElementById('login-submit').addEventListener('click', function () {
    // get user email 
    const emailField = document.getElementById('user-email');
    const userEmail = emailField.value;
    // get user Password
    const passwordField = document.getElementById('user-password');
    const userPassword = passwordField.value;
    // check email and pass 
    if (userEmail == 'polar@baap.com' && userPassword == 'password') {
        window.location.href = 'banking.html';
    }
});
