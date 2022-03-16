// Implementar el código aqui
let Estado = {
    form: document.querySelector("form"), // Obtenemos el formulario.
    height: document.querySelector("#height"), // Obtenemos el input de alto.
    weigth: document.querySelector("#weight"), // Obtenemos el input de peso.
    result: document.querySelector("#results"), // Obtenemos el lugar donde escribiremos los resultados.
    guide: "", // Sera una clase en funcion de si el imc es alto, medio o bajo.
    calculoDeIMC() {
        // Sacamos el alto y el peso de los inputs.
        let alto = this.height.value;
        let peso = this.weigth.value;

        // Comprobamos que la información no nos haya llegado vacia.
        if (alto == "" || alto == undefined || alto == null) {
            return;
        }

        if (peso == "" || alto == undefined || peso == null) {
            return;
        }

        // Hacemos el calculo del imc con la información proporcionada.
        const imc = (peso / ((alto * alto) / 10000)).toFixed(2);

        // Segun la tabla de datos y el imc, establecemos una clase como bajo, medio o alto para darle color.
        if (imc < 18.6) {
            console.log("flag1");
            this.guide = "bajo";
        } else if (imc >= 18.6 && imc <= 24.9) {
            console.log("flag2");
            this.guide = "medio";
        } else if (imc > 24.9) {
            console.log("flag3");
            this.guide = "alto";
        }

        // Establecemos la clase en result.
        this.result.classList.add(this.guide);

        // Mostramos el span de resultados.
        this.result.style.display = "block";
        // Cargamos la información en el span.
        this.result.innerHTML = imc;

    }
}
// Escuchar el evento 'submit'

Estado.form.addEventListener("submit", function (e) {
    // Cancelamos el evento de submit para que no nos eche de la pagina con el preventDefault
    e.preventDefault();    
    // Ejecutamos la funcion donde hacemos el calculo del imc y sus controles
    Estado.calculoDeIMC();
})

// Modificar el peso, si hay una coma se cambia por puntos.
Estado.weigth.addEventListener("input", function(){
    console.log("Salta");
    Estado.weigth.value = Estado.weigth.value.replaceAll(",",".");
})

// Modificar la altura, si hay una coma se cambia por puntos.
Estado.height.addEventListener("input", function(){
    console.log("Salta");
    Estado.height.value = Estado.height.value.replaceAll(",",".");
})

// Escuchamos los cambios en el estado del input #heigth para determinar si la informacion es correcta y poner el validador.
Estado.height.addEventListener("invalid", function () {
    // Establecemos un mensaje si los datos que nos lelgan no son validos
    if (this.validity.patternMismatch) {
        return this.setCustomValidity(`El alto es incorrecto, escribe un alto entre 140 y 210`);
    }
    return this.setCustomValidity(``);
});

// Escuchamos los cambios en el input #weigth para lo mismo.
Estado.weigth.addEventListener("invalid", function () {    
    // Establecemos un mensaje si los datos que nos lelgan no son validos
    if (this.validity.patternMismatch) {
        return this.setCustomValidity(`El peso es incorrecto, escribe un peso entre 30 y 300, puede contener decimales separados por punto`);
    }
    return this.setCustomValidity(``);
});