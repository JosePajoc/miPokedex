const contenedor = document.getElementById("contenedor");
const numeroBuscar = document.getElementById("numeroBuscar");
const btnBuscar = document.getElementById("btnBuscar");

async function pokemon(){
    try{
            let numero = numeroBuscar.value;
            if(numero !== ""){
                numero = parseInt(numero);
                if(numero>=1 && numero<=151){
                    contenedor.innerHTML = "";
                    const pokemon = await fetch(`https://pokeapi.co/api/v2/pokemon/${numero}`);
                    const pokeJson = await pokemon.json();
                    
                    const div = document.createElement("div");
                    div.classList.add("tarjeta");
                    const h3 = document.createElement("h3");
                    h3.innerText = pokeJson.name;
                    const p = document.createElement("p");
                    p.innerText = `Tipo: ${pokeJson.types[0].type.name}`;
                    const img = document.createElement("img");
                    img.setAttribute("src", pokeJson.sprites.front_default);
                    
                    div.append(h3);
                    div.append(p);
                    div.append(img);

                    contenedor.append(div);
                }else{
                    alert("El valor se encuentra fuera del rango");
                }
                
            }else{
                alert("Debe ingresar un valor");
            } 
    }catch (error){
        console.log("Problema en ->", error)
    }
}

btnBuscar.addEventListener("click", pokemon);
//pokemon();