let baseUrl = `https://api.chucknorris.io/jokes/random`

// Retrieve a random personalized chuck joke
// let persUrl = `https://api.chucknorris.io/jokes/random?name=${firstName}`

let searchUrl = 'https://api.chucknorris.io/jokes/search?query={query}'

let catUrl = 'https://api.chucknorris.io/jokes/categories'

// `https://api.chucknorris.io/jokes/random?category={category}`
let category = ""

function dropDownMenu(){
    fetch(baseUrl + `${category}`)
    .then(res => res.json())
    .then(json =>{
        let menuOptions = document.querySelector('.drop-down')
        menuOptions.addEventListener('change', (e)=>{
             category= e.target.value;
        })
    })
}

dropDownMenu();



function fetchData(){
fetch(baseUrl)
.then(res => res.json())
.then (data => jokeData(data))
}

fetchData()

function jokeData(startData){
    let joke = document.querySelector(".fact-text")
    joke.textContent = startData.value
    // console.log(joke)


}function subBtnClick(){
    document.querySelector('#fact-form').addEventListener('submit', (e) => {
         e.preventDefault()
        let li = document.createElement('li')
        li.textContent =e.target.subject.value
        if (e.target.subject.value === ''){
            alert('DONT GET NUNCHUCKED TO THE NUTZ SIDEKICK!')
        }else{
            let btn = document.createElement('button')
            btn.innerText = "Nunchuck!!"
            btn.style.backgroundColor = 'black'
            btn.style.color = 'goldenrod'
            btn.addEventListener('click', (e) => {
                e.preventDefault()
                li.remove()
                btn.remove()
                
            })
            document.querySelector('.chuck-facts').append(li,btn)
            e.target.subject.value = ""
        }
        //  console.log(li)
    })
} 
subBtnClick();

function nextBtn(){
    document.querySelector('.chuck1').addEventListener('click',() => {
        let jokeInfo = fetch(baseUrl)
        .then(res => res.json())
        .then (data => jokeData(data));
        // console.log(jokeInfo)
        if (category){
            fetch(`https://api.chucknorris.io/jokes/random?category=${category}`)
            .then(res =>res.json())
            .then(data =>jokeData(data))

        }else{
            jokeInfo;

        }
    })
} 
nextBtn();

function addToFavs (){
    document.querySelector('.chuck2').addEventListener('click', (e) =>{
        let fact = document.querySelector('.fact-text').textContent
        let li = document.createElement('li')
        li.textContent = fact
        let btn = document.createElement('button')
        btn.textContent = "Roundhouse Kick"
        btn.style.backgroundColor = 'black'
        btn.style.color = 'goldenrod'
        btn.addEventListener('click', (e) => {
            e.preventDefault()
            li.remove()
            btn.remove()
        })
        document.querySelector('.chuck-facts').append(li,btn)
        //console.log(li)
    })
}
addToFavs()
