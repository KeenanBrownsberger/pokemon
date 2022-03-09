const poke_container = document.getElementById("poke_container");

const pokemons_number = 150;

// creates card for one pokemon
function createPokemonCar(pokemon) {
  const pokemonEl = document.createElement("div"); // create pokemon element
  pokemonEl.classList.add("pokemon");

  const name = pokemon.name[0].toUpperCase() + pokemon.name.slice(1); // make first letter of name upper case

  const pokeInnerHTML = `
  <div class="img-container">
  <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png">
  </div>
  <div class="info">
  <h3 class="name">${name}</h3>
  </div>
    `;

  pokemonEl.innerHTML = pokeInnerHTML;
  poke_container.appendChild(pokemonEl); // appends new pokemon element to poke_container
}

// gets one pokemon
const getPokemon = async (id) => {
  const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
  const res = await fetch(url);
  const pokemon = await res.json();
  console.log(pokemon);
  createPokemonCar(pokemon);
};

// gets every pokemon by running through the getPokemon function for every i
const fetchPokemons = async () => {
  for (let i = 1; i <= pokemons_number; i++) {
    await getPokemon(i);
  }
};

fetchPokemons();
