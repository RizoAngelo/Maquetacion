function seleccionar(link){
    let links= document.querySelectorAll("header nav a");
    links[0].classnName="";
    links[1].classnName="";
    links[2].classnName="";
    links[3].classnName="";
    links[4].classnName="";
    links[5].classnName="";

    link.classnName="selected"

}
function iniciarSesion() {
    const usuariosValidos = [
{ nombre: "Angelo", contrasenia: "12345" },
{ nombre: "alejandro", contrasenia: "abcde" },
{ nombre: "messi", contrasenia: "ronaldo" },
];

    var usuario = document.getElementById("nombreUsuario").value;
    var contrasenia = document.getElementById("contrasenia").value;

    var usuariosRegistrados = localStorage.getItem("usuariosRegistrados");
    if (!usuariosRegistrados) {
        swal("¡Error!", "No hay usuarios registrados. Regístrate primero.", "error");
        return false;
    }

    usuariosRegistrados = JSON.parse(usuariosValidos);
    if (usuariosRegistrados.hasOwnProperty(usuario) && usuariosRegistrados[usuario] === contrasenia) {
        swal("¡Éxito!", "Inicio de sesión exitoso.", "success");
    } else {
        swal("¡Error!", "Nombre de usuario o contraseña incorrectos.", "error");
    }
    return false; 
}