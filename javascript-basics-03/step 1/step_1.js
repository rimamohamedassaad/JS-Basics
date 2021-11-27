var img = document.getElementById("image1");
img.addEventListener("mouseover", putBorder);
img.addEventListener("mouseout", removeBorder);
function putBorder(){
    img.style.border ='3px solid red';
}
function removeBorder(){
    img.style.border ='none';
}