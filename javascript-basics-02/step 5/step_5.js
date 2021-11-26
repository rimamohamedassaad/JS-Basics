var imageId = ["image1","image2","image3","image4","image5"];
var images = ["images/image1.jpg","images/image2.jpg","images/image3.jpg","images/image4.jpg","images/image5.jpg"];
var imagechanged =["images/image1_2.jpg","images/image2_2.jpg","images/image3_2.jpg","images/image4_2.jpg","images/image5_2.jpg"];

function changeImage(id){
   switch (id) {
        case imageId[0]:
            document.getElementById(imageId[0]).src = imagechanged[0];
           
            break;
        case imageId[1]:
            document.getElementById(imageId[1]).src = imagechanged[1];
            break;
        case imageId[2]:
            document.getElementById(imageId[2]).src = imagechanged[2];
            break;
        case imageId[3]:
            document.getElementById(imageId[3]).src = imagechanged[3];
            break;
        case imageId[4]:
            document.getElementById(imageId[4]).src = imagechanged[4];
            break;
            case 0:
                document.getElementById(imageId[0]).src = images[0];
               
                break;
                case 1:
                document.getElementById(imageId[1]).src = images[1];
               
                break;
                case 2:
                document.getElementById(imageId[2]).src = images[2];
               
                break;
                case 3:
                document.getElementById(imageId[3]).src = images[3];
               
                break;
                case 4:
                document.getElementById(imageId[4]).src = images[4];
               
                break;
        default: 
    }
}