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
    console.log(joke)

}

function addImage(){
    let image = document.createElement('img')
    image.id = 'chuck-face'
    image.src = 'https://i.imgur.com/cwDHPUH.png'
    document.querySelector('.container').append(image)

}
addImage()

function subBtnClick(){
    document.querySelector('.subBtn').addEventListener('submit',(e) => {
            e.preventDefault()
            console.log(e)
    })
} 
subBtnClick()