let baseUrl = 'https://api.chucknorris.io/jokes/random'

// Retrieve a random personalized chuck joke
let persUrl = `https://api.chucknorris.io/jokes/random?name=${firstName}`

let searchUrl = 'https://api.chucknorris.io/jokes/search?query={query}'

let catUrl = 'https://api.chucknorris.io/jokes/categories'

fetchData()

function fetchData(){
fetch(baseUrl)
.then(res => res.json())
.then (data => jokeData(data))
}


function jokeData(startData){
    let joke = document.querySelector("h1")
    joke.textContent = startData.value
    console.log(joke)

}



// console.log(baseUrl)