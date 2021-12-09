const tarjeta = document.querySelector("tarjeta")
btnAbrirFormulario = document.querySelector("#btn-abrir-formulario");

tarjeta.addEventListener("click", () => {
  tarjeta.classList.toogle("active");
});

btnAbrirFormulario.addEventListener("click", () => {
  btnAbrirFormulario.classList.toogle("active");
})