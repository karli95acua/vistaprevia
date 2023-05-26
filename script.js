console.log("page loaded...");

function cambiarEstado(element) {
    if(element.innerHTML == "Iniciar sesión") {
        element.innerHTML = "Cerrar sesión";
    } else {
        element.innerHTML = "Iniciar sesión";
    }
}

function cambiarSus(element) {
    if(element.innerHTML == "Suscríbete") {
        element.innerHTML = "Suscrito!";
    } else {
        element.innerHTML = "Suscríbete";
    }
}

// Funcionalidades video principal

function playVideo(video) {
    video.play();
}


function pauseVideo(video) {
    video.pause();
}


// Funcionalidades videos secundarios

function playVids(vids1) {
    vids1.play();
}


function pauseVids(vids1) {
    vids1.pause();
}


// Secundario 2

function playVids(vids2) {
    vids2.play();
}



function pauseVids(vids2) {
    vids2.pause();
}


// Secundario 3 

function playVids(vids3) {
    vids3.play();
}



function pauseVids(vids3) {
    vids3.pause();
}

// Secundario 4 

function playVids(vids4) {
    vids4.play();
}



function pauseVids(vids4) {
    vids4.pause();
}