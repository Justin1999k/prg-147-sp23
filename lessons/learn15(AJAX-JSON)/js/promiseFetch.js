// Promise example using fetch.
function fetchData() {
  return new Promise((resolve, reject) => {
    fetch("https://api.weather.gov/gridpoints/OKX/35,35/forecast") // GETs info from weather api using fetch.
      .then((response) => response.json())
      .then((data) => resolve(data.properties.periods[1].shortForecast));
  });
}

function displayData(weather) {
  console.log(weather);
}

function onErr(err) {
  console.log(`ERROR ${err}`);
}

fetchData().then(displayData).catch(onErr);

// Example using crypto API with authentication header. (409 error will occur once 100 request within 24 hours has been made.)
function fetchData2() {
  return new Promise((resolve, reject) => {
    const apiKey = "6F342C6F-69F9-44A2-96BE-5CE154B7F817";

    fetch("https://rest.coinapi.io/v1/exchangerate/BTC/USD", {
      headers: {
        "X-CoinAPI-Key": apiKey,
      },
    }).then((response) => {
      if (response.ok) {
        resolve(response.json());
      } else {
        reject(new Error("Request failed"));
      }
    });
  });
} // We wrap the 'fetch' api request inside of a promise to give a single place to change any headers, links, etc.

function displayData2(coin) {
  console.log(coin);
}

fetchData2().then(displayData2).catch(onErr);

// Example using async/await (most modern way to work with async functions, cleaner.)
function getData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Hi Justin");
    }, 1000);
  });
}

async function start() {
  const result = await getData(); // Can only use the await keyword inside of an async function.
  console.log(result);
}

// Example using try/catch error handling
async function startTryCatch() {
  try {
    const result = await getData(); 
    console.log(`Success: ${result}`);
  } catch(error) {
    console.log(`ERROR: ${error}`);
  }
}

start();
startTryCatch();

// Example using async with fetch.
async function start2() {
  const apiKey = "6F342C6F-69F9-44A2-96BE-5CE154B7F817";
  const data = await fetch("https://rest.coinapi.io/v1/exchangerate/BTC/USD", {
    headers: {
      "X-CoinAPI-Key": apiKey,
    },
  });
  const result = await data.json();
  console.log(result);
}

start2();
