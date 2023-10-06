fetch('http://localhost:3000/diary')
  .then((response) => {
    return response.json();
  })
  .then((myJson) => {
    console.log(myJson);

    function ordenarFechas (myJson){
      return myJson.sort((a, b) => new Date(a.date) - new Date(b.date))
    }

    const diario = ordenarFechas(myJson);

    for(entry of diario){
      const div$$ = document.createElement('div');
        document.body.appendChild(div$$);
        const h3$$ = document.createElement('h3');
        const h5$$ = document.createElement('h5');
        const p$$ = document.createElement('p');
        h3$$.textContent = entry.title;
        h5$$.textContent = entry.date;
        p$$.textContent = entry.description; 
        const button$$ = document.createElement('button')
        button$$.textContent = 'Eliminar entrada'
        button$$.addEventListener('click', eliminarEntrada)

        function eliminarEntrada(){
          div$$.remove()
        }

        div$$.appendChild(h3$$);
        div$$.appendChild(h5$$);
        div$$.appendChild(p$$);
        div$$.appendChild(button$$);
    }
  });

  