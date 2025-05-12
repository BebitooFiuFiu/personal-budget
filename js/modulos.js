let registro = []

class Registro{
    constructor(nombre, tipo, monto){
        this.nombre = nombre
        this.tipo = tipo
        this.monto = monto
    }
    mostrarTodos(){
        return `Nombre: ${this.nombre} Tipo: ${this.tipo} Monto: ${this.monto}`
    }
}

export const agregarRegistro = (nombreDeGasto, tipoDeGasto, montoDeGasto) => {
    const nuevoRegistro = new Registro(nombreDeGasto, tipoDeGasto, montoDeGasto)
    registro.push(nuevoRegistro)
}

export const buscarNombre = (opcion) => {
    let registroEncontrado = registro.find(valor => valor.nombre == opcion)
    return registroEncontrado
}

export const mayorA = (opcion) => {
    let registroEncontrado = registro.filter(valor => valor.monto > opcion)
    console.log(registroEncontrado)
}

export const editar = (opcion, monto) => {
    registro = registro.map((valor) => {
        if(valor.nombre == opcion){
            valor.monto = monto
        }
        return valor
    })
}

export const mostrarTodo = () => {
    let registroEncontrado = registro.map(valor => valor.mostrarTodos())
    console.log(`Cantidad de Elementos registrados ${registroEncontrado.length}`)
    console.log(registroEncontrado)
}