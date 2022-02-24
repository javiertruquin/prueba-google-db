const formulario = document.getElementById("formulario");
const formedit = document.getElementById("formedit");
const formdel = document.getElementById("formdel");
const formver = document.getElementById("formver");
const registro = document.getElementById("registro");
const exito = document.getElementById("exito");
const editado = document.getElementById("editado");
const borrado = document.getElementById("borrado");
const leer = document.getElementById("leer");


formulario.addEventListener("submit", async (e) => {
    e.preventDefault();

    // Escribir filas
    try {
        const respuesta = await fetch(
            "https://sheet.best/api/sheets/93c62790-8ef6-4fa8-82d3-6b2e67f69493",
            {
                method: "POST",
                mode: "cors",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    Nombre: formulario.nombre.value,
                    Correo: formulario.correo.value,
                    Telefono: formulario.telefono.value,
                }),
            }
        );

        const contenido = await respuesta.json();
        console.log("Se agrego", contenido);
    } catch (error) {
        console.log(error);
    }

    registro.classList.remove("activo");
    exito.classList.add("activo");
});
// Leer filas
formver.addEventListener("submit", async (e) => {
    e.preventDefault();
    try {
        const respuesta = await fetch(
            "https://sheet.best/api/sheets/93c62790-8ef6-4fa8-82d3-6b2e67f69493"
        );

        const contenido = await respuesta.json();
        console.log("formulario.addEventListener ~ contenido", contenido);
    } catch (error) {
        console.log(error);
    }
    registro.classList.remove("activo");
    leer.classList.add("activo");
});
//Eliminar filas

formdel.addEventListener("submit", async (e) => {
    e.preventDefault();
    try {
        const respuesta = await fetch(
            `https://sheet.best/api/sheets/93c62790-8ef6-4fa8-82d3-6b2e67f69493/${formedit.id.value}`,
            {
                method: "DELETE",
            }
        );

        const contenido = await respuesta.json();
        console.log("Se Borro", contenido);
    } catch (error) {
        console.log(error);
    }

    registro.classList.remove("activo");
    borrado.classList.add("activo");
});

formedit.addEventListener("submit", async (e) => {
    e.preventDefault();

    //Actualizar filas
    try {
        const respuesta = await fetch(
            `https://sheet.best/api/sheets/93c62790-8ef6-4fa8-82d3-6b2e67f69493/${formedit.id.value}`,
            {
                method: "PATCH",
                mode: "cors",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    Nombre: formulario.nombre.value,
                    Correo: formulario.correo.value,
                    Telefono: formulario.telefono.value,
                }),
            }
        );

        const contenido = await respuesta.json();
        console.log("Se edito", contenido);
    } catch (error) {
        console.log(error);
    }

    registro.classList.remove("activo");
    editado.classList.add("activo");
});
