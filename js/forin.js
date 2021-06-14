var nombre = "Williams";

var persona = {
    estatura: 1.75,
    edad: 30,
    colorojos: "verde",
}

for (var cuerpo in persona){
    document.write(cuerpo + " " + persona[cuerpo]);
    document.write("<br>");
}


