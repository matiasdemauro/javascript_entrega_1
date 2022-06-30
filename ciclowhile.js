//Se pide un usuario y se lo saluda. El usuario no puede ser vacío.
let usuario = prompt("Ingrese su usuario , tipee ESC para salir. ");
    if (usuario != "") {
        while (usuario != "ESC"){
            alert("Bienvenido a Gianne Homme&Deco: " + usuario);
            usuario = prompt ("Ingrese usuario o ESC para salir");
            if (usuario == "") {
                alert("Error. Usuario no valido");
                break;
            } 
    
            }
            
        }
        else{
            alert("Error. Usuario no válido")
        }
