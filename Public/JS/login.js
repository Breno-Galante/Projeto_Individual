function imgs() {
    var lista_imgs = 
    ["url(./Imgs/ahri_sabugueiro.jpg)",
    "url(./Imgs/ashe_coven.jpg)",
    "url(./Imgs/katarina_projeto.jpg)",
    "url(./Imgs/lux_elementalista.jpg)",
    "url(./Imgs/skins_infernais.jpg)",
    "url(./Imgs/syndra_rosa_definhada.jpg)"
]
    var cont = Math.floor(Math.random(1) * (6));

    div_login.style.backgroundImage = lista_imgs[cont]

    var lista_box_cores = [
        `#01c278 0px 30px 40px, #25f0a2 0px -12px 30px, #25f0a2 0px 4px 6px, #01c278 0px 12px 13px, #01c278 0px -3px 5px`,
        `#8a2be2 0px 30px 40px, #571792 0px -12px 30px, #571792 0px 4px 6px, #8a2be2 0px 12px 13px, #8a2be2 0px -3px 5px`,
        `#c00277 0px 30px 40px, #ff33b1 0px -12px 30px, #ff33b1 0px 4px 6px, #c00277 0px 12px 13px, #c00277 0px -3px 5px`,
        `#f6ffc4 0px 30px 40px, #f1ffa1 0px -12px 30px, #f1ffa1 0px 4px 6px, #f6ffc4 0px 12px 13px, #f6ffc4 0px -3px 5px`,
        `#9e3200 0px 30px 40px, #9e3200 0px -12px 30px, #9e3200 0px 4px 6px, #9e3200 0px 12px 13px, #9e3200 0px -3px 5px`,
        `#0ee2e9 0px 30px 40px, #0ee2e9 0px -12px 30px, #0ee2e9 0px 4px 6px, #0ee2e9 0px 12px 13px, #0ee2e9 0px -3px 5px`
    ]

    div_box.style.boxShadow = lista_box_cores[cont]

    var lista_text_cores = [
        `#01c278 2px 2px 3px`,
        `#8a2be2 2px 2px 3px`,
        `#c00277 2px 2px 3px`,
        `#FFE200 2px 2px 3px`,
        `#9e3200 2px 2px 3px`,
        `#0ee2e9 2px 2px 3px`
    ]

    h1_titulo.style.textShadow = lista_text_cores[cont]

    var lista_button = [
        `#01c278`,
        `#8a2be2`,
        `#c00277`,
        `#C4AD00`,
        `#9e3200`,
        `#0ee2e9`
    ]

    botao_login.style.backgroundColor = lista_button[cont]

    var lista_clique_aqui = [
        `#01c278 2px 2px 3px`,
        `#8a2be2 2px 2px 3px`,
        `#c00277 2px 2px 3px`,
        `#FFE200 2px 2px 3px`,
        `#9e3200 2px 2px 3px`,
        `#0ee2e9 2px 2px 3px`
    ]

    clique_aqui.style.textShadow = lista_clique_aqui[cont]

    label_nomeUsuario.style.textShadow = lista_clique_aqui[cont]

    label_senha.style.textShadow = lista_clique_aqui[cont]

    label_senha.style.textShadow = lista_clique_aqui[cont]
    
    a_voltar.style.textShadow = lista_clique_aqui[cont]

}

setInterval(function(){
    imgs();
},3000)