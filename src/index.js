//Se establecen las variables para el cipher

//cifrado
//Invocacion de los elementos del DOM
let texto = document.getElementById("texto2");
let clave= document.getElementById("clave");
//Llamado de la funcion del oneclick
function cipherGo(){
    //Asignacion del valor a las textareas
    let texto2 = texto.value;
    let offset = parseInt(clave.value);
    console.log(offset);
//imprecion en pantalla
    document.getElementById("resultado").innerHTML = cipher.cipher2(texto2,offset);

};

//Decifrado
//Llamado de la funcion oneclick
function decipher(){
    //asignacion del valor de las texareas para decifrado
    let decifrado = texto.value;
    let offset = parseInt(clave.value);
//imprecion en pantalla 
document.getElementById("resultado").innerHTML = cipher.decipher(decifrado,offset);
};