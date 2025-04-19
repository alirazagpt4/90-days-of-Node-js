// fetch("https://jsonplaceholder.typicode.com/posts")
// .then(response => response.json())
// .then(data=>console.log(data))
// .catch(err => console.log(err));
// console.log("looking for fetch working");
const lat = 31.5204;
const lon = 74.3587;
const API_key = "e662307e08f6a61b4b35ac4defa50926";

fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_key}`)
.then(response=>response.json())
.then(data => console.log(data))
.catch(err => console.log(err));

console.log("looking for fetch working");

