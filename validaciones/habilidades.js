document.getElementById("btn_validar").addEventListener("click", function (e) {
  e.preventDefault(); // Evita que el formulario se envíe

  // Elimina mensajes de error previos
  document.querySelectorAll(".span").forEach((el) => el.remove());
  document.querySelectorAll(".checkbox__lenguaje").forEach((el) => el.classList.remove("input__border"));

  const checkboxes = document.querySelectorAll(".checkbox__lenguaje");
  const datosUsuario = {};
  let algunoMarcado = false;

  checkboxes.forEach((checkbox) => {
    if (checkbox.checked) {
      algunoMarcado = true;
      if (!datosUsuario[checkbox.name]) datosUsuario[checkbox.name] = [];
      datosUsuario[checkbox.name].push(checkbox.value);
    }
  });

  if (!algunoMarcado) {
    // Insertar mensaje después del contenedor completo de checkboxes
    const contenedor = document.querySelector(".content__check");

    const span = document.createElement("span");
    span.classList.add("span");
    span.textContent = `Debes seleccionar al menos un lenguaje`;

    contenedor.insertAdjacentElement("afterend", span);
  } else {
    console.log("Datos válidos:", datosUsuario);
    // Aquí puedes enviar el formulario si todo es válido
   
  }
});