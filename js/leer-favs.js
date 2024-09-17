fetch("js/cafe.json")

    .then(response => {
        return response.json()
    })



    .then(data => {
        for (let i = 0; i < data.length; i++) {
            if (data[i].puntuation > 4)
                document.querySelector('.favs').innerHTML += `
            <a href="cafeteria.html?id=${data[i].id_cafe}" >
                <div class="scroll_grande"> 
                    <div>
                          <img  src="${data[i].fotoPrincipal}">
                    </div>
                    <div class="datos">
                        <div class="titulo">${data[i].name}</div>
                        <h5 class="ubi">${data[i].ubication}</h5>
                    <div class="puntuacion">
                        <i class="material-icons-outlined font-star star">star</i>${data[i].puntuation}
                    </div>
                    </div>
                </div>
            </a>                                          
        `
        }
    })