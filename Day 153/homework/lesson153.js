    function getWeather() {
      const city = document.getElementById("cityInput").value.trim();
      if (!city) {
        document.getElementById("weather").textContent = "Please enter a city and country code.";
        return;
      }

      const url = `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(city)}&appid=b267c0add690d4d5d51b2e499de2039c&units=metric&lang=en`;

      document.getElementById("weather").textContent = "Loading...";

      fetch(url)
        .then(response => {
          if (!response.ok) {
            throw new Error("City not found");
          }
          return response.json();
        })
        .then(data => {
          const name = data.name;
          const temp = data.main.temp;
          const description = data.weather[0].description;
          document.getElementById("weather").textContent =
            `In ${name}, it is currently ${temp}°C with ${description}.`;
        })
        .catch(error => {
          document.getElementById("weather").textContent = "Error: " + error.message;
        });
    }