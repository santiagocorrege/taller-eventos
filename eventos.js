
document.addEventListener('DOMContentLoaded', () => {

    document.getElementById("btn-saludar").addEventListener('click', (event) => {
        event.stopPropagation();
        alert('Hola!');
    });
    
    document.getElementById("contID").addEventListener('click', () => {
        alert("Hola soy el div");
    });
    
})