var pass1 = document.getElementById('password');
var pass2 = document.getElementById('confirmation')
function confirmationpass(){
    if(pass2.value != pass1.value ){
        pass1.style.border = 'red 3px solid';
        pass2.style.border = 'red 3px solid';
        pass2.value = "pass incorrect"
    }
}