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
        // let fact = document.querySelector('#subject').textContent
        let li = document.createElement('li')
        li.textContent =e.target.name.value
        // li.textContent = fact
        document.querySelector('.chuck-facts').append(li)

         console.log(li)
            
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

function addToFavs (){
    document.querySelector('.chuck2').addEventListener('click', (e) =>{
        let fact = document.querySelector('.fact-text').textContent
        let li = document.createElement('li')
        li.textContent = fact
        document.querySelector('.chuck-facts').append(li)
        // console.log(li)
    })
}
addToFavs()
