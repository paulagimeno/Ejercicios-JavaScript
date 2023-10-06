const button$$ = document.querySelector('button');

button$$.addEventListener('click', pintaGato);

function pintaGato() {
    fetch('https://api.thecatapi.com/v1/images/search')
  .then((response) => {
    return response.json();
  })
  .then((myJson) => {
    console.log(myJson);

    const foto = document.createElement('img');
    foto.setAttribute('src', myJson[0].url)
    document.body.appendChild(foto)

    const borrar$$ = document.createElement('button');
  borrar$$.addEventListener('click', function(){
    foto.remove()
    borrar$$.remove()
  })
  document.body.appendChild(borrar$$)
  borrar$$.textContent = 'Bye bye cat!'
  });

}