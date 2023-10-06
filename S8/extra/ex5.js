fetch("https://pokeapi.co/api/v2/pokemon")
  .then((response) => {
    return response.json();
  })
  .then((myJson) => {
    console.log(myJson);

    let urls = []

    for (pokemon of myJson.results) {
        urls.push(fetch(pokemon.url))
    }

    

      Promise.all(urls).then ((res) => {
        const formatedJson = res.map(indRes => indRes.json())
        Promise.all(formatedJson).then(pokemons => {
            for(const pokemon of pokemons) {
                console.log(pokemon)
                const div$$ = document.createElement("div");
                const h1$$ = document.createElement("h1");
                const img$$ = document.createElement("img");
                h1$$.textContent = pokemon.name;
                const foto = pokemon.sprites.front_default;
                img$$.setAttribute("src", foto);
                div$$.appendChild(h1$$);
      div$$.appendChild(img$$);
      document.body.appendChild(div$$);
            }
        })
      })


    
  });
