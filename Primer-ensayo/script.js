document.getElementById('comenzarBtn').addEventListener('click', function() {
});

function navegarSiguientePagina2() {
    window.location.href = 'pagina2.html';
}

function navegarPaginaAnterior() {
    window.history.back();
}

function navegarSiguientePagina3() {
    window.location.href = 'pagina3.html';
}
function navegarSiguientePagina4() {
    window.location.href = 'pagina4.html';
}

function navegarSiguientePagina5() {
    window.location.href = 'pagina5.html';
}
function navegarSiguientePagina6() {
    window.location.href = 'pagina6.html';
}
function navegarSiguientePagina7() {
    window.location.href = 'pagina7.html';}

function enviarRespuesta() {

    const nombreApellido = document.getElementById('nombreApellido').value;
    const codigoArea = document.getElementById('codigoArea').value;
    const numeroTelefono = document.getElementById('numeroTelefono').value;

    console.log('Nombre y Apellido:', nombreApellido);
    console.log('Número de teléfono:', codigoArea + numeroTelefono);
}
    
function navegarSiguientePagina8() {
    window.location.href = 'pagina8.html';}

