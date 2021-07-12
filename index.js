let baseUrl = 'https://api.chucknorris.io/jokes/random'

fetch(baseUrl)
.then(res => res.json())
.then (json => console.log(json))

