
  document.getElementById("btn_validar").addEventListener("click", function (e) {
    e.preventDefault(); // Evita que el formulario se envíe

    const select = document.getElementById("ciudades");

    // Elimina mensaje de error anterior si existe
    const mensajeAnterior = document.querySelector("#mensaje-error-ciudad");
    if (mensajeAnterior) {
      mensajeAnterior.remove();
    }

    // Validar que no esté en "selecciona"
    if (select.selectedIndex === 0) {
      select.classList.add("input__border");

      const span = document.createElement("span");
      span.id = "mensaje-error-ciudad";
      span.className = "span";
      span.textContent = "Debes seleccionar una ciudad";

      // Insertar el span después del select
      select.insertAdjacentElement("afterend", span);
    } else {
      select.classList.remove("input__border");
      alert("Ciudad válida seleccionada");
    }
  });