alert("hola") 
document.getElementById('registrationForm').addEventListener('submit', function(event) {

    event.preventDefault();

    // Obtener los valores de los campos del formulario
    var nombre = document.getElementById('nombre').value;
    var apellido = document.getElementById('apellido').value;
    var documento = document.getElementById('documento').value;
    var correo = document.getElementById('correo').value;
    var celular = document.getElementById('celular').value;
    var fecha = document.getElementById('fecha').value;

    // Mostrar los valores en la consola
    console.log('Nombre:', nombre);
    console.log('Apellido:', apellido);
    console.log('Documento:', documento);
    console.log('Correo:', correo);
    console.log('Celular:', celular);
    console.log('Fecha de la Exposición:', fecha);
});
