let array = ["Primero", "Segundo", "Tercero", "Cuarto", "Soy el último elemento"]; 

array.splice(4, 0, "Quinto", "Sexto")

for (let i = 0; i < array.lenght; i++) {
    console.log(i + array[i]);
}

console.log(array)