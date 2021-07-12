let baseUrl = 'https://api.chucknorris.io/jokes/random'

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

