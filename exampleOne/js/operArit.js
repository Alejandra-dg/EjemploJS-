function sumar()
{
    // recibir los datos 
    let numeroU = parseInt(document.getElementById("nUno").value)
    let numeroD = parseInt(document.getElementById("nDos").Value)
    // procesar los datos 
    let resultado = parseInt(numeroU + numeroD)
    // entregar los resultados 
    document.getElementById("resulOperacion").innerHTML = resultado
}

function multiplicar()
{
    // recibir los datos 
    let numeroU = parseInt(document.getElementById("nUno").value)
    let numeroD = parseInt(document.getElementById("nDos").Value)
    // procesar los datos 
    let resultado = parseInt(numeroU * numeroD)
    // entregar los resultados 
   document.getElementById("resulOperacion").innerHTML = resultado
}
function areatriangulo() 
{
//Calcular Area Triangulo
    let altura = parseInt(document.getElementById("altura").value)
    let base = parseInt(document.getElementById("base").value)

    let resultado = parseInt(altura + base); 
   document.getElementById("resulOperacion").innerHTML = resultado

}
function areacirculo()
{
//calcular area circulo

    let ancho = parseInt(document.getElementById("ancho").value)
    let diametro = parseInt(document.getElementById("diametro").value)

    let resultado = parseInt(anchura * diametro); 
   document.getElementById("resulOperacion").innerHTML = resultado

}
   
