

// Nombre del gasto
// Tipo (Ingreso / Egreso)
// Monto gastado

let nombreDeGasto = ""
let tipoDeGasto = ""
let montoDeGasto = 0
let salir

let condicion = true

while(condicion){
    nombreDeGasto = prompt("Ingrese el nombre del gasto")
    tipoDeGasto = prompt("Ingrese el tipo de gasto (ingreso/egreso)")
    montoDeGasto = Number(prompt("Ingrese el monto del gasto"))

    if(nombreDeGasto == "" || tipoDeGasto == "" || montoDeGasto <= 0){
        alert("Error al registrar datos")
    }
    else{
        alert("Se registro exitosamente...")
        alert(`Nombre de gasto: ${nombreDeGasto}\nTipo de gasto: ${tipoDeGasto}\nMonto: ${montoDeGasto}`)
        
        salir = Number(prompt("¿Desea registrar nuevamente? \nMarca 1 'Si'\nMarca 2 'No'\nAdelante: "))
        if(salir == 2){
            condicion = false
        }
    }
}