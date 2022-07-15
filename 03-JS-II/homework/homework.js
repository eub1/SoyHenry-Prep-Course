

// ----------- MIS APUNTES --------------

/*
Si yo quiero que me devuela todos los numeros pares, de un ciclo de 1 a 100, entonces escribo:

function imprimePares(n) {
  for (var i = 1; i <=n); i++) {
    if (i % 2 === 0) {
      console.log(i);
    }
    if ( i > 30) {
      for(var j=0; j < 15 ; j+2) {
        console.log(j);
      }
 return;
    }
  }
}

Los for() se pueden anidar, se crea la var j porque ya existe la i.
*/
// BUCLE - TABLAS

// n filas
// m columnas

/* 
function matriz(n,m) {
  for(var i = 0; i < n; i++){
    for( var j = 0; j < m; j++){
      console.log(i + "," + j);
    }
  }
}

    0123

0   1234
1   5678
2   9123

ij
00
01
02
03
10
11
12

*/

// ---------- BUCLE WHILE ------------
/* 
while(condicion) {
  bloque de codigo
}

var i = 0;
while (i < 100) {
  console.log(i);
  i++;
}

// clave: al final incrementar i, porque sino se hace un bucle infinito de imprimir 0

Ejemplo matriz:

function otraMatriz (n,m) {
  var j = 0;
  var i = 0;
  while (i < n) {
    while (j < m) {
      console.log(i,j);
      j++;
    }
    j = 0;
    i++;
  }

}

 j = 0;  // porque sino termina antes el loop, j llega a 2 al toque y no sigue //


 bucles: entonces inicializar la variable (i =0, poner donde para ( i < n), y se pone el paso siguiente (i++))
*/



// ------Aca Empieza el homework---------

// No cambies los nombres de las funciones.

function obtenerMayor(x, y) {
  // "x" e "y" son números enteros (int).
  // Devuelve el número más grande
  // Si son iguales, devuelve cualquiera de los dos
  // Tu código:
  if (x >= y) {
    return x || y;
  }
  return y || x;

  /* --- solucion PROFE-----
  if( x === y) {
    return x;
  } else if (x > y) {
    return x;
  } else {
    return y;
  }

  --- alumno ---
  return Math.max(x, y);

  otro:
  return x > y ? x : y;
  otro:
  if (x > y) { return x} else { return y||x}
  */
}

function mayoriaDeEdad(edad) {
  //Determinar si la persona según su edad puede ingresar a un evento.
  //Si tiene 18 años ó más, devolver --> "Allowed"
  //Si es menor, devolver --> "Not allowed"
if (edad >= 18) {
  return "Allowed";
}
return "Not allowed";
}
  
function conection(status) {
  //Recibimos un estado de conexión de un usuario representado por un valor numérico. 
  //Cuando el estado es igual a 1, el usuario está "Online"
  //Cuando el estado es igual a 2, el usuario está "Away"
  //De lo contrario, presumimos que el usuario está "Offline"
  //Devolver el estado de conexión de usuario en cada uno de los casos.
if (status === 1) {
  return "Online";
} else if(status === 2){
    return "Away";
}
return "Offline";
}

function saludo(idioma) {
  // Devuelve un saludo en tres diferentes lenguajes:
  // Si "idioma" es "aleman", devuelve "Guten Tag!"
  // Si "idioma" es "mandarin", devuelve "Ni Hao!"
  // Si "idioma" es "ingles", devuelve "Hello!"
  // Si "idioma" no es ninguno de los anteiores o es `undefined` devuelve "Hola!"
  // Tu código:
switch (idioma) {
  case "aleman":
    return "Guten Tag!";
    break;
  case "mandarin":
    return "Ni Hao!";
    break;
  case "ingles":
    return "Hello!";
    break;
  default:
    return "Hola!";
    break;
}

}

function colors(color) {
  //La función recibe un color. Devolver el string correspondiente:
  //En caso que el color recibido sea "blue", devuleve --> "This is blue"
  //En caso que el color recibido sea "red", devuleve --> "This is red"
  //En caso que el color recibido sea "green", devuleve --> "This is green"
  //En caso que el color recibido sea "orange", devuleve --> "This is orange"
  //Caso default: devuelve --> "Color not found"
  //Usar el statement Switch.
switch (color) {
  case "blue":
    return "This is blue";
    break;
  case "red":
    return "This is red";
    break;
  case "green":
    return "This is green";
    break;
  case "orange":
    return "This is orange";
    break;
  default:
    return "Color not found";
    break;
}
} // el profe no usa los breaks, dice que el return solo hace el salto, finaliza con el return si se cumple el caso

function esDiezOCinco(numero) {
  // Devuelve "true" si "numero" es 10 o 5
  // De lo contrario, devuelve "false"
  // Tu código:
  if (numero === 10 || numero === 5) {
    return true;
  }
  return false;
}

function estaEnRango(numero) {
  // Devuelve "true" si "numero" es menor que 50 y mayor que 20
  // De lo contrario, devuelve "false"
  // Tu código:
   if (numero < 50 && numero > 20) {
    return true;
  }
  return false;
}

function esEntero(numero) {
  // Devuelve "true" si "numero" es un entero (int/integer)
  // Ejemplo: 0.8 -> false
  // Ejemplo: 1 -> true
  // Ejemplo: -10 -> true
  // De lo contrario, devuelve "false"
  // Pista: Puedes resolver esto usando `Math.floor`
 // if (numero !== Math.floor(numero)) {  (si es decimal, y lo esta redondeando, entonces no es integer)
 //   return false;
 // } else { return true; }
 // otro alumno: yo lo hice asi if(Math.floor(numero) || (numero % 2 === 0)) return true;
 // return false;
 // rta a otro alumno: ## Roberto, Math.floor(numero)  debería estar igualado a algo, o sea, xej: if ( Math.floor(numero) === numero || .... )  ....

  // Tu código:
if (numero !== Math.floor(numero)){
  return false;
}else return true;

}

