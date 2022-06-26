const replaceImages = function(){
    let img = document.getElementsByTagName("img")
    for (i = 0; i < img.length ; i++) {
        // console.log(img[i].alt)
        let image = img[i]
        if (image.alt) {
            let text = document.createTextNode(image.alt)
            image.parentNode.replaceChild(text,image)
        }
    }
}