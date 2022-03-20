//Validación de un formulario
let submit = document.getElementById("btnRegistro");


submit.addEventListener("click",

(postCliente = async() => {
      
      let nombre = document.getElementById("formNombre").value;
      let apellido = document.getElementById("formApellido").value;
      let correo = document.getElementById("formCorreo").value;
      let cumpleaños = document.getElementById("formCumpleaños").value;        
      let edad = document.getElementById("formEdad").value;
      let contraseña = document.getElementById("formContraseña").value;
      let error = document.getElementById("error_message");
      let mensaje;
      //Comprobaciones del formulario
      if(correo.indexOf("@") == -1 || correo.length < 6){
        mensaje = "Por favor, ingrese una dirección de correo electrónico válida";
        error.innerHTML = mensaje;
        return false;
      } 
      if(contraseña < 8){
        mensaje = "La contraseña debe tener un mínimo de 8 caracteres";
        error.innerHTML = mensaje;
        return false;
      }
      alert("Su información ha sido enviada con éxito!");

      let request = await fetch("/usersPOST", {
          method : "POST",
          credentials: "same-origin", 
          headers: { 
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
              nombre : nombre,
              apellido : apellido,
              email : correo,
              cumpleaños : cumpleaños.toString(),
              edad : parseInt(edad),
              contraseña : contraseña,

          }),
          dataType: "json",
    });

  if(request.ok) {
      console.log("Petición realizada con éxito");
  }

  let get = await fetch("/usersGET", {
      method: "GET",
      credentials: "same-origin",
      dataType: "json",
    });

    if (get.ok) {
      var data = await get.json();

      let nombreCheck = data.nombre;
      let apellidoCheck = data.apellido;
      let emailCheck = data.email;
      let cumpleañosCheck = data.cumpleaños.toString();
      let edadCheck = data.edad;
      let contraseñaCheck = data.contraseña;
  
      document.getElementById("nombreCheck").innerHTML = nombreCheck;
      document.getElementById("apellidoCheck").innerHTML = apellidoCheck;
      document.getElementById("emailCheck").innerHTML = emailCheck;
      document.getElementById("cumpleañosCheck").innerHTML = cumpleañosCheck;
      document.getElementById("edadCheck").innerHTML = edadCheck;
      document.getElementById("contraseñaCheck").innerHTML = contraseñaCheck;
    }
  })
);

