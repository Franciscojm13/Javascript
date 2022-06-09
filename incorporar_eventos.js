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

const botonCollage = document.getElementById("productoCollage");
botonCollage.onmouseover=()=>{botonCollage.className="btn btn-success"};
botonCollage.onmouseout=()=>{botonCollage.className="btn btn-primary"};
botonCollage.onmousedown=()=>{botonCollage.clasName="btn btn-danger"};
botonCollage.onmouseup=()=>{botonCollage.clasName="btn btn-success"};
botonCollage.onclick=()=>{
    misProductos.push(new Producto("Collage", precioCollage));
    collage=collage+1;
    console.log("Se ha agregado 1 collage al carrito. El carrito actualmente contiene: "+collage+ " collages y "+foto+" fotografias")
    PrecioTotal(collage, foto);
}

const botonFoto = document.getElementById("productoFoto");
botonFoto.onmouseover=()=>{botonFoto.className="btn btn-success"};
botonFoto.onmouseout=()=>{botonFoto.className="btn btn-primary"};
botonFoto.onmousedown=()=>{botonFoto.clasName="btn btn-danger"};
botonFoto.onmouseup=()=>{botonFoto.clasName="btn btn-success"};
botonFoto.onclick=()=>{
    misProductos.push(new Producto("Foto", precioFoto));
    foto=foto+1;
    console.log("Se ha agregado 1 fotografía al carrito. El carrito actualmente contiene: "+collage+ " collages y "+foto+" fotografias");
    PrecioTotal(collage, foto);
}

let listaCarrito=document.createElement("ul")   //creamos un nodo de lista desordenada
let contenedorLista=document.getElementById("listaFinalCarrito");  //capturamos el elemento que será el padre de nuestra lista, en este caso es un div
contenedorLista.append(listaCarrito);                         //establecemos que listaCarrito es elemento hijo de contnedor Lista

const botonTotal=document.getElementById("botonTotal");
botonTotal.onclick=()=>{
        

    for(const producto of misProductos){                  //recorremos el arreglo 
        let itemListaCarrito=document.createElement("li");     //creamos un li por cada objeto encontrado en el array
        itemListaCarrito.innerHTML=` ${producto.nombre} => $${producto.precio}`;       //por cada item se agrega su contenido en html
        listaCarrito.append(itemListaCarrito);                  //se establece que itemListaCarrito es elemento hijo de listaCarrito
    }

    let total=document.createElement("h4");  //por último creamos un nuevo elemento que mostrará el total del carrito
    total.innerHTML=`Total mas iva (19%): $${precioTotal} CLP`;     //inyectamos su html interior
    contenedorLista.append(total);                                      //lo hacemos hijo de su padre
}




