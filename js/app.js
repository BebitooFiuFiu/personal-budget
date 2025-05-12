import { agregarRegistro, mostrarTodo, buscarNombre, mayorA, editar } from "./modulos.js"


// Nombre del gasto
// Tipo (Ingreso / Egreso)
// Monto gastado

let nombreDeGasto = ""
let tipoDeGasto = ""
let montoDeGasto = 0


let opcion
let salir


let condicion = true


while(condicion){

    nombreDeGasto = prompt("Ingrese el nombre del gasto")
    tipoDeGasto = prompt("Ingrese el tipo de gasto (ingreso/egreso)")
    montoDeGasto = Number(prompt("Ingrese el monto del gasto"))

    if(nombreDeGasto == "" || tipoDeGasto == "" || montoDeGasto <= 0){
        console.log("Error al registrar datos")
    }
    else{
        agregarRegistro(nombreDeGasto, tipoDeGasto, montoDeGasto)

        salir = Number(prompt("¿Que desea hacer? \nRegistrar Nuevamente - Marca '1'\nBuscar por filtro - Marca '2'\nEditar monto de registro - Marca '3'\nMostrar nombres de movimientos registrados - Marca '4'\nSalir - Marca '5'"))
        if (salir == 2){
            opcion = Number(prompt("Filtrar por nombre - Marca '1'\nFiltrar por ingresos/egresos mayores a - Marca '2'"))

            if(opcion == 1){
                opcion = prompt("¿Cuál es la palabra que deseas buscar?")
                console.log(buscarNombre(opcion))
            }
            else if(opcion == 2){
                opcion = Number(prompt("Ingreso/Egreso Mayor a: "))
                mayorA(opcion)
            }
            condicion = false
        }
        else if(salir == 3){
            opcion = prompt("Indicar el nombre para editar el monto: ")
            if(buscarNombre(opcion)){
                let nuevoMonto = Number(prompt(`${opcion} su monto actual es de: ${buscarNombre(opcion).monto}\nNuevo Monto:`))
                editar(opcion, nuevoMonto)
                alert(`Elemento registrado con exito`)
                mostrarTodo()
            }
            else{
                console.log("NO HAY")
            }
            condicion = false
        }
        else if(salir == 4){
            mostrarTodo()
            condicion = false
        }
        else if(salir == 5){
            condicion = false
        }
    }
}