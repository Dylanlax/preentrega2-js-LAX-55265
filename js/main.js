

/* function bienvenida(){
    let nombre = prompt("Ingrese su nombre")
    alert("Bienvenido a nuestro sitio " + nombre + "!")
}


bienvenida()

function edad(){
    let edad = prompt("Ingrese su edad")

        while (edad < 18) {
            alert("Usted necesita ser mayor a 18 años para poder ingresar");
            edad = prompt("Ingrese su edad nuevamente");
        }

    alert("usted cumple con la edad requerida para ingresar")
}

edad()


function descuentoGPU(){
    let aceptarOferta = confirm("Es usted usuario de Comprasxd? En caso de serlo cuenta con un descuento del 10%");
        if(aceptarOferta){
            alert("Contamos con una rtx1080ti a $9.000, con cuanto desea abonar?")
            return true // esto le dice al if de abajo si vuelve como true
    }else {
        alert("No se aplicara ningun descuento, el precio final de la rtx1080ti es $10.000")
        return false
    }
}





function calcularPrecio(precioOriginal, descuento){
    if(descuentoGPU()){
        let precioConDescuento = precioOriginal - (precioOriginal * descuento);
        return precioConDescuento

    }else {
        return precioOriginal
    }
}

let precio = calcularPrecio(10000, 0.10)

console.log("Precio final: " + precio)



function comprar1080ti(dinero){
    while(dinero <= precio){
        const dineroFaltante = precio - dinero;
        alert("dinero insuficiente, necesita $" + dineroFaltante + " más");
        dinero = prompt("Ingrese el monto a abonar nuevamente")
    
    }
    
    if(dinero>= precio) {
        const cambio = dinero - precio
        alert( "compra exitosa, su cambio es de $" + cambio)
        }
}

console.log(comprar1080ti(prompt("ingrese monto"))) */



const productos = [
    {nombre: "gtx1080ti", precio:10000},
    {nombre: "rtx3060ti", precio:15000},
    {nombre: "intel-i5", precio:12000},
    {nombre: "intel-i7", precio:15000},
]

let carrito = []

function pregunta(){
    let elegi = prompt("Desea ver que productos tenemos en stock? si o no");
        while(elegi != "si" && elegi != "no"){
            alert("por favor ingrese si o no")
            elegi = prompt("Desea ver que productos tenemos en stock? si o no");

        }
        if(elegi == "si"){
            alert("Poseemos en stock los siguientes productos:")
            let mostrarProductos = productos.map((producto) => producto.nombre + " " + producto.precio + "$")
            alert(mostrarProductos.join(" | "))
            return true
        }else if(elegi == "no"){
            alert("Gracias por visitarnos vuelva prontos")
        }
}



function agregarAlCarrito() {
    if(pregunta()){
        let buscador = prompt("ingrese el producto que desea comprar").trim()
        let resultado = productos.filter((producto) => producto.nombre.includes(buscador))
        if(resultado.length > 0){
            console.table(resultado)
        }
    }
    }

agregarAlCarrito()