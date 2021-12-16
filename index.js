//JQuery, Tarea clase 11

const tarjeta = document.querySelector("tarjeta")
btnAbrirFormulario = document.querySelector("#btn-abrir-formulario");

tarjeta.addEventListener("click", () => {
  tarjeta.classList.toogle("active");
});

btnAbrirFormulario.addEventListener("click", () => {
  btnAbrirFormulario.classList.toogle("active");
})

/*$("#btn-abrir-formulario").click(function ()=> {
  
})

$("#btn-abrir-formulario").on("mouseenter", function () {
  console.log("mouse en el boton");
}
  
 $(".tarjeta").on("click", function () {
  console.log("click en el boton");
} 
  
  */

  







//body-inputs

/*$("body").prepend(`<input type="text"   class="inputsClass">
                   <input type="number" class="inputsClass">
                   

$(".inputsClass").change(function (e) { 
    console.log(e.target.value);
   
});/*


/*CSS
$("p").css("backgound-color", "red");
$("p:last").css("backgound-color", "orange");
$("a").css("backgound-color", "green");
  */