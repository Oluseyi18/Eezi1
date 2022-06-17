const form = document.getElementById('form')
const fName = document.getElementById('fName')
const lName = document.getElementById('lName')
const email = document.getElementById('email')
const password = document.getElementById('password')

form.addEventListener( 'submit', e => {
    e.preventDefault();

    var firstName = fName.value.trim();
    var lastName = lName.value.trim();
    var emailValue = email.value.trim();
    var passwordValue = password.value.trim();
    var pattern =  /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    if(firstName === ''){
        errorFunc(fName, 'First Name cannot be empty')
    }
    else{
        successFunc(fName)
    }

    if(lastName === ''){
        errorFunc(lName, 'Last Name cannot be empty')
    }
    else{
        successFunc(lName)
    }
    
    if(emailValue === ''){
        errorFunc(email, 'Email cannot be empty')
    } else if(!emailValue.match(pattern)){
        errorFunc(email, 'Looks like this is not an email')
    }
    else{
        successFunc(email)
    }

    if(passwordValue === ''){
        errorFunc(password, 'Password cannot be empty')
    }
    else{
        successFunc(password)
    }
})

function errorFunc(req, message){
    const formControl = req.parentElement;
    const span = formControl.querySelector('span');
    span.innerText =message;
    req.className += 'error';
    span.className += 'error-text';
    if(req !== email){
        req.value = ' ';
    } else {
        req.style.color = "hsl(0, 100%, 74%)";
    }
}

function successFunc(req){
    req.className += 'success';
}
