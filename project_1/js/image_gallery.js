function myFunction(imgs) {          /* enlarges image and adds alt text */
    var expandImg = document.getElementById("expandedImg");
    var imgText = document.getElementById("imgtext");
    expandImg.src = imgs.src;
    imgText.innerHTML = imgs.alt;
    expandImg.parentElement.style.display = "block";
}

function setTitle(field) {          /* displays matching caption during mouse hover */
    element = document.getElementById("titlespace");
    element.textContent = field.title;
}

function fnChangeBorder(imageId){   /* changes image border color */
    document.getElementById(imageId).style.className="greenClass";
}






  