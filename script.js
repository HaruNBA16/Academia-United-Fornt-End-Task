window.onclick = e => {
    var element=e.target;  // to get the element tag name alone
    if(element.className=="ai-three-line-horizontal"){
        document.getElementsByClassName("mobile-nav")[0].style.display="flex";
    }
    else if(element.tagName=="HEADER" || element.className=="ai-cross"){
        document.getElementsByClassName("mobile-nav")[0].style.display="none";
    }
}
var dd_visibility = false;
function dropdown(){
    if(!dd_visibility){
        document.getElementsByClassName("ai-chevron-down")[1].classList.add("ai-chevron-up");
        document.getElementsByClassName("ai-chevron-down")[1].classList.remove("ai-chevron-down");
        document.querySelector(".mobile-dropdown ul").style.display="block";
        dd_visibility=!dd_visibility;
    }
    else{
        document.getElementsByClassName("ai-chevron-up")[0].classList.add("ai-chevron-down");
        document.getElementsByClassName("ai-chevron-up")[0].classList.remove("ai-chevron-up");
        document.querySelector(".mobile-dropdown ul").style.display="none";
        dd_visibility=!dd_visibility;
    }
}