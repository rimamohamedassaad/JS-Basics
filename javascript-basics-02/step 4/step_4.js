
function functionReset(){
document.querySelector('form').reset();
var yesNo = confirm("click ok if you are sure !!!");
    if (yesNo == true) {
        document.getElementById('name').value = "";
        document.getElementById('surname').value = "";
        document.getElementById('city').value = "";
    }

}