const intentos = document.querySelector('[data-function="attempts"]');
const tabla = document.querySelector('[data-function="board"]');
const filas = prompt('Inserta el número de filas');
const columnas = prompt('Inserta el número de columnas');
let intentosCuenta = 0

function generarCoordenadas(e){
return Math.floor(Math.random() * e )
}

let randomFila$$ = generarCoordenadas(filas);
let randomColumnas$$ = generarCoordenadas(columnas); 

for (let i = 0; i < filas; i++){
    const tr$$ = document.createElement('tr');
    tabla.appendChild(tr$$);
    for (let j = 0; j < columnas; j++){
        const td$$ = document.createElement('td');
        tr$$.appendChild(td$$);
        const imgXUrl = './public/exercise-4/x.png'; 
        
        const def$$ = document.createElement('img');
        def$$.setAttribute('src', imgXUrl); 
        td$$.appendChild(def$$); 
        td$$.addEventListener('click', comprobarCoordenada)

        function comprobarCoordenada(){
            if(i == randomFila$$ && j == randomColumnas$$){
                def$$.setAttribute('src', './public/exercise-4/chest.png');
                setTimeout(() => {
                    alert('Winner winner chicken dinner!')
                    location.reload()
                }, 500);
            } else {
                def$$.setAttribute('src', './public/exercise-4/skull.png');
                intentosCuenta += 1;
                intentos.textContent = intentosCuenta;
            }
        }
    }
}


