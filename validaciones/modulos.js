export const validarText = (event) => {
  let letra = event.key;
  const regexTexto = /^[a-zA-Z]+$/;
  if (!regexTexto.test(letra)) {
    event.preventDefault();
  }
};

export const validarNum = (event) => {
  const letra = event.key;
  // Permitir teclas especiales
  const teclasPermitir = [
    "Backspace",
    "ArrowLeft",
    "ArrowRight",
    "Delete",
    "Tab",
  ];
  if (teclasPermitir.includes(letra)) return; 
  const regexNumeros = /^[0-9]$/;
  // Solo números del 0 al 9
  if (!regexNumeros.test(letra)) {
    event.preventDefault();
  }
};
export const validarContaseña = (event) => {
  let letra = event.key;
  const regexContra = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).+$/;
  const teclasPermitir = [
    "Backspace",
    "ArrowLeft",
    "ArrowRight",
    "Delete",
    "Tab",
  ];
  if (teclasPermitir.includes(letra)) return;
  if (regexContra.test(letra)) {
    alert("contraseña valida");
  }
};
export const campo = (event) => {
  if (event.target.value !== "") {
    event.target.classList.remove("input__border");
    if (event.target.nextElementSibling) {
      event.target.nextElementSibling.remove();
    }
  }
};

// validacion del formulario usuarios
export const validarForm = (e) => {
  e.preventDefault();
  // se crea el objeto el cual almacenara la informacion del usuario
  const datosUsuario = {};

  const campos = [...e.target].filter((hijos) => {
    return hijos.hasAttribute("required");
  });

  const radio = [...campos].filter((elementos) => {
    return elementos.type === "radio";
  });
  const campo__radio = radio.find((radio) => radio.checked) || [];
  //
  if (campo__radio.length == 0) {
    datosUsuario[radio[0].name] = "";
  } else {
    datosUsuario[campo__radio.name] = campo__radio.value;
  }
  const checkbox = [...campos].filter(
    (elemento) => elemento.type == "checkbox"
  );
  //
  const campo__checkbox = checkbox.filter((e) => e.checked);
  //
  if (campo__checkbox.length < 3) {
    datosUsuario[[0].name] == "";
  } else {
    datosUsuario[checkbox[0].name] = [...campo__checkbox].map((e) => e.value);
  }

  
  campos.forEach((dato) => {
    switch (dato.tagName) {
      case "input":
        if (campo.value == "") {
          campo.classList.add("input__border");
          let span = document.createElement("span");
          span.classList.add("span");
          span.textContent = "llenar el campo se encuentra vacio  ";
          campo.insertAdjacentElement("afterend", span);
        } else {
          datosUsuario[dato.name] = dato.value;
        }
        break;
      
      case "select":
        if (campo.selectedIndex == 0) {
          campo.classList.add("input__border");
          let span = document.createElement("span");
          span.classList.add("span");
          span.textContent = "llenar el campo se encuentra vacio  ";
          campo.insertAdjacentElement("afterend", span);
        }
        break;
    }
   
  });
  console.log(datosUsuario);
  
}