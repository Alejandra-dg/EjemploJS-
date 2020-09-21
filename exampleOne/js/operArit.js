function sumar()
{
    // recibir los datos 
    let numeroU = parseInt(document.getElementById("nUno").value);
    let numeroD = parseInt(document.getElementById("nDos").Value);
    // procesar los datos 
    let resultado = parseInt(numeroU + numeroD)
    // entregar los resultados 
    document.getElementById("resulOperacion").innerHTML = resultado;
}

function multiplicar()
{
    // recibir los datos 
    let numeroU = parseInt(document.getElementById("nUno").value);
    let numeroD = parseInt(document.getElementById("nDos").Value);
    // procesar los datos 
   let resultado = parseInt(numeroU * numeroD)
    // entregar los resultados 
   document.getElementById("resulOperacion").innerHTML = resultado;
}
function AreaTriangulo() 
{
//Calcular Area Triangulo
    let base = parseInt(document.getElementById("base").value);
    let altura = parseInt(document.getElementById("altura").value);
    let Resultado;

    Resultado = parseInt(base + altura)/2;
    document.getElementById("resulAreaTriangulo").innerHTML = Resultado;

}
function AreaCriculo()
{
//calcular area circulo

    let radio = parseInt(document.getElementById("radio").value);
    let Resultado;

    Resultado = parseInt(Math.PI * radio * radio); 
   document.getElementById("resulAreaCirculo").innerHTML = Resultado;

}
   
