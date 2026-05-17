const contenedor = document.getElementById("contenedor");

async function pokemones(){
    try{
        for(let i = 1; i<=151; i++){
            const pokemon = await fetch(`https://pokeapi.co/api/v2/pokemon/${i}`);
            const pokeJson = await pokemon.json();

            const tipo = pokeJson.types[0].type.name;
    
            const div = document.createElement("div");
            div.classList.add("tarjeta");
            const h3 = document.createElement("h3");
            h3.innerText = pokeJson.name.toUpperCase();
            const p = document.createElement("p");
            p.innerText = `Tipo: ${tipo}\n#${i}`;
            const img = document.createElement("img");
            img.setAttribute("src", pokeJson.sprites.front_default);

            div.classList.add(tipo);
                
            div.append(h3);
            div.append(p);
            div.append(img);

            contenedor.append(div);
        } 
    }catch (error){
        console.log("Problema en ->", error)
    }
}

pokemones();