//Variables Globales:

let foto = 0;                  //Contador de fotos agragadas
let collage = 0;                //Contador de collages agregados

let precioCollage = 15000;
let precioFoto = 7000;

let precioTotal = 0;

const iva = 1.19;     //iva 19%

const misProductos=[];

class Producto{                       //Clase constructora de producto
    constructor(nombre, precio){
        this.nombre=nombre;
        this.precio=precio;
    }
}

function PrecioTotal(collage, foto){             //funcion calculadora de precio total (iva incluido)
    precioTotal=((collage*precioCollage)+(foto*precioFoto))*1.19;
    console.log("El precio total mas iva es: $"+precioTotal+" CLP");
}

alert("Bienvenido a mi tienda virtual! A continuación seleccione que producto quiere agregar al carrito de compras. (Presione aceptar para continuar)");

let eleccion = prompt("Ingrese la letra del producto que quiere agregar al carrito: Collage (a), Fotografía (b). Para salir presione 's'");

while(eleccion != "s"){

    switch(eleccion){

        case "a":
            misProductos.push(new Producto("Collage", precioCollage));
            collage=collage+1;
            console.log("Se ha agregado 1 collage al carrito. El carrito actualmente contiene: "+collage+ " collages y "+foto+" fotografias")
            PrecioTotal(collage, foto);
            eleccion=prompt("Ingrese mas productos: Collage (a), Fotografía (b). Para salir presione 's'. \n\nMonto total actualizado: $"+precioTotal+" CLP.");
            continue;

        case "b":
            misProductos.push(new Producto("Foto", precioFoto));
            foto=foto+1;
            console.log("Se ha agregado 1 fotografía al carrito. El carrito actualmente contiene: "+collage+ " collages y "+foto+" fotografias");
            PrecioTotal(collage, foto);
            eleccion=prompt("Ingrese mas productos: Collage (a), Fotografía (b). Para salir presione 's'. \n\nMonto total actualizado: $"+precioTotal+" CLP.");
            continue;

        default:
            eleccion=prompt("Por favor ingrese un valor válido: Collage (a), Fotografía (b). Para salir presione 's' \n\nMonto total actualizado: $"+precioTotal+ "CLP.");

    }
}

console.log("Ha agregado "+misProductos.length+" elemento(s) en el carrito. El precio total es: $"+precioTotal+" CLP. (iva incluido)");

alert("Ha agregado "+misProductos.length+" elemento(s) en el carrito. El precio total es: $"+precioTotal+" CLP. (iva incluido)");

console.log("Lista de productos agregados:");
misProductos.forEach((producto)=>console.log(producto));     //Mostramos en detalle cada producto agregado con su precio

