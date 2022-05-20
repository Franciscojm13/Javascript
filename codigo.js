


alert("Bienvenido! A continuación escriba los nombres de quienes conformarán su equipo de trabajo");

let companieroEquipo=prompt("Escriba nombre de compañero de equipo. (esc para salir)");

let companieroLista = "";

while(companieroEquipo != "esc"){

    console.log("Compañero ingresado: "+companieroEquipo)
    
    companieroLista = companieroLista + companieroEquipo + ", ";

    companieroEquipo = prompt("Escriba otro compañero (esc para salir)")
}

alert("Su equipo está conformado por: "+companieroLista)