const countries = ['Japón', 'Nicaragua', 'Suiza', 'Australia', 'Venezuela'];
const ul$$ = document.createElement('ul');

for(let i = 0; i < countries.length; i++){
    const li$$ = document.createElement('li');
    li$$.textContent = countries[i];
    ul$$.appendChild(li$$);
}
document.body.appendChild(ul$$);