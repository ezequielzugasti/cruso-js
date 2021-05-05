        //esto es un comentario corto
        /*comentario mas extenso*/

        //ingreso de nombres
        var nombre ="Ezequiel";
        var apellido = prompt("Ingrese su apellido"); //prompt significa que aparece un pop up pidiendo un dato
        var nombreCompleto = nombre + " " + apellido;
        alert ("El nombre completo del usuario es: " + nombreCompleto);
        console.log("El nombre completo del usuario es: " + nombreCompleto)

        //ingreso de edades
        let edad = 45;
        let edad2 = 34;
        const ANIO = 2021;
        //variable de salida
        let sumaEdades = edad + edad2 + ANIO;
        console.log("Las edades sumadas son igual a " + sumaEdades)
        //mostramos el dato
        alert("Las edades sumadas son igual a " + sumaEdades)
        
        //calculadora de suma
        let numeroUno = parseInt(prompt("ingrese el primer numero entero"));
        let numeroDos = parseInt(prompt("ingrese el segundo numero entero"));
        alert(numeroUno + numeroDos)