// No cambies los nombres de las funciones.

function devolverPrimerElemento(array) {
  // Devuelve el primer elemento de un  array (pasado por parametro)
  // Tu código:
  return array[0];
}


function devolverUltimoElemento(array) {
  // Devuelve el último elemento de un array
  // Tu código:
  return array[array.length-1];
}


function obtenerLargoDelArray(array) {
  // Devuelve el largo de un array
  // Tu código:
  return array.length;
}


function incrementarPorUno(array) {
  // "array" debe ser una matriz de enteros (int/integers)
  // Aumenta cada entero por 1
  // y devuelve el array
  // Tu código:
  let aux = [];
      for (let i = 0; i < array.length; i++) {
        aux.push(array[i] + 1)
      }
      return aux;
    }

 function agregarItemAlFinalDelArray(array, elemento) {
      // Añade el "elemento" al final del array
      // y devuelve el array
      // Tu código:
      array.push(elemento);
      return array;
    }


function agregarItemAlComienzoDelArray(array, elemento) {
  // Añade el "elemento" al comienzo del array
  // y devuelve el array
  // Pista: usa el método `.unshift`
  // Tu código:
  array.unshift(elemento);
      return array;
}


function dePalabrasAFrase(palabras) {
  // "palabras" es un array de strings/cadenas
  // Devuelve un string donde todas las palabras estén concatenadas con espacios entre cada palabra
  // Ejemplo: ['Hello', 'world!'] -> 'Hello world!'
  // Tu código:

  return palabras.join(" ");

}


function arrayContiene(array, elemento) {
  // Comprueba si el elemento existe dentro de "array"
  // Devuelve "true" si está, o "false" si no está
  // Tu código:
  
return array.includes(elemento); // el metodo devuelve true o false si se cumple o no

}


function agregarNumeros(numeros) {
  // "numeros" debe ser un arreglo de enteros (int/integers)
  // Suma todos los enteros y devuelve el valor
  // Tu código:
  let sum = 0  // ! inicializar sum en 0 
  numeros.forEach(element => {
    sum = sum + element // sino inicilializo en 0, no va a saber qué sumar la primera vez que deba hacer sum + element
  });
  return sum;

  
  /*  TAMBIEN
  let i = 0
  let suma = 0
  while (i < numeros.length) {
      suma = suma + numeros[i];
      i++;
  }
  return suma

  */  
}


function promedioResultadosTest(resultadosTest) {
  // "resultadosTest" debe ser una matriz de enteros (int/integers)
  // Itera (en un bucle) los elementos del array, calcula y devuelve el promedio de puntajes
  // Tu código:

let sum = 0  
resultadosTest.forEach(element => {
    sum = sum + element 
  });
  return sum/resultadosTest.length;
// pide que sean numeros enteros, y al dividir, puede resultar un float (decimal). 
// Entonces se puede hacer Math.ceil (suma /resultadosTest.length )
// Math.ceil () = redondea para arriba
}


function numeroMasGrande(numeros) {
  // "numeros" debe ser una matriz de enteros (int/integers)
  // Devuelve el número más grande
  // Tu código:

      let masGrande = numeros[0]  // le asigno el numero en la posicion [0] // const listaNum = [-11, -2, -3, -4] no funcionaria, si le asigno un num a masGrande
 
      for (let i = 1; i < numeros.length; i++){// empieza en posicion [1]; por que ya tengo el valor de numeros.[0], se compararia a si mismo
        if (numeros[i] > masGrande) {
          masGrande = numeros[i]
        }}
      return masGrande; // el return debe ir afuera del if,sino lo devuelve y termina (deja de ciclar)
    }


