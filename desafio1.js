//Variables Globales:

let foto = 0;
let collage = 0;

let precioCollage = 15000;
let precioFoto = 7000;

let precioTotal = 0;
let cantidadTotal = 0;

const iva = 1.19;     //iva 19%

alert("Bienvenido a mi tienda virtual! A continuación seleccione que producto quiere agregar al carrito de compras. (Presione aceptar para continuar)");

let eleccion = prompt("Ingrese la letra del producto que quiere agregar al carrito: Collage (a), Fotografía (b). Para salir presione 's'");

while(eleccion != "s"){
    
    if(eleccion === "a"){

        collage=collage+1;
        console.log("Se ha agregado 1 collage al carrito. El carrito actualmente contiene: "+collage+ " collages y "+foto+" fotografias")
        Total(collage, foto);
        eleccion=prompt("Ingrese mas productos: Collage (a), Fotografía (b). Para salir presione 's'. \n\nMonto total actualizado: $"+precioTotal+" CLP.");
    }

    else if(eleccion === "b"){

        foto=foto+1;
        console.log("Se ha agregado 1 fotografía al carrito. El carrito actualmente contiene: "+collage+ " collages y "+foto+" fotografias");
        Total(collage, foto);
        eleccion=prompt("Ingrese mas productos: Collage (a), Fotografía (b). Para salir presione 's'. \n\nMonto total actualizado: $"+precioTotal+" CLP.");
    }

    else{
        
        eleccion=prompt("Por favor ingrese un valor válido: Collage (a), Fotografía (b). Para salir presione 's' \n\nMonto total actualizado: $"+precioTotal+ "CLP.")
    }
}

function Total(collage, foto){

    precioTotal=((collage*precioCollage)+(foto*precioFoto))*iva;
    console.log("El precio total mas iva es: $"+precioTotal+" CLP");

    cantidadTotal=collage+foto;
}

console.log("Ha agregado "+cantidadTotal+" elemento(s) en el carrito. El precio total es: $"+precioTotal+" CLP. (iva incluido)");

alert("Ha agregado "+cantidadTotal+" elemento(s) en el carrito. El precio total es: $"+precioTotal+" CLP. (iva incluido)");



