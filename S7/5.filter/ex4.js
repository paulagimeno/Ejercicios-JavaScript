const streamers = [{name: 'Rubius', age: 32, gameMorePlayed: 'Minecraft'}, {name: 'Ibai', age: 25, gameMorePlayed: 'League of Legends'}, {name: 'Reven', age: 43, gameMorePlayed: 'League of Legends'}, {name: 'AuronPlay', age: 33, gameMorePlayed: 'Among Us'}];

const lol = streamers.filter(function(streamer){
    if(streamer.gameMorePlayed == 'League of Legends' && streamer.age < 30){
    return streamer;
    }
})

console.log(lol)