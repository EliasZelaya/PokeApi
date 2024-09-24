const endPoints = {
  API_URL: "https://pokeapi.co/api/v2/",
  GET_POKEMON: "pokemon/",
};
const container = document.querySelector(".pokemons-section");

function getPokemons() {
  fetch(endPoints.API_URL + endPoints.GET_POKEMON)
    .then((res) => res.json())
    .then((data) => {
      showPokemons(data.results);
    })
    .catch((error) => console.log(error));
}

const showPokemons = async (pokemons) => {
  pokemons.forEach((pokemon) => {
    fetch(pokemon.url)
      .then((response) => response.json())
      .then((pokeData) => {
        const type = pokeData.types.map((types) => types.type.name).join(", ");
        const card = `
          <div class="cards">
            <figure>
              <img src="${pokeData.sprites.front_default}" alt="Image of ${pokeData.name}">
              <figcaption>Name: ${pokeData.name}</figcaption>
              <figcaption>Type: ${type}</figcaption>
            </figure>
          </div>
        `;
        container.innerHTML += card;
      });
  });
};

getPokemons();