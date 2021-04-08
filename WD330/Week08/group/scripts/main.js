var container = document.createElement("DIV");
function loadData(apiURL){
    if(!apiURL){
        apiURL = 'https://swapi.dev/api/people/';
    }
    fetch(apiURL).then( response => {
        container.innerHTML = '<p>Waiting for response...</p>';
        if(response.ok) {
            return response;
        }
        throw Error(response.statusText);
        })
    .then( response => response.json() )
    .then( text => {
        container.innerHTML = "";
        text.results.forEach(person => {
            container.innerHTML += "<p><a href='#' onclick=\"details('" + person.url + "')\">" + person.name + "</a></p>";
        })
        if(text.previous){
            container.innerHTML += "<button onclick=\"loadData('" + text.previous + "')\" id='previous'>Previous</button>";
        }
        if(text.previous && text.next){
            container.innerHTML += "<span>&nbsp;|&nbsp;</span>";
        }
        if(text.next){
            container.innerHTML += "<button onclick=\"loadData('" + text.next + "')\" id='next'>Next</button>";
        }
    })
    .catch( error => console.log('There was an error:', error));
    document.body.appendChild(container);
}
var apiURL = 'https://swapi.dev/api/people/';
window.onload = function(){loadData(apiURL);};

function details(apiURL){
    if(!apiURL){
        apiURL = 'https://swapi.dev/api/people/';
    }
    fetch(apiURL).then( response => {
        container.innerHTML = '<p>Waiting for response...</p>';
        if(response.ok) {
            return response;
        }
        throw Error(response.statusText);
        })
    .then( response => response.json() )
    .then( person => {
        container.innerHTML = "";
            container.innerHTML += "<h1>" + person.name + "</h1>";
            container.innerHTML += "<p>Gender: " + person.gender + "</p>";
            container.innerHTML += "<p>Height: " + person.height + "</p>";
            container.innerHTML += "<p>Mass: " + person.mass + "</p>";
            container.innerHTML += "<p>Hair Color: " + person.hair_color + "</p>";
            container.innerHTML += "<p>Eye Color: " + person.eye_color + "</p>";
            container.innerHTML += "<p>Birth Year: " + person.birth_year + "</p>";
            container.innerHTML += "<button onclick=\"loadData('https://swapi.dev/api/people/')\">Back</button>";

    })
    .catch( error => console.log('There was an error:', error));
    document.body.appendChild(container);
}