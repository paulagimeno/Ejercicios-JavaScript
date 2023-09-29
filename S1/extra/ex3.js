const movies = [{name: "Your Name", durationInMinutes: 130},{name: "Pesadilla antes de navidad", durationInMinutes: 225}, {name: "Origen", durationInMinutes: 165}, {name: "El señor de los anillos", durationInMinutes: 967}, {name: "Solo en casa", durationInMinutes: 214}, {name: "El jardin de las palabras", durationInMinutes: 40}];

let peliPequeña = []

let peliMediana = []

let peliGrande = []

for(let index = 0; index < movies.length; index ++){
    let movie = movies[index];
    if(movie.durationInMinutes < 100){
        peliPequeña.push(movie.name)
    } else if (movie.durationInMinutes >= 100 && movie.durationInMinutes < 200){
        peliMediana.push(movie.name)
    } else if (movie.durationInMinutes > 200){
        peliGrande.push(movie.name)
    }
}

console.log(peliPequeña)

console.log(peliMediana)

console.log(peliGrande)
