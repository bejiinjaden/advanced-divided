let slideshowarray = [1];

let slideshowhtml = '';

let slideshowanimation = true;



/*
setInterval(() => {
if(slideshowanimation)
{
    document.querySelector('.slideshow-div1').classList.remove("animation1")
    document.querySelector('.slideshow-div2').classList.remove("animation2")
    slideshowanimation = false;
}else {

        document.querySelector('.slideshow-div1').classList.add("animation1")
    document.querySelector('.slideshow-div2').classList.add("animation2")
   slideshowanimation = true;
}
}, 6000);

*/

const cursor = document.querySelector('.cursor');

document.addEventListener('mousemove', position =>{
    cursor.setAttribute("style", "top:"+(position.pageY - 10)+"px; left:"+(position.pageX - 10)+"px;")

});
