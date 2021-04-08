// AJAX Elements
const city = document.getElementById('weatherSidebarCity');

// Set up Weather app.
window.addEventListener('load', ()=> {
    let latitude;
    let longitude;
    let key;
    
    let weatherSBCity = document.getElementById("weatherSidebarCity");
    let weatherSBTemp = document.getElementById("weatherSidebarTemp");
    let weatherSBDesc = document.getElementById("weatherSidebarDesc");
    let weatherSBIcon = document.querySelector('.weather-icon');
    let weatherSBFC = document.getElementById("weatherSidebarDegreeFC");

    if(navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(position => {

            // For testing purposes.
            // console.log(position);
            longitude = position.coords.longitude;
            latitude = position.coords.latitude;
            key = `ac12d1994ea5ae5f8b6363634755f34c`;

            const api = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=imperial&appid=${key}`;

            fetch(api).then(response => {
                if(response.ok) {
                    return response;
                }
                throw Error(response.statusTexts);
            })
            .then(response => response.json())
            .then(data => {
                console.log(data);
                let {temp} = data.main;
                let {description} = data.weather[0];
                let {icon} = data.weather[0];
                let name = data.name;
                if (name == "Greenville") {
                    name = "Logan";
                };

                // For Testing Purposes.
                // console.log(icon);
                // console.log(description);

                weatherSBCity.innerText = name;
                weatherSBDesc.innerHTML = description;
                weatherSBTemp.innerText = temp;
                weatherSBIcon.innerHTML = `<img src="icons/${icon}.png">`;
                let degree = '\u00B0';
                var degF = 'F';
                var degreeSymbol = document.createElement("span");

                weatherSBTemp.appendChild(degreeSymbol);   
                degreeSymbol.innerText = degree;

                weatherSBFC.innerText = 'F';
             
            });
        })
    }
});