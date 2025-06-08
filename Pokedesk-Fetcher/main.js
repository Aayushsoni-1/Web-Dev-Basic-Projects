async function fetchPokemon(){

    try {

        const Pokemon = document.getElementById("pokemonName").value.toLowerCase();
        const Image = document.getElementById("PokiImage")

        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${Pokemon}`);
        if(!response.ok){
            throw new Error("Such Pokemon Doesn't Exist!")
        }
        const data = await response.json();
        Image.src = data.sprites.front_default;
        Image.style.display = 'block'
    }
    catch (error) {
        console.error(error)
    }

}

fetchPokemon();