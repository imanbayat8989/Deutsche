var loader;
function loadNow(opacity){
    if(opacity <= 0) {
        displayContent();
    }
    else{
        loader.style.opacity = opacity;
        window.setTimeout(function(){
            loadNow(opacity - 0.04)
        }, 100);
    }
}
function displayContent(){
    loader.style.display = 'none';
    document.getElementById('content').style.display = 'block';
}
document.addEventListener("DOMContentLoaded", function(){
    loader = document.getElementById('loader');
    loadNow(1);
});

const open = document.querySelector('.menuopen');
const close = document.querySelector('.menuclose');
const layer = document.querySelector('.layer1');

open.onclick = () => {
    layer.classList.add('check');
}

close.onclick = ()=> {
    layer.classList.remove('check');
}
