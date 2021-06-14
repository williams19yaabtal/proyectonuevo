// 1.- crear una condición mientras i sea menor a 7
// 2.- dentro del bucle while crear una variable llamada incrementar que sea igual y llamar la función prompt para capturar el valor, mostrando el titulo "Dime si continuo" y que lleve un valor "si" en la caja de texto
// 3.- Generar un incrementador para la variable i
// crear una sentencia "if" si incrementar es igual a "no" generar la instrucción "continue"

var i = 0;
var incrementar;

while (i<7) {
    incrementar = prompt ("Dime si continuo", "si");
    document.write(i);
    i++;
    if (incrementar == "no"){
        continue;
    }
}