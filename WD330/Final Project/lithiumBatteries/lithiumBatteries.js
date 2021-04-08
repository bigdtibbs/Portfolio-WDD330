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

const calculatorButton = document.getElementById("calcBtn");


// Lithium Battery Form Caluculator
calculatorButton.addEventListener( 'click', function() {
    event.preventDefault();

    //let PN14849 = document.getElementsByName("PN14849").value;
    let QTY14849 = document.getElementById("QTY14849").value * 0.1;
    let QTY20545 = document.getElementById("QTY20545").value * 0.102;
    let QTY25261 = document.getElementById("QTY25261").value * 0.101;
    let QTY27220 = document.getElementById("QTY27220").value * 0.101;
    let QTY27574 = document.getElementById("QTY27574").value * 0.2;
    let QTY27575 = document.getElementById("QTY27575").value * 0.202;
    let QTY28000 = document.getElementById("QTY28000").value * 0.209;
    let QTY28937 = document.getElementById("QTY28937").value * 0.098;
    var sum = "";
    let numPackages = sum / 10 + 1;
    let batteryWeightDisplay = document.getElementById("batteryWeightDisplay");
    let numPackagesDisplay = document.getElementById("numPackagesDisplay");
    //alert(PN14849);
    //console.log(QTY14849);

    /****
    if(PN14849.value == 'true') {
        sum += QTY14849 * 0.136
    }
    ****/

    sum = QTY14849 + QTY20545 + QTY25261 + QTY27220 + QTY27574 + QTY27575 + QTY28000 + QTY28937;

    if (sum > 9.7 && sum < 10) {
        alert("Possible VIOLATION of IATA Packing Instruction 965 I.B.");
        alert("IATA Packing Instruction 965 I.B. - Each package of loose lithium batteries limited to 10kg total weight. Please verify total weight of package is less than 10kg's.");

        batteryWeightDisplay.innerText = sum.toFixed(2) + "kg";
        numPackagesDisplay.innerText = "1 or More Packages. Check total package weight.";
    }
    else if (sum >= 10) {

        // How many boxes will you need? Every 10 kg's you will need to divide into another box.
        // 10 kg = 2 box. 20 kg = 3 box. Formula should be divide by 10 and add 1.
        let numPackages = Math.floor(sum / 10 + 1);

        /***
        if (numPackages = 2) {
            alert("VIOLATION of IATA Packing Instruction 965 I.B. !!!");

        }
        ***/

        alert("VIOLATION of IATA Packing Instruction 965 I.B. !!!");
        alert(`IATA Packing Instruction 965 I.B. - Each package of loose lithium batteries limited to 10kg total weight. You will need ${numPackages} different packages to be complaint with regulations.`);

        batteryWeightDisplay.innerText = sum.toFixed(2) + "kg";
        numPackagesDisplay.innerText = numPackages + " Packages";
    }
    else {

        // Should only fire if less than 10kg of batteries.
        // Will only need one box.
        batteryWeightDisplay.innerText = sum.toFixed(2) + "kg";
        numPackagesDisplay.innerText = "1 Package";
    }



    //console.log('The Function Works.');

})