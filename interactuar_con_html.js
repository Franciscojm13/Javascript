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

//alert("Ha agregado "+misProductos.length+" elemento(s) en el carrito. El precio total es: $"+precioTotal+" CLP. (iva incluido)");

console.log("Lista de productos agregados:");
misProductos.forEach((producto)=>{console.log(producto)});     //Mostramos en detalle cada producto agregado con su precio.

let listaCarrito=document.createElement("ul")   //creamos un nodo de lista desordenada

for(const producto of misProductos){                  //recorremos el arreglo para ir creando nuevos elementos
    let itemListaCarrito=document.createElement("li");     //creamos un li por cada objeto encontrado en el array
    itemListaCarrito.innerHTML=` ${producto.nombre} => $${producto.precio}`;       //por cada item se agrega su contenido en html
    listaCarrito.append(itemListaCarrito);                  //se establece que itemListaCarrito es elemento hijo de listaCarrito
}

let contenedorLista=document.getElementById("listaFinalCarrito");  //capturamos el elemento que será el padre de nuestra lista, en este caso es un div
contenedorLista.append(listaCarrito);                         //establecemos que listaCarrito es elemento hijo de contnedor Lista

let listaPrecioTotal=document.createElement("h4");  //por último creamos un nuevo elemento que mostrará el total del carrito
listaPrecioTotal.innerHTML=`Total mas iva (19%): $${precioTotal} CLP`;     //inyectamos su html interior
listaCarrito.append(listaPrecioTotal);                                      //lo hacemos hijo de su padre