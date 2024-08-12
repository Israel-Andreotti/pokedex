const offset = 0;
const limit = 11;
const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`;

fetch(url) // pegamos a URL com os nossos parâmetros
    .then((response) => {
        return response.json(); // transformamos a resposta em JSON
    })
    .then((jsonBody) => {
        const pokemonList = jsonBody.results; // extraímos a lista de Pokémon
        //console.log(pokemonList); lista de pokémons em JSON

        // Iteramos sobre a lista de pokémons e os convertemos para HTML
        for (let i = 0; i < pokemonList.length; i++) {
            const pokemon = pokemonList[i];     
            pokemonsListHtml.innerHTML += convertPokemonToHtml(pokemon); //utilizo a função de converter em html para fazer a iteração dos items da lista
        }

        // fazendo a mesma coisa só que com o foreach
        
        // pokemonList.forEach(pokemon => {    
        //     pokemonsListHtml.innerHTML += convertPokemonToHtml(pokemon);
        // });
    })
    .catch((error) => {
        console.error("Erro ao buscar os dados:", error); // tratamento de erro
    });