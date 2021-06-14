var sexo = "masculino";

if (sexo == "femenino"){
    document.write("Tu género es femenino <br>");
    for (a=1; a<=18; a++){
        if (a==18){
            document.write("tienes " + a + " años, ya eres mayor de edad <br>");
        }
    }
} else {
    document.write("Tu género es masculino <br>");
    for (a=1; a<=18; a++){
        if (a == 18){
            document.write("tienes " + a + " años, ya eres mayor de edad <br>");
            break;
        }
        if (a == 1){
            document.write("tienes " + a + " año, aún no eres mayor de edad <br>");
        }
        if (a > 1){
            document.write("tienes " + a + " años, aún no eres mayor de edad <br>");
        }
    }
}