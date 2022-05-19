function imgs() {
    var lista_imgs =
        ["url(./Imgs/ahri_kda.jpg)",
            "url(./Imgs/akali_kda.jpg)",
            "url(./Imgs/kaisa_kda.jpg)",
            "url(./Imgs/evelynn_kda.jpg)"
        ]
    var cont = Math.floor(Math.random(1) * (4));

    div_box.style.backgroundImage = lista_imgs[cont]

}


setInterval(function () {
    imgs();
}, 3000)

/* var c = 0;

function box() {
    var blur_vai_volta =
        [`#74b4fd 0px 10px 90px, #ff52da 0px -12px 30px, #74b4fd 0px 4px 6px, #ff52da 0px 12px 13px, #74b4fd 0px -3px 5px`,
        `#74b4fd 0px 10px 90px, #ff52da 0px -12px 30px, #74b4fd 0px 4px 6px, #ff52da 0px 12px 13px, #74b4fd 0px -3px 5px`,
        `#74b4fd 0px 10px 90px, #ff52da 0px -12px 30px, #74b4fd 0px 4px 6px, #ff52da 0px 12px 13px, #74b4fd 0px -3px 5px`,
        `#74b4fd 0px 0px 0px, #ff52da 0px 0px 0px, #74b4fd 0px 0px 0px, #ff52da 0px 0px 0px, #74b4fd 0px 0px 0px`
        ]




    div_box.style.boxShadow = blur_vai_volta[c]

    c++

    if (c == 5) {
        c = 0
    }
    
}

setInterval(function () {
    box(); 
}, 1500) */