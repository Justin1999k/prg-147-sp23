// Dog objects
const dog1 = {
  heading: "Bucket Case",
  image: "images/black-dog.jpg",
  caption: "Just hanging out waiting for water",
  altTag: "Black dog in bucket",
};
const dog2 = {
  heading: "Grass Rest",
  image: "images/gold-dog.jpg",
  caption: "Just chilling.",
  altTag: "Gold dog resting on grass",
};
const dog3 = {
  heading: "Snow Playing",
  image: "images/snow-dog.jpg",
  caption: "Dog playing with a snowman.",
  altTag: "Dog in the snow.",
};
const dog4 = {
  heading: "Dogs Playing",
  image: "images/white-dogs.jpg",
  caption: "Two dogs hanging out together.",
  altTag: "Two white dogs.",
};

function chooseDog(dog) {
  if (dog == 1) {
    loadMe(dog1, 1); //Dont put dog1 in quotes or it will pass as a string not object.
  } else if (dog == 2) {
    loadMe(dog2, 2);
  } else if (dog == 3) {
    loadMe(dog3, 3);
  } else if (dog == 4) {
    loadMe(dog4, 4);
  }
}

function loadMe(dog, dogNum) {
  document.getElementById("heading" + dogNum).innerHTML = dog.heading;
  document.getElementById("img" + dogNum).src = dog.image;
  document.getElementById("img" + dogNum).style.display = "block";
  document.getElementById("p" + dogNum).innerHTML = dog.caption;
  document.getElementById("img" + dogNum).setAttribute = ("alt", dog.altTag);
}
