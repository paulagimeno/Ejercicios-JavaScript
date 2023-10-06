const streamers = [{name: 'Rubius', age: 32, gameMorePlayed: 'Minecraft'}, {name: 'Ibai', age: 25, gameMorePlayed: 'League of Legends'}, {name: 'Reven', age: 43, gameMorePlayed: 'League of Legends'}, {name: 'AuronPlay', age: 33, gameMorePlayed: 'Among Us'}];

const input$$ = document.querySelector('input');
const button$$ = document.querySelector('button');

button$$.addEventListener('click', showNames)

function showNames(){
    const filtered = streamers.filter(function(streamer){
        return streamer.name.toLowerCase().includes(input$$.value.toLowerCase())
    })
    console.log(filtered)
}