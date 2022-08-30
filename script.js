import {
    pokemonArray
} from "./data/pokemon.js"


const cardContainer = document.querySelector('.card-container');


function toTitleCase(str) {
    return str.replace(
      /\w\S*/g,
      function(title) {
        return title.toUpperCase();
      }
    );
  }


pokemonArray.forEach(poArray => {

    cardContainer.innerHTML +=
    `<div class="card">
        <img class="card__image" src="${poArray.sprite}"></img>
        <section class="card__content">
          <p calss="card__heading">${toTitleCase(poArray.name)}</p>
          <p calss="card__text">${poArray.name} ${poArray.id} is a ${poArray.types} type pokemon.</p>
        </section>
    </div>`
    });

    //const nameInput = document.getElementById('searchByName')
    //const typeInput = document.getElementById('searchByType')
    const searchButton = document.getElementById('search')
    const clearButton = document.getElementById('clear')
    let filteredArr = [...pokemonArray]

    console.log(nameInput);
    console.log(typeInput);
    console.log(searchButton);
    console.log(clearButton);

    const searchName = () => {
      cardContainer.innerHTML = "";
      let nameInput = document.getElementById('searchByName').value.toLowerCase();
      filteredArr = pokemonArray.filter(item => item['name'] == nameInput);

      pokemonArray(filteredArr);

      console.log(nameInput);
    }

    const searchType = () => {
      cardContainer.innerHTML = "";
      let typeInput = document.getElementById('searchByType')
      filteredArr = pokemonArray.filter(item => item['type'] == typeInput);

      pokemonArray(filteredArr);
    }

    searchButton.addEventListener('click', searchName);
    









 




    

