const animal1 = {
  name: "Monkey",
  species: "primate",
  color: "brown",
  gender: "female",
  age: 7,
};

const animal2 = {
  name: "Elephant",
  species: "mammal",
  color: "gray",
  gender: "male",
  age: 16,
};

const animal3 = {
  name: "Lion",
  species: "big cat",
  color: "golden brown",
  gender: "male",
  age: 9,
};

const animal4 = {
  name: "Giraffe",
  species: "mammal",
  color: "gold and brown",
  gender: "female",
  age: 6,
};

const animal5 = {
  name: "Penguin",
  species: "aquatic bird",
  color: "black and white",
  gender: "female",
  age: 3,
};

function display() {
  let animalObj1 =
    `<h2>${animal1.name}</h2>` +
    `<h3>${animal1.species}</h3>` +
    `<p>${animal1.color}</p>` +
    `<p>${animal1.gender}</p>` +
    `<p>${animal1.age}</p>`;

    let animalObj2 =
    `<h2>${animal2.name}</h2>` +
    `<h3>${animal2.species}</h3>` +
    `<p>${animal2.color}</p>` +
    `<p>${animal2.gender}</p>` +
    `<p>${animal2.age}</p>`;

    let animalObj3 =
    `<h2>${animal3.name}</h2>` +
    `<h3>${animal3.species}</h3>` +
    `<p>${animal3.color}</p>` +
    `<p>${animal3.gender}</p>` +
    `<p>${animal3.age}</p>`;

    let animalObj4 =
    `<h2>${animal4.name}</h2>` +
    `<h3>${animal4.species}</h3>` +
    `<p>${animal4.color}</p>` +
    `<p>${animal4.gender}</p>` +
    `<p>${animal4.age}</p>`;

    let animalObj5 =
    `<h2>${animal5.name}</h2>` +
    `<h3>${animal5.species}</h3>` +
    `<p>${animal5.color}</p>` +
    `<p>${animal5.gender}</p>` +
    `<p>${animal5.age}</p>`;

    document.getElementById("ob1").innerHTML = animalObj1;
    document.getElementById("ob2").innerHTML = animalObj2;
    document.getElementById("ob3").innerHTML = animalObj3;
    document.getElementById("ob4").innerHTML = animalObj4;
    document.getElementById("ob5").innerHTML = animalObj5;
}