function multiplicarArgumentos() {
  // Usa la palabra clave `arguments` para multiplicar todos los argumentos y devolver el producto
  // Si no se pasan argumentos devuelve 0. Si se pasa un argumento, simplemente devuélvelo
  // Escribe tu código aquí:

  // chequeo si arguments.length es 0. Si es 0 return 0,
  // if (arguments.length === 0) {return 0}
  // chequeo si arguments.length es 1. si es 1 return arguments[0]
  // if (arguments.length === 1) return arguments[0];
  // si lo anterior no se cumple: multiplicar todos los argumentos y devolver el rproducto

    if (arguments.length === 0) { return 0 }
      else if (arguments.length === 1) { return arguments[0] }
      else {
        let producto = arguments[0]
        for (let i = 1; i < arguments.length; i++) {
          producto *= arguments[i]
        }
        return producto;
      }
    }


function cuentoElementos(arreglo){
  //Realiza una función que retorne la cantidad de los elementos del arreglo cuyo valor es mayor a 18.
  //Escribe tu código aquí


      let respuesta = arreglo.filter((elemento) => elemento > 18) // devuelve cada elemento mayor a 18

      return respuesta.length; // para saber la cantidad de elementos (mayores a 18)

      //---------------- respuesta de Franco ----------
      /* 
      var acumulador = 0;
      for (let i = 0; i< arreglo.length; i++) {
        if (arreglo[i] > 18) acc = acc + 1;
      }
      return acumulador;
      */

    }


function diaDeLaSemana(numeroDeDia) {
  //Suponga que los días de la semana se codifican como 1 = Domingo, 2 = Lunes y así sucesivamente. 
  //Realiza una función que dado el número del día de la semana, retorne: Es fin de semana
  //si el día corresponde a Sábado o Domingo y “Es dia Laboral” en caso contrario. 
  //Escribe tu código aquí   

  let dia = (numeroDeDia > 1 && numeroDeDia < 7 )? 'Es dia Laboral' : "Es fin de semana";
 
  return dia;



/* Aplicar esto en caso que deba devolver el valor por cada elemento de un array:

  let dia = numeroDeDia.map((elemento) => {(elemento > 1 && elemento < 7) ? 'Es dia Laboral' : "Es fin de semana"});
      return dia; 

      */

      /*---------------- respuesta de Franco ----------
      switch(numeroDeDia) {
        case 1:
        case 7:
        return "Es fin de semana" // no pongo break, porque antes hay un return, el break no se ejecutaria
        

        case 2:
        case 3:
        case 4:
        case 5:
        case 6:
        return 'Es dia Laboral'
        
        default: 
        break;
      }






      */

} 


function empiezaConNueve(n) {
  //Desarrolle una función que recibe como parámetro un número entero n. Debe retornar true si el entero 
  //inicia con 9 y false en otro caso.
  //Escribe tu código aquí

  // recibe n
  // return true : si inicia con 9
  // return false : else

   let cadena = n.toString();
   
   return cadena[0] == 9;

   // tambien: return n.toString()[0] == 9

/*  let resultado = (cadena[0] == 9) ? true : false;  // no uso ===  porque 9 es string,no es estricto
      return resultado;  
*/
}


function todosIguales(arreglo) {
  //Escriba la función todosIguales, que indique si todos los elementos de un arreglo son iguales:
  //retornar true, caso contrario retornar false.
  //Escribe tu código aquí  

  // return true: si todos los elementos son iguales
  // else, return false

let esIgual = arreglo[0] // en esta variable guardo el primer valor, y lo voy a comparar en el bucle

  for (let i = 1; i < arreglo.length; i++) {
    if (esIgual === arreglo[i]) {esIgual = arreglo[i]}
  };
  if (esIgual === arreglo[ arreglo.length -1]) {return true} else return false
  

  /*---------------- respuesta de Franco ----------
    for (let i = 0; i < arreglo.length; i++) {
    if (esIgual !== arreglo[i]) return false;
    }
    return true;
  }
  */
} 


function mesesDelAño(array) {
  //Dado un array que contiene algunos meses del año desordenados, recorrer el array buscando los meses de 
  // "Enero", "Marzo" y "Noviembre", guardarlo en nuevo array y retornarlo.
  //Si alguno de los meses no está, devolver: "No se encontraron los meses pedidos"
  // Tu código:

  let respuesta = array.filter((elemento) => (elemento === "Enero" || elemento === "Marzo" || elemento === "Noviembre") )

if (respuesta.includes("Enero" || "Marzo" || "Noviembre") !== true){ return "No se encontraron los meses pedidos" } else return respuesta


/*---------------- respuesta de Franco ----------

  let miArray = []
    for (let i = 0; i < array.length; i++) {
    if (array[i]=== "Enero" || array[i] === "Marzo" || array[i] === "Noviembre") miArray.push(array[i])
  }
  if (miArray.length !== 3 ) { return "No se encontraron los meses pedidos" }

  return miArray;
  */



}


function mayorACien(array) {
  //La función recibe un array con enteros entre 0 y 200. Recorrer el array y guardar en un nuevo array sólo los valores mayores a 100 (no incluye el 100). Finalmente devolver el nuevo array.

  // Tu código:

  let mayorCien = []

  for (let i = 0; i < array.length; i++){
    if (array[i] > 100) { mayorCien.push(array[i]) }
  }
  return mayorCien

}


function breakStatement(numero) {
  //Iterar en un bucle aumentando en 2 el numero recibido hasta un límite de 10 veces.
  //Guardar cada nuevo valor en un array. 
  //Devolver el array 
  //Si en algún momento el valor de la suma y la cantidad de iteraciones coinciden, debe interrumpirse la ejecución y 
  //devolver: "Se interrumpió la ejecución"
  //Pista: usá el statement 'break'
  // Tu código:

let arreglo = [];
let acumulador = numero;
let j = 0;

for (let i = 0; i < 10; i++) {   // arranca en 0, de 0 a 9, son 10 iteraciones
 j = i
  if (i === acumulador) break;

  acumulador = acumulador + 2;

  arreglo.push(acumulador)

}
 if (j === acumulador) {return "Se interrumpió la ejecución"};
return arreglo;

}

/*
   
      function comprobarBreak() {
        let i = 0;
        while (i < 10) {
          arreglo.push(numero)
          console.log(arreglo)
          if (i === arreglo[i])
            break;
          i + 2;
        }
        return "Se interrumpió la ejecución"
      }
      if (comprobarBreak() !== "Se interrumpió la ejecución") { return arreglo }
      */
  



function continueStatement(numero) {
  //Iterar en un bucle aumentando en 2 el numero recibido hasta un límite de 10 veces.
  //Guardar cada nuevo valor en un array.    
  //Devolver el array
  //Cuando el número de iteraciones alcance el valor 5, no se suma en ese caso y se continua con la siguiente iteración
  //Pista: usá el statement 'continue'
  // Tu código:


 // iterar un bucle (hasta 10 veces)
 // en cada iteracion, aumentar en 2 el numero recibido (suma = numero +2)
 // ese nuevo valor (suma), guardarlo en un array
 // devolver el array
 // (si num iteraciones === 5) no sumar en ese caso, continuar a la siguiente.

 let array = []
 let suma = numero

 for ( i = 1; i < 11 ; i ++){  // i empieza en 1, y se compara con 11, porque asi son 5 iteraciones [1][2][3][4][5]

  if (i === 5) {continue}; // si i = 0; i< 10 (entonces 5 iteraciones serian cuando i === 4) [0][1][2][3][4]

 suma = suma + 2;     // Numero cambia, con cada iteracion, sumandose en dos. (si pongo numero +2, y no suma + 2, entonces no cambia, es la misma entrada siempre)

array.push(suma); // si pongo directo array.push (numero + 2) ; devuelve siempre el primero numero + 2. 

 }
 return array;

}


// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  devolverPrimerElemento,
  devolverUltimoElemento,
  obtenerLargoDelArray,
  incrementarPorUno,
  agregarItemAlFinalDelArray,
  agregarItemAlComienzoDelArray,
  dePalabrasAFrase,
  arrayContiene,
  agregarNumeros,
  promedioResultadosTest,
  numeroMasGrande,
  multiplicarArgumentos,
  cuentoElementos,
  diaDeLaSemana,
  empiezaConNueve,
  todosIguales,
  mesesDelAño,
  mayorACien,
  breakStatement,
  continueStatement
};
