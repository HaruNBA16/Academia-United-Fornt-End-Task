window.onclick = e => {
    var element=e.target;  // to get the element tag name alone
    console.log(element.tagName, element.className)
    if(element.className=="ai-three-line-horizontal"){
        document.getElementsByClassName("mobile-nav")[0].style.display="flex";
    }
    else if(element.tagName=="HEADER" || element.className=="ai-cross"){
        document.getElementsByClassName("mobile-nav")[0].style.display="none";
    }
} 