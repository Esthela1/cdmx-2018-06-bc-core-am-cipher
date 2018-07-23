//Establecer las funciones para cipher
//Objeto: Window cipher
window.cipher = {

  //Crear una funcion llamada cipher que cifre el texto ingresado//
  //Funcion dentro del objeto con arrow funcion
  cipher2: (texto2, offset) => {
    //Variable que guarda el recorrido 
    let cifrado = "";
    //el for recorrera las letras del texto a cifrar//
    for (var i = 0; i < texto2.length; i++) {

      // if (
      //   parseInt(texto[i]% 1 ===0) 
      //    //condicionar para no ingresar numeros//
      // )

      //Convierte el texto a mayusculas y busca su valor en ascii usando un offset le asignara un nuevo valor
      let ubicacionCesar = (texto2.toUpperCase().charCodeAt(i) - 65 + offset) % 26 + 65;
      //Convertir de ascii a letras
      let palabraCifrada = String.fromCharCode(ubicacionCesar);
      //reunir las letras cifradas para formar las palbras//
      cifrado += palabraCifrada;

    }
      return cifrado;
  },


  // Crear una funcion llamada decipher que descifre el texto ingresado //
  decipher: (descifrado, offset) => {
    let palDescifrado = "";
    //el for recorrera las letras del texto a descifrar de manera inversa//
    for (var j = 0; j < descifrado.length; j++) {

      //lo convertira a ascii y tomando un offset le asignara el nuevo valor y lo regresara
      let ubicacionDescifrado = (descifrado.charCodeAt(j) + 65 - offset) % 26 + 65;

      //Convertira el ascii en las letras asignadas
      let palabraDescifrada = String.fromCharCode(ubicacionDescifrado);

      //reunir las letras descifradas//
      palDescifrado += palabraDescifrada;
    }
      return palDescifrado;
  }
    
};
