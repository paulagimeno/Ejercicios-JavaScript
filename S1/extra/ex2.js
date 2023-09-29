const fruits = ['Strawberry', 'Banana', 'Orange', 'Apple'];
const foodSchedule = [{name: "Salad", isVegan: true},{name: "Salmon", isVegan: false}, {name: "Tofu", isVegan: true}, {name: "Burger", isVegan: false}, {name: "Rice", isVegan: true}, {name: "Pasta", isVegan: true}];

let contador = 0

for(let index = 0; index < foodSchedule.length; index++){
    let comida = foodSchedule[index];
    if(comida.isVegan == false){
        comida.name = fruits[contador]
        contador++
    }
}

console.log(foodSchedule)

