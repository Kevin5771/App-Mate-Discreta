const matrix1 = [];
const matrix2 = [];

const elementos1 = document.getElementById("element1");
const elementos2 = document.getElementById("element2");
const boton = document.querySelector("#boton");
const boton2 = document.querySelector("#ejemplo");
const mostrar = document.querySelector("#mostrar");
const resetear = document.querySelector("#reset");

resetear.addEventListener("click", function(){
    mostrar.textContent = "";
});


boton2.addEventListener("click", function(){
   mostrar.textContent = "AB=[0,1,2,3,4,5,6,7,8,9,A,B,C,D,E,F]";
});


boton.addEventListener("click", function () {
    matrix1.length = 0; 
    matrix2.length = 0;

    for (let x = 0; x < elementos1.value; x++) {
        const elementoprincipal = prompt("Ingresa el contenido 1");
        matrix1.push(elementoprincipal);
    }

    for (let j = 0; j < elementos2.value; j++) {
        const elementoprincipal = prompt("Ingresa el Contenido 2");
        matrix2.push(elementoprincipal);
    }

    const matrizresultado = [...new Set([...matrix1, ...matrix2])];

    mostrar.textContent = matrizresultado;
});



