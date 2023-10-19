function showCountries() {
  // Example of the XMLHttpRequest object. 
  let xhr = new XMLHttpRequest();

  xhr.open("GET", "https://restcountries.com/v3.1/all", true);

  xhr.onload = function () {
    if (xhr.status == 200) {
      console.log("Success!");
      let countries = JSON.parse(this.response);
      console.log(countries);
      countries.forEach((country) => {
        const countryCard = document.createElement("div");
        countryCard.innerHTML = country.name.common;
        console.log(countryCard);
      });
    };
  }
  xhr.send();
}

// XML not commonly used anymore, just good to know for older websites.
// JSON is much easier to work with.
// Example of the "Fetch API" being used. This is more modern, clean, 
// and commonly used in todays code environment.
// Fetch is promise based so we can use ".catch" and ".then", async/await.
// Sends a request object and returns a response object.

// fetch(first parameter is URL, {
    //Optional second parameter with info for fetch.
    // for example POST, PUT, etc.
// }).then();

// Fetch always succeeds unless its a network error, or fetch itself. not API you are calling.
fetch("https://restcountries.com/v3.1/all")
.then(res => {
    if (res.ok) {
        document.getElementById("feed").innerHTML = "SUCCESS";
    } else {
        console.log("Not Successful");
    }
    res.json()
})
.then(data => console.log(data));