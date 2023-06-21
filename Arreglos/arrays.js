let array = [1, "Maria", 26, true, "Pau", false, 20 ];

// Posición
    const pos = array [4];

    console.log("Esta es mi posición 4: " + pos);
    console.log ("ARRAY: " + array );

// Recorrer un arreglo

for (let i = 0; i < array.length; i++) {
    console.log ("Este es mi dato en la posición" + i + ": " + array [i])
}

array [3] = "Hola";
    console.log(array[3]);

    //el resultado de una lista de productos
    // cuando se busca un vuelo por fecha, te salen varios vuelos al tiempo, una lista de vuelos