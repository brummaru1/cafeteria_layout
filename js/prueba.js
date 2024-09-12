fetch("js/cafe.json")
    .then(response => {
        return response.json()
    })

    .then(data => {

        const listado = document.getElementById("cafeListado")
        const searchInput = document.getElementById("searchInput")
        const errorMessage = document.getElementById("errorMessage");
        const place = document.getElementById("place");
        const otro = document.getElementById("otro");
        const category = document.getElementById("category");

        const mostarCafe = (data) => {
            listado.innerHTML = ""
            if (data.lenght == 0) {
                errorMessage.style.display = "block";
            } else {
                errorMessage.style.display = "none";
                data.forEach(cafe => {
                    const content = document.createElement("div")
                    
                    content.innerHTML += `
                <a href="cafeteria.html?id=${cafe.id_cafe}" >
                    <div class="scroll_grande"> 
                        <div class="foto">
                            <img  src="${cafe.fotoPrincipal}">
                        </div>
                        <div class="datos">
                            <div class="titulo">${cafe.name}</div>
                            <h5 class="ubi">${cafe.ubication}</h5>
                        <div class="puntuacion">
                            <i class="material-icons-outlined font-star star">star</i>${cafe.puntuation}
                        </div>
                        </div>
                    </div>
                </a>                                          
            `
                    listado.appendChild(content)
                });
            }
        }

        const buscador = () => {
            const busqueda = searchInput.value.toLowerCase()
            console.log(busqueda)
            const cafeFiltrados = data.filter((cafe) => cafe.name.toLowerCase().startsWith(busqueda))

            mostarCafe(cafeFiltrados);
        }


        mostarCafe(data);

        searchInput.addEventListener("input", buscador)
        place.addEventListener("change", (event) => {
            const selected = event.target.value

            if (place == "") {
                mostarCafe(data)
            } else {
                const cafeFiltrados = data.filter((cafe) => cafe.ubication == selected)
                mostarCafe(cafeFiltrados);
            }
        })
        otro.addEventListener("change", (event) => {
            const otro = event.target.value
            console.log(otro)
            if(otro==""){
                mostarCafe(data)
            }else if(otro=="recommend"){
                const cafeFiltrados = data.filter((cafe) => cafe.puntuation == "5")
                mostarCafe(cafeFiltrados);
            }else if(otro=="delivery"){
                const cafeFiltrados = data.filter((cafe) => cafe.delivery == "yes")
                mostarCafe(cafeFiltrados);
            }
        })

        category.addEventListener("change", (event) => {
            const category = event.target.value
            console.log(category)
        })

    })


