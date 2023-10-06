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


  });
}
