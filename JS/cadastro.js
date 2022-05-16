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

setInterval(function(){
    imgs();
},3000)