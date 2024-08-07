const url = "https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}";
const offset = 0;
const limit = 10;

const pokemonLista = document.getElementById('pokemon-list');


function convertPokemon(pokemon) {
    return `
    <li class="pokemon"> 
        <div class="info">
            <span class="number">#001</span>
            <span class="name">${pokemon.name}</span>
        </div>

        <div class="detail">
            <ol class="types">
                <li class="type">Grass</li>
                <li class="type">Poison</li>
            </ol>
            <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg" alt="${pokemon.name}">
        </div>
    </li>`;
}



fetch(url)
    .then((response) => response.json())
    .then((jsonBody) => {
        console.log(jsonBody);
        return jsonBody.results;
    })
    .then((pokemonList) => {
        for (let i = 0; i < pokemonList.length; i++) {
            const pokemon = pokemonList[i];
            console.log(convertPokemon(pokemon));
            pokemonLista.innerHTML += convertPokemon(pokemon);
        }
    })










