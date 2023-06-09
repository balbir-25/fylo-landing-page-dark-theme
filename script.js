const btn = document.getElementById('btn');
const mail = document.getElementById('mail');
const error = document.getElementById('error');

function isValidEmail(email) {
    // This is a simple email validation function that matches most email patterns, but not all
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  btn.addEventListener( 'click', () => {
    if (mail.value.trim() === '' || !isValidEmail(mail.value)){
        error.innerHTML = "Please enter a valid email address.";
        error.style.display = "block";
    }else{
        error.innerHTML = "";
        mail.value = "";
    }
  });


  mail.addEventListener( 'focus', () => {
        error.style.display = 'none';
  });