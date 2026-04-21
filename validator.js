//funcion asincrona conectada a json data/data.json

async function validateForm(event){
    event.preventDefault();

    const respuesta = await fetch('data/data.json');
    const datos = await respuesta.json();

    usuarioInput = document.getElementById('usuario').value;
    contrasenaInput = document.getElementById('contrasena').value;

    if(usuarioInput === '' || contrasenaInput === ''){
        alert("Por favor llena todos los campos");
        return false;
    }

    const usuarioValido = datos.usuarios.find(usuario => usuario.usuario === usuarioInput && usuario.contrasena === contrasenaInput);
    
    if(usuarioValido){
        alert("Inicio de sesión exitoso");
        window.location.href ="home.html";
    }else{
        alert("Usuario o contrasena incorrectos");
    }

    return false;
}

/*
async function validadorForm(event){
    event.preventDefault(); // Evita el envío del formulario por defecto

    const respuesta = await fetch('data/data.json');
    const datos = await respuesta.json();

    const usuarioInput = document.getElementById('usuario').value;
    const contrasenaInput = document.getElementById('contrasena').value;

    const usuarioValido = datos.usuarios.find(usuario => usuario.usuario === usuarioInput && usuario.contrasena === contrasenaInput);
    
    if(usuarioValido){
        alert('inicio de sesión exitoso');
        window.location.href = 'home.html';
    }else{
        alert('usuario o contraseña incorrectos');
    }
}/*

/*
async function validateForm(event) {
    // 1. Evitamos que la página se recargue
    event.preventDefault();

    const usuarioInput = document.getElementById('usuario').value;
    const contrasenaInput = document.getElementById('contrasena').value;

    // Validación básica
    if (usuarioInput === '' || contrasenaInput === '') {
        alert('Por favor, complete todos los campos');
        return false;
    }

    try {
        // 2. Llamada al JSON
        const respuesta = await fetch('data/data.json');
        
        if (!respuesta.ok) {
            throw new Error("No se pudo cargar el archivo JSON");
        }

        const datos = await respuesta.json();

        // 3. Verificación (Asegúrate que en el JSON la propiedad sea "usuario")
        const usuarioValido = datos.usuarios.find(u => 
            u.usuario === usuarioInput && u.contrasena === contrasenaInput
        );

        if (usuarioValido) {
            alert('¡Inicio de sesión exitoso!');
            window.location.href = 'home.html';
        } else {
            alert('Usuario o contraseña incorrectos');
        }

    } catch (error) {
        console.error("Error:", error);
        alert("Hubo un error al conectar con la base de datos.");
    }

    return false;
}*/