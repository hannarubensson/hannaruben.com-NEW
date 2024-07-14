document.getElementById('email-btn').addEventListener('click', function() {
    if (this.innerHTML === 'E-mail me') {
        this.innerHTML = 'hanna.rubensson[at]gmail.com';
    } else {
        this.innerHTML = 'E-mail me';
    }
});


document.addEventListener('DOMContentLoaded', function () {
    let buttons = document.getElementsByClassName('dropdown-btn');
    
    for (let i = 0; i < buttons.length; i++) {
      buttons[i].addEventListener('click', function () {
        let content = this.nextElementSibling;
        
        if (content.classList.contains('show')) {
          content.classList.remove('show');
        } else {
          let dropdowns = document.getElementsByClassName('dropdown-content');
          for (let j = 0; j < dropdowns.length; j++) {
            dropdowns[j].classList.remove('show');
          }
          
          content.classList.add('show');
        }
      });
    }
  });

  document.addEventListener('DOMContentLoaded', function() {
    const emailText = document.querySelector('.email-text');
    const email = emailText.getAttribute('data-text');
    emailText.innerText = email;
});