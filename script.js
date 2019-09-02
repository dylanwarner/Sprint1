function uploadImage() {
    var image = document.querySelector('img');
    var file = document.querySelector('input[type=file]').files[0];
    var reader  = new FileReader();

    reader.onloadend = function () {
        image.src = reader.result;
    }

    if (file) {
        reader.readAsDataURL(file); //reads the data as a URL
    } else {
        image.src = "";
    }
}

function changeFilter (filter) {
    var img = document.querySelector('img');
    switch(filter){
        /* Filters for Images */
        case 'normal': 
            img.style.webkitFilter = "none";
            img.filter = "none";
            break;
        case 'grayscale': 
            img.style.webkitFilter = "grayscale(100%)";
            img.filter = "grayscale(100%)";
            break;
        case 'hue90': 
            img.style.webkitFilter = "hue-rotate(90deg)";
            img.filter = "hue-rotate(90deg)";
            break;
        case 'hue180': 
            img.style.webkitFilter = "hue-rotate(180deg)";
            img.filter = "hue-rotate(180deg)";
            break;
        case 'hue270': 
            img.style.webkitFilter = "hue-rotate(270deg)";
            img.filter = "hue-rotate(270deg)";
            break;
        case 'inverted': 
            img.style.webkitFilter = "invert(100%)";
            img.filter = "invert(100%)";
            break;
        case 'saturated': 
            img.style.webkitFilter = "saturate(200%)";
            img.filter = "saturate(200%)";
            break;
        case 'sepia': 
            img.style.webkitFilter = "sepia(100%)";
            img.filter = "sepia(100%)";
            break;
    }
}