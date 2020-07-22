const body = document.querySelector("body");

fetch("https://pokeapi.co/api/v2/pokemon/meowth")
  .then((response) => {
    console.log(response);
    return response.json();
  })
  .then((data) => {
    let sprites = data.sprites;
    let profilePic = sprites.front_shiny;
    let pokeName = data.name;
    let height = data.height;
    let weight = data.weight;
    let moves = data.moves;
    let tailwhipMove = moves[7].move.name;
    let type = data.types[0].type.name;

    const card = document.createElement("div");
    card.classList.add("card");
    card.style.width = "18rem";
    console.log(card);

    const image = document.createElement("img");
    image.src = profilePic;
    image.classList.add("card-img-top");
    image.alt = pokeName;
    console.log(image);

    const cardBody = document.createElement("div");
    cardBody.classList.add("card-body");
    console.log(cardBody);

    let firstLetter = pokeName.charAt(0).toUpperCase();
    let otherLetters = pokeName.slice(1);
    let finalName = firstLetter + otherLetters;

    const cardTitle = document.createElement("h5");
    cardTitle.classList.add("card-title");
    cardTitle.textContent = finalName;
    console.log(cardTitle);

    const cardWeight = document.createElement("p");
    const cardHeight = document.createElement("p");
    const cardMove = document.createElement("p");
    const cardType = document.createElement("p");

    cardWeight.classList.add("card-text");
    cardHeight.classList.add("card-text");
    cardMove.classList.add("card-text");
    cardType.classList.add("card-text");

    cardWeight.textContent = "Weight: " + weight;
    cardHeight.textContent = "Height: " + height;
    cardMove.textContent = "Move: " + tailwhipMove;
    cardType.textContent = "Type: " + type;

    cardBody.appendChild(cardTitle);
    cardBody.appendChild(cardWeight);
    cardBody.appendChild(cardHeight);
    cardBody.appendChild(cardMove);
    cardBody.appendChild(cardType);

    console.log(cardBody);

    card.appendChild(image);
    card.appendChild(cardBody);
    console.log(card);

    body.appendChild(card);
  });

/*
<div class="card" style="width: 18rem;">
  <img src="..." class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div> */
