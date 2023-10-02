const streamers = [{name: 'Rubius', age: 32, gameMorePlayed: 'Minecraft'}, {name: 'Ibai', age: 25, gameMorePlayed: 'League of Legends'}, {name: 'Reven', age: 43, gameMorePlayed: 'League of Legends'}, {name: 'AuronPlay', age: 33, gameMorePlayed: 'Among Us'}];

streamers.filter(function(streamer){
    if (streamer.age > 35){
        streamer.gameMorePlayed.toUpperCase()
    }
})

console.log(streamers)

const legends = streamers.filter(function(streamer){
    return streamer.gameMorePlayed.includes('Legends')
})

console.log(legends)