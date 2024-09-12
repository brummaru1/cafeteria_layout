fetch("js/cafe.json")
    .then(response => {
        return response.json()
    })



    .then(data => {
        console.log(data)

        let link = location.href;
        let cafes = link.split("=");
        console.log(cafes)
        for (let i = 0; i < data.length; i++) {
            if (cafes[1] == data[i].id_cafe) {
                document.querySelector('.info_cefeteria').innerHTML += `
        <div class="img_principal">
            <img src="${data[i].fotoPrincipal}" alt="">
        </div>
        <div class="marca">
            <div class="nombre"> <h4>${data[i].name}</h4></div>
            <div class="map"><h5>See on our map</h5></div>

        </div>

        <div class="desripcion_cafeteria">
            <h4>${data[i].description}</h4>
        </div>

        <div class="datos_cafeteria">
            <div class="lugar_puntuacion">
                <h4 class="lugar">City Center,Warsaw</h4>
                <div class="puntuacion">
                    <i class="material-icons-outlined star">star</i>5.5
                </div>
            </div>
            <div class="telefono">
                <i class="material-icons-outlined font-star">phone</i>
            </div>

        </div>
    </section> `
            }



        }
        for (let i = 0; i < data.length; i++) {
            if (cafes[1] == data[i].id_cafe) {
                for (let x = 0; x < data[i].fotos.length; x++) {
                    document.querySelector('.scroll').innerHTML += `

                            <div class="scroll_mini"> 
                                <img  src="${data[i].fotos[x]}">
                            </div>`
                }}
                    
                }
                
        })


