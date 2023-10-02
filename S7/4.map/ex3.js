const cities = [{isVisited:true, name: 'Tokyo'}, {isVisited:false, name: 'Madagascar'},{isVisited:true, name: 'Amsterdam'}, {isVisited:false, name: 'Seul'}];

const lista = cities.map(function(city){
    if (city.isVisited == true){
        return city.name + ' (Visitado)'
    } else {
        return city.name
    }
})

console.log(lista)