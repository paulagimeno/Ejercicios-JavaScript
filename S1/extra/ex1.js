const users = [{name: "Abel", years: 43}, {name: "Maria", years: 18}, {name: "Pedro", years: 14}, {name: "Samantha", years: 32}, {name: "Raquel", years: 16}];

for(var index = 0; index < users.length; index++){
    var user = users[index];
if(user.years < 18){
    console.log("Usuario menor de edad " + user.name)
} else if (user.years >= 18){
    console.log("Usuario mayor de edad " + user.name)
}
}