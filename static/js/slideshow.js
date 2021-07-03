function carousel(cls_name, myIndex) {
    // console.log(cls_name + myIndex)
    // var myIndex = 0
    var i;
    var x = document.getElementsByClassName(cls_name);
    for (i = 0; i < x.length; i++) {
      x[i].style.display = "none";  
    }
    myIndex++;
    if (myIndex > x.length) {myIndex = 1}    
    x[myIndex-1].style.display = "block";  
    setTimeout(carousel, 2000, cls_name, myIndex); // Change image every 2 seconds
  }