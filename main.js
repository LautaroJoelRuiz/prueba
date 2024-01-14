// Bienvenidos a "En La Pera" Bebidas  


let mensajebienvenida = document.getElementById("saludo");
mensajebienvenida.innerHTML = "Bienvenidos a 'En La Pera' Bebidas"


////////////Esta parte tendria que convertirla utilizando el DOM pero no se como se hace ;(

// let nombre = document.getElementById("Ingrese su nombre")
// let usuario = prompt ("Ingrese su nombre y apellido").toLowerCase();
// while (usuario != "ESC") {
//     if (usuario) {
//         alert ("Bienvenido/a " + usuario)
//         break;
//     } else {
//         alert ("Ingrese un nombre y apellido válidos");
        
//     }
//     usuario = prompt ("Ingrese su nombre y apellido").toLowerCase();
//     }
    
let ofrecer = document.getElementById('ofrecer')
ofrecer.innerHTML = "Nos encantaria saber que clase de bebida le gustaria adquirir, esto es con lo que contamos en stock"; 

const bebidas = [
    { id: 1, nombre: "Fernet", precio:10000, marca: "Branca"},
    { id: 2, nombre: "Gancia", precio:8000, marca: "Gancia"},
    { id: 3, nombre: "Gin", precio:15000, marca:"Bombay Sapphire"},

];

let stock = document.getElementById ("stock") 

  bebidas.forEach((bebida) => {
  let div = document.createElement("div")
  div.innerHTML = `
    
    <h3>Id: ${bebida.id}</h3>
    <p>Nombre: ${bebida.nombre}</p>
    <b>$${bebida.precio}</b>
    <p> Marca:"${bebida.marca}"</p>
    
  `;

  stock.append(div);
});













