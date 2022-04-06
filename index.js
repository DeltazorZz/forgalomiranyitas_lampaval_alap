window.addEventListener("load",init);
function $(elem){
    return document.querySelector(elem);
}
function CLASS(elem){
    return document.getElementsByClassName(elem);
}
function $notall(elem){
    return document.querySelector(elem);
}

 var allapot = false;

function init(){
    var auto = $(".auto")[0];
    var lampa = $(".lampa")[0];  
    var piros = $(".lampa")[0];
    var sarga = $notall(".sarga");
    var zold = $notall(".zold");
    sarga.style.opacity = "20%";
    zold.style.opacity = "20%";
    
    setInterval(()=>{
        sarga.style.opacity = "100%";
        zold.style.opacity = "20%";
    },1000);
    setInterval(function(){
        if (allapot){
            piros.style.opacity = "20%";
            sarga.style.opacity = "100%";
            zold.style.opacity = "20%";
        }else{
            piros.style.opacity = "100%";
            sarga.style.opacity = "20%";
            zold.style.opacity = "20%";
            auto.classList.add("balroljobbra");
            auto.style.animationDuration="1s";
        }
        allapot != allapot

    },2000);
    
    







}