
  

fetch("js/menu.json")
    .then(response => {
        return response.json()
    })

    
                       
    .then(data => {
        for (let i = 0; i < data.length; i++) {
         
         document.querySelector('.menu').innerHTML += `
          <div class="cont_menu">
                <div class="comida">
                  ${data[i].dish}
                </div>
                <div class="precio_flecha">
                    $ ${data[i].price}
                    <button class="flecha"><i class="material-icons-outlined font-star">arrow_forward</i></button>   
                </div>
            </div>
         `
    }})