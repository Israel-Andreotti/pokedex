const pokemonsListHtml = document.getElementById('pokemon-list') // pego o elemento html da lista para manipula-lo no js



function convertPokemonToHtml(pokemon) {
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
            </li>`
}