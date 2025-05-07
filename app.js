

// Nombre del gasto
// Tipo (Ingreso / Egreso)
// Monto gastado

let nombreDeGasto = ""
let tipoDeGasto = ""
let montoDeGasto = 0
let registro = []

let opcion
let salir
let registroEncontrado

let condicion = true

while(condicion){

    nombreDeGasto = prompt("Ingrese el nombre del gasto")
    tipoDeGasto = prompt("Ingrese el tipo de gasto (ingreso/egreso)")
    montoDeGasto = Number(prompt("Ingrese el monto del gasto"))

    if(nombreDeGasto == "" || tipoDeGasto == "" || montoDeGasto <= 0){
        console.log("Error al registrar datos")
    }
    else{
        registro.push({nombre: nombreDeGasto, tipo: tipoDeGasto, monto: montoDeGasto})

        salir = Number(prompt("¿Que desea hacer? \nRegistrar Nuevamente - Marca '1'\nBuscar por filtro - Marca '2'\nMostrar nombres de movimientos registrados - Marca '3'\nSalir - Marca '4'"))
        if (salir == 2){
            opcion = Number(prompt("Filtrar por nombre - Marca '1'\nFiltrar por ingresos/egresos mayores a - Marca '2'"))

            if(opcion == 1){
                opcion = prompt("¿Cuál es la palabra que deseas buscar?")
                
                registroEncontrado = registro.find(valor => valor.nombre == opcion)
                console.log(registroEncontrado)
            }
            else if(opcion == 2){
                opcion = Number(prompt("Ingreso/Egreso Mayor a: "))
                registroEncontrado = registro.filter(valor => valor.monto > opcion)

                console.log(registroEncontrado)
            }
            condicion = false
        }
        else if(salir == 3){
            registroEncontrado = registro.map(valor => valor.nombre)
            console.log(registroEncontrado)
            condicion = false
        }
        else if(salir == 4){
            condicion = false
        }
    }
}
console.log(registro)