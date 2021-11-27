var showA = document.getElementById("show");
var hideA = document.getElementById("hide");
var text = document.getElementById("texte");
function showHideFunction(value) {
    switch (value) {
        case 'hide':
            text.hidden = true;
            break;
        case 'show':
            text.hidden = false;
            break;
        default:
    }
}