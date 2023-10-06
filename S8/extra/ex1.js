fetch('https://rickandmortyapi.com/api/character/')
  .then((response) => {
    return response.json();
  })
  .then((myJson) => {
    console.log(myJson);
    
    for (let i = 0; i < myJson.results.length; i++){
        const character = myJson.results[i];
        const titulo = document.createElement('h2')
        document.body.appendChild(titulo)
        titulo.textContent = character.name
        const foto = document.createElement('img')
        document.body.appendChild(foto)
        foto.setAttribute('src', character.image)
    }
  });

