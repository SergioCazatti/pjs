alert("Desafio complementario: Crear un algoritmo utilizando un ciclo.\n\n\nConsiste en ingresar dos números y \nelegir una operación matemática (+ - * /) tantas veces como se quiera.");

//Declaración de variables.
let numero1;
let numero2 = 0;
let operacion = "";
let resultado = 0;

// Ingreso del primer número.
do{
    numero1 = Number( prompt("Ingrese un PRIMER número: ") );
    if (isNaN(numero1)){ alert("se debe ingresar un valor numérico !!") 
    }
}while (isNaN(numero1))

// Ingreso del segundo número.
do{
    numero2 = Number( prompt("Ingrese un SEGUNDO número: ") );
    if (isNaN(numero2)){ alert("se debe ingresar un valor numérico !!") }
}while (isNaN(numero2))

// Ingreso del tipo de operación.
do{
    operacion = prompt("Ingrese una de las operaciones siguientes para aplicarla a los números ingresados anteriormente: \n\n+: Sumar \n-: Restar \n*: Multiplicar \n/: Dividir \n^: x^y \ns: Salir");
}while (operacion != "+" && operacion != "-" && operacion != "*" && operacion != "/" && operacion != "^" && operacion != "s" && operacion != "S")

// Reiteración de operaciones.
while ((operacion != "s") && (operacion != "S")){
    switch(operacion){
    case "+":
        resultado = numero1 + numero2;
        alert("La SUMA entre " + numero1 + " y " + numero2 + " es: " + resultado);
        break;
    case "-":
        resultado = numero1 - numero2;
        alert("La RESTA entre " + numero1 + " y " + numero2 + " es: " + resultado);
        break;
    case "*":
        resultado = numero1 * numero2;
        alert("La MULTIPLICACION entre " + numero1 + " y " + numero2 + " es: " + resultado);
        break;
    case "/":
        if (Number(numero1) < Number(numero2)){
            alert("No se puede dividir. El dividendo no puede ser menor al divisor !!");
        }
        else{
            resultado = numero1 / numero2;
            alert("La DIVISION entre " + numero1 + " y " + numero2 + " es: " + resultado);
        }
        break;
    case "^":
        for(let i = 1; i <= numero2; i++){
            if (i == 1){
                resultado = numero1;
            }
            else{
                resultado = numero1 * resultado;
            }
        }
        alert("El número " + numero1 + " elevado al " + numero2 + " es: " + resultado);
    }
    operacion = prompt("Ingrese una de las operaciones siguientes para aplicarla a los números ingresados anteriormente: \n\n+: Sumar \n-: Restar \n*: Multiplicar \n/: Dividir \n^: x^y \ns: Salir");
}
