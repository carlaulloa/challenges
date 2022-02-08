/*
Ejercicio: Crear una función que reciba como parámetro un número entero positivo y retorne la cantidad de vacíos binarios de dicho numero y la longitud de los mismos y en caso de que no existan vacíos binarios devolver null. Dicho numero ingresado debe pertenecer al intervalo [1,647]

Ejemplo: el numero 9 tiene una representación en binario de 1001, este tiene un único vacío binario de longitud 2. El número 529 tiene representación binaria 1000010001 y contiene dos vacíos binarios: uno de longitud 4 y otro de longitud 3.El número 20 tiene representación binaria 10100 y contiene un vacío binario de longitud 1. El número 15 tiene representación binaria 1111 y
no tiene vacíos binarios. El número 32 tiene representación binaria 100000 y no tiene vacíos binarios.
*/
const num = 15;
const result = getBinaryEmpty(num);
console.log(num);
console.log(result);

function getBinaryEmpty(num) {
  if (num < 1 || num > 649) {
    throw Error('Invalid');
  }
  const result = getBinaryEmptyInternal(num, [], 0, false);
  return result.length > 0 ? result : null;
}

function getBinaryEmptyInternal(num, out, tmpCounter, startEmpty){
  if(num % 2 === 1) {
    if(tmpCounter > 0 && startEmpty) {
        out.push(tmpCounter);
    }
    startEmpty = true;
    tmpCounter = 0;
  } else {
    tmpCounter++;   
  }
  if(num === 1 || num === 0){
    return out;
  }
  return getBinaryEmptyInternal(Math.floor(num / 2), out, tmpCounter, startEmpty);
}

function getBinaryValue(num, binaryStr){
    if(num === 1 || num === 0){
        return (num % 2) + binaryStr;
    }
    return getBinaryValue(Math.floor(num / 2), (num % 2) + binaryStr);
}
