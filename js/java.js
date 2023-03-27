function light(show){
    var pic;
    if (show == 0){
        pic = "off.jpg";
    }
    else{
        pic = "on.jpg"
    }
    document.getElementById("bulb").src = pic;
}