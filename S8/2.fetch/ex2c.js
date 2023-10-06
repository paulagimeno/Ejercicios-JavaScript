const baseUrl = 'https://api.nationalize.io?name=';

const button$$ = document.querySelector('button');
const input$$ = document.querySelector('input');

button$$.addEventListener('click', consulta);

function consulta(){
    fetch(baseUrl + input$$.value)
  .then((response) => {
    return response.json();
  })
  .then((myJson) => {
    console.log(myJson);




    const para$$ = document.createElement('p');
    let text = 'El nombre ' + input$$.value + ' tiene'

    for (let index = 0; index <  myJson.country.length; index++) {
      
      // const para$$ = document.createElement('p');
        
      text += 'un ' + myJson.country[index].probability + ' porciento de ser de ' + myJson.country[index].country_id + ', ' 
    }

    para$$.textContent = text
    

    const div$$ = document.createElement('div');
    document.body.appendChild(div$$);
    div$$.appendChild(para$$)


    const borrar$$ = document.createElement('button');
    borrar$$.addEventListener('click', function(){
        div$$.remove()
    })

    borrar$$.textContent = 'Borrar Párrafo'

    div$$.appendChild(borrar$$)
    
  });
}

