const alumns = [
    {name: 'Pepe Viruela', T1: false, T2: false, T3: true}, {name: 'Lucia Aranda', T1: true, T2: false, T3: true}, {name: 'Abel Cabeza', T1: false, T2: true, T3: true}, {name: 'Alfredo Blanco', T1: false, T2: false, T3: false}, {name: 'Raquel Benito', T1: true, T2: true, T3: true}
]

for(let index = 0; index <alumns.length; index++){
    let alumn = alumns[index];
    let cuentaAprob = 0;

    if(alumn.T1 == true){
        cuentaAprob++
    }

    if(alumn.T2 == true){
        cuentaAprob++
    }

    if(alumn.T3 == true){
        cuentaAprob++
    }

    alumn.isApproved = cuentaAprob >= 2;
}

console.log(alumns)
