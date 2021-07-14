let baseUrl = 'https://api.chucknorris.io/jokes/random'

// Retrieve a random personalized chuck joke
// let persUrl = `https://api.chucknorris.io/jokes/random?name=${firstName}`

let searchUrl = 'https://api.chucknorris.io/jokes/search?query={query}'

let catUrl = 'https://api.chucknorris.io/jokes/categories'

fetchData()

function fetchData(){
fetch(baseUrl)
.then(res => res.json())
.then (data => jokeData(data))
}


function jokeData(startData){
    let joke = document.querySelector(".fact-text")
    joke.textContent = startData.value
    // console.log(joke)

}

function subBtnClick(){
    document.querySelector('#fact-form').addEventListener('submit', (e) => {
         e.preventDefault()
         e.

         console.log(e)
            
    })
} 
subBtnClick();

function nextBtn(){
    document.querySelector('.chuck1').addEventListener('click',() => {
        let jokeInfo = fetch(baseUrl)
        .then(res => res.json())
        .then (data => jokeData(data));
        // console.log(jokeInfo)
    })
} 
nextBtn();

