
document.getElementById("cont-principal").addEventListener('click', () => {
    alert("Hola soy el div")
})

document.getElementById("btn-saludar").addEventListener('click', () => {
    event.stopPropagation(); // Detener la propagación del evento click del botón
    alert('Hola!');
})
