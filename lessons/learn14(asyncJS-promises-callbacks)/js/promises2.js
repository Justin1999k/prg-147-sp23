// Functions for promise and '.then()' example.
function getWeather() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve("sunny");
      }, 500);
    });
  }
  
  function onSuccess(data) {
    console.log(`Success ${data}`);
  }
  
  function onError(error) {
    console.log(`Error: ${error}`);
  }
  
  // New function that returns a promise, to show example of chaining ".then()".
  function getWeatherTemp(weather) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        switch (weather) {
          case "sunny":
            resolve("☀️");
            break;
          case "cloudy":
            resolve("⛅");
            break;
          case "snowing":
            resolve("❄️");
          default:
            reject("Weather Error");
        }
      }, 500);
    });
  }
  
  getWeather()
    .then(getWeatherTemp)
    .then(onSuccess, onError) // Can handle a error with second parameter.
    .catch(onError); // Or can handle a error with the '.catch()' method.
  
  // Example 2
  
  function fun1() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve("😠");
      }, 100);
    });
  }
  
  function fun2() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve("😃");
      }, 100);
    });
  }
  
  function onCorrect(data) {
    console.log(`Success: ${data}`);
  }
  
  function onFailure(errorCode) {
    console.log(`ERROR: ${errorCode}`);
  }
  
  // Function to show an example of the '.finally()' method.
  function onFinally() {
    console.log("Finally Done!");
  }
  
  fun1().then(fun2).then(onCorrect).catch(onFailure).finally(onFinally);