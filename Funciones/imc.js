// Formula del IMC es: imc = peso / altura ^2)

function imc(peso, altura) {
    return peso / (altura **2);
}

let imcCalculo = imc (77, 1.67) ;

console.log ("Tu IMC es de: " + imcCalculo)