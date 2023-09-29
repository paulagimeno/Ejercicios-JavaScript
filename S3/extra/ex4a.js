const countries = [{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=1'}, {title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=2'},{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=3'},{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=4'},{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=5'}];


for (let i = 0; i < countries.length; i++){
    let country = countries[i];
    let divcountries$$ = document.createElement('div');
    let title$$ = document.createElement('h4');
    let images$$ = document.createElement('img');

    title$$.textContent = country.title;
    images$$.setAttribute('src', country.imgUrl);
    images$$.setAttribute('alt', country.title);

    divcountries$$.appendChild(title$$);
    divcountries$$.appendChild(images$$);

    document.body.appendChild(divcountries$$)
}

