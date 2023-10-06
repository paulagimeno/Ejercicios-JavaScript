fetch('http://localhost:3000/characters')
  .then((response) => {
    return response.json();
  })
  .then((myJson) => {
    console.log(myJson);

    
  });