document.addEventListener("DOMContentLoaded", () => {
    const elementoAnio = document.getElementById("anio");

    if (elementoAnio) {
        elementoAnio.textContent = new Date().getFullYear();
    }
});
