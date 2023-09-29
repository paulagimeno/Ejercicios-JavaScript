const apps = ['Facebook', 'Netflix', 'Instagram', 'Snapchat', 'Twitter'];

const ul$$ = document.createElement('ul')

for(let i = 0; i < apps.length; i++){
    const li$$ = document.createElement('li');
    li$$.textContent = apps[i];
    ul$$.appendChild(li$$);
}

document.body.appendChild(ul$$)