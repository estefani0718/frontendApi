document.getElementById("formulario-genero").addEventListener("submit", function (e) {
  e.preventDefault();

  // Seleccionamos todos los radios
  const radios = document.querySelectorAll('input[name="genero"]');
  const campoRadio = [...radios].find(radio => radio.checked);
  const primerRadio = radios[0];

  // Limpiar errores anteriores
  radios.forEach(radio => {
    radio.classList.remove("input__border");
  });

  if (primerRadio.nextElementSibling && primerRadio.nextElementSibling.classList.contains("span")) {
    primerRadio.nextElementSibling.remove();
  }

  // Validar si no se seleccionó ninguno
  if (!campoRadio) {
    // Agregar clase de error
    primerRadio.classList.add("input__border");

    // Crear mensaje de error
    const span = document.createElement("span");
    span.classList.add("span");
    span.textContent = "Debes seleccionar un género";

    // Insertarlo justo después del primer radio
    primerRadio.insertAdjacentElement("afterend", span);
    return;
  }

  // Si se seleccionó uno, puedes continuar con lo que sigue...
  console.log("Género seleccionado:", campoRadio.value);
});
