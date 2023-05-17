/*
Iterables: https://www.w3schools.com/js/js_iterables.asp
Read the page
Demonstrate iteration of a list 
Create a list of movies, books, or games at least 5 items long and 
display them in the list paragraph
*/
const movies = ["Avengers", "John Wick", "Avatar", "Toy Story", "Batman"];
let list = "";

for (x in movies) {
  list += movies[x] + "<br>";
  document.getElementById("list").innerHTML = list;
}

/*
JS Sets

https://www.w3schools.com/js/js_sets.asp

Create a set with at least 5 song titles in it
display the contents of the set in the set1 paragraph (use iteration)
*/
const songs = new Set([
  "Uptown Funk",
  "Bohemian Rhapsody",
  "Moves Like Jagger",
  "Hotel California",
  "Shape of You",
]);
let songList = "";

songs.forEach(function(value){
    songList += value + "<br>";
})
document.getElementById("set1").innerHTML = songList;
songList = "";

// add two more songs to the set then display in the set2 paragraph
songs.add("Rockstar");
songs.add("Rolling in the Deep");

songs.forEach(function(value){
    songList += value + "<br>";
})
document.getElementById("set2").innerHTML = songList;

/* 
Maps
https://www.w3schools.com/js/js_maps.asp

Maps are like dictionaries in python
Create a map with five names and emails in it.
Display the contents of the map in map1 use the forEach() method (bottom of
    the reference page)
*/
const emails = new Map([
    ["Justin", "justin@gmail.com"],
    ["Jaden", "jaden@gmail.com"],
    ["Maya", "maya@gmail.com"],
    ["Navi", "navi@gmail.com"],
    ["Gattoo", "gattoo@gmail.com"]
]);
let emailList = "";

emails.forEach(function(email, name){
    emailList += name + " = " + email + "<br>";
})
document.getElementById("map1").innerHTML = emailList;
emailList = "";

// add two new names and emails and display in map2 use the forEach() method
emails.set("Gupi", "gupi@gmail.com");
emails.set("Farokh", "farokh@gmail.com")
emails.forEach(function(email, name){
    emailList += name + " = " + email + "<br>";
})

document.getElementById("map2").innerHTML = emailList;

// get and display the email of one person, display in map3
document.getElementById("map3").innerHTML = emails.get("Gupi");