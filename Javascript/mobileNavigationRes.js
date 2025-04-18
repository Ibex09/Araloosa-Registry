// offcanvas
function offcanvasToggle(show){
    var showOffcanvas = document.getElementById('offcanvas');
    var overlay = document.getElementById('overlay');

    if(show){
        showOffcanvas.classList.add('show');
        overlay.classList.add('showOverlay');
    } else{
        showOffcanvas.classList.remove('show');
        overlay.classList.remove('showOverlay');
    }
}

