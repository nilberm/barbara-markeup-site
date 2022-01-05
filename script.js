const button = document.querySelectorAll('.btn-subscribe')

function sendHome(){
    window.location.href = '#home'
}

var email = document.getElementById('email')

function validationEmail(){
    

    if(!email.checkValidity()){
        
        if(email.classList) email.classList.add('error')
          
    }else email.classList.remove("error")
}