function fizzBuzz(numero) {
  // Si "numero" es divisible entre 3, devuelve "fizz"
  // Si "numero" es divisible entre 5, devuelve "buzz"
  // Si "numero" es divisible entre 3 y 5 (ambos), devuelve "fizzbuzz"
  // De lo contrario, devuelve el numero

  if (numero % 5 === 0 && numero % 3 === 0 ){ // si pongo primero las otras condiciones, se cumplen y se corta ahi, entonces fizzbuzz va primero
    return "fizzbuzz";
  } else if (numero % 5 === 0) {
    return "buzz";
  } else if (numero % 3 === 0) {
    return "fizz";
  } 
  return numero;
}

function operadoresLogicos(num1, num2, num3) {
  //La función recibe tres números distintos. 
  //Si num1 es mayor a num2 y a num3 y además es positivo, retornar ---> "Número 1 es mayor y positivo"
  //Si alguno de los tres números es negativo, retornar ---> "Hay negativos"
  //Si num3 es más grande que num1 y num2, aumentar su valor en 1 y retornar el nuevo valor.
  //0 no es ni positivo ni negativo. Si alguno de los argumentos es 0, retornar "Error".
  //Si no se cumplen ninguna de las condiciones anteriores, retornar false. 

  if (num1 === 0 || num2 === 0 || num3 === 0) {   // empezar por la menos probable, porque sino se cumple la primer funcion y ya no sigue
    return "Error";  
  } else if (num1 < 0 || num2 < 0 || num3 < 0) { // lo mismo, tambien es menos probable que suceda.
    return "Hay negativos";
  } else if (num1 > num2 && num1 > num3 && num1 > 0) {
    return "Número 1 es mayor y positivo";
  } else if (num3 > num1 && num3 > num2){
    return ++num3;
  } else {
    return false;
  }
}

function esPrimo(numero) {
  // Devuelve "true" si "numero" es primo
  // De lo contrario devuelve "falso"
  // Pista: un número primo solo es divisible por sí mismo y por 1
  // Pista 2: Puedes resolverlo usando un bucle `for`
  // Nota: Los números 0 y 1 NO son considerados números primos

/*----  solucion clase ----

if (numero < 2) return false;  // esto por la nota de 0 y 1, ya descartamos
for ( let i = 2; i < numero; i++) {  // i=2 el num va a ser dividido entre dos
if (numero % i === 0) {
   return false;
  } else {return true;}
}

discriminan cualquier numero que no sea primo
*/

if (numero<2){return false}
for (let i = 2; i <= numero; i++){
  if(numero % i === 0){
    return false;
  } else return true;
};

}

function esVerdadero(valor){
  //Escribe una función que reciba un valor booleano y retorne “Soy verdadero” 
  //si su valor es true y “Soy falso” si su valor es false.
  //Escribe tu código aquí
if (valor) { // ya se asume que se ejecuta si es verdadero, porque valor es booleano
  return "Soy verdadero";
}
return "Soy falso";
}

function tablaDelSeis(){
  //Escribe una función que muestre la tabla de multiplicar del 6 (del 0 al 60).
  //La función devuelve un array con los resultados de la tabla de multiplicar del 6 en orden creciente.
  //Escribe tu código aquí   
let multiploSeis= []
for (let i=0; i <=10; i++) {
  
    multiploSeis.push(i*6);
  }
  return multiploSeis
}

 /*

  let tableSeis = []  // porque devuelve un array
  for (let i=0; i <= 10; i++) { // xq i <= 10? (para que llegue la operacion hasta multiplicar por 10)
   let tabla = 6 *i;
   tablaSeis.push(tabla);
  }
  return tablaSeis

   ---- otro alumno ----
  var tabla6 = [];
  for (var i = 0; i < 11; i++ ) {
    tabla6.push (i * 6); 
  } 
  return tabla6;
}
  */


function tieneTresDigitos(numero){
  //Leer un número entero y retornar true si tiene 3 dígitos. Caso contrario, retorna false.
  //Escribe tu código aquí

  /* --- otro alumno ---- 
numero >= 100 && numero < 1000

---- tambien ---
numero.length  (hay que llevar el numero.toString)
   */
  
if (numero > 99 && numero < 1000) { // establece que el numero tiene 3 digitos
return true;
}
return false
}

function doWhile(numero) {
  //Implementar una función tal que vaya aumentando el valor recibido en 5 hasta un límite de 8 veces
  //Retornar el valor final.
  //Usar el bucle do ... while.

let i= 0;
let j= numero;
do {
  i++;
  j +=5;
} while (i<8);

return j;
  /*  --- otro alumno ---
  var x = numero;
  var i = 0;
  do {
    i += 1;
    x += 5;    
  } while (i < 8);
  return x;
  
  */
 /*
  let i = 0;
  let aux = numero + 5;
  do {
    num = aux;  // declaramos nueva variable donde guardar el resultado
    i++
  } while(i<8)
  return num;
*/
}

// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  obtenerMayor,
  mayoriaDeEdad,
  conection,
  saludo,
  colors,
  esDiezOCinco,
  estaEnRango,
  esEntero,
  fizzBuzz,
  operadoresLogicos,
  esPrimo,
  esVerdadero,
  tablaDelSeis,
  tieneTresDigitos,
  doWhile
};
