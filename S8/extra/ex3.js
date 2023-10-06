fetch('http://localhost:3000/movies')
  .then((response) => {
    return response.json();
  })
  .then((myJson) => {
    console.log(myJson);

    for(peli of myJson){
        const div$$ = document.createElement('div');
        const h1$$ = document.createElement('h1');
        const h2$$ = document.createElement('h2');
        const p$$ = document.createElement('p');
        const img$$ = document.createElement('img');

        h1$$.textContent = peli.title;
        h2$$.textContent = peli.date + ' (calificación de los usuarios: ' + peli.rating + ')';
        p$$.textContent = peli.description;
        img$$.setAttribute('src', peli.img);
        img$$.setAttribute('width', 300)

        div$$.appendChild(h1$$)
        div$$.appendChild(img$$)
        div$$.appendChild(h2$$)
        div$$.appendChild(p$$)
        document.body.appendChild(div$$)
    }
  });

