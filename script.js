import {
    pokemonArray
} from "./data/pokemon.js"

//to see if the array was added to new js file and html file
console.log(pokemonArray)

const cardContainer = document.querySelector('.card-container');
console.log(cardContainer);


pokemonArray.forEach(poArray => {
    //console.log(poArray.id);
    //console.log(poArray.name);
    //console.log(poArray.types);

    cardContainer.innerHTML +=
    `<div class="card">
        <img class="card__image" src="${poArray.sprite}"></img>
        <section class="card__content">
          <h2 calss="card__heading">${poArray.name}<h2>
          <h2 calss="card__text">${poArray.name} ${poArray.id} is a ${poArray.types} type pokemon.<h2>
        </section>
    </div>`
    });

