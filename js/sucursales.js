/* ===========================
   INFORMACIÓN DE SUCURSALES
=========================== */

const sucursales = {
    comitan: [
        {
            nombre: "Sucursal Cedro",
            direccion:"8ª Calle Oriente Norte No.59, Barrio El Cedro, Comitán de Domínguez, Chiapas.  ",
            horario:"7:20 a.m. a 8:30 p.m.",
            telefono:"9632668385",
            telefonoTexto:"963 266 83 85",
            lat:16.260605675051682,
            lng: -92.13161778591058,
            maps:"https://maps.app.goo.gl/RkifypaH25qEvGHj6"
        },
        {
            nombre:"Sucursal Urgencias",
            direccion:"Privada del Hospital No.12, Barrio de San Sebastián, Comitán de Domínguez, Chiapas. ",
            horario:"Servicio las 24 horas",
            telefono:"9632668385",
            telefonoTexto:"963 266 83 85",
            lat:16.2453778416548,
            lng: -92.12977419065032,
            maps:"https://maps.app.goo.gl/2sfzXNzrwfVD9WqNA"
        },
        {
            nombre:"Sucursal Hospital",
            direccion:"Privada del Hospital No.8, Barrio de San Sebastián, Comitán de Domínguez, Chiapas. ",
            horario:"7:00 a.m. a 10:00 p.m.",
            telefono:"9632668385",
            telefonoTexto:"963 266 83 85",
            lat:16.245573811103412,
            lng: -92.12989944097373,
            maps:"https://maps.app.goo.gl/2sfzXNzrwfVD9WqNA"
        },
        {
            nombre: "Sucursal San Sebastián",
            direccion: "2ª Av. Oriente Sur No.110, Barrio de San Sebastián, Comitán de Domínguez, Chiapas. ",
            horario:"7:00 a.m. a 9:00 p.m.",
            telefono:"9632668385",
            telefonoTexto:"963 266 83 85",
            lat: 16.246361700684233,
            lng: -92.13064783311137,
            maps:"https://maps.app.goo.gl/Kukjk1uR17rZGSii7"
        },
        {
            nombre:"Sucursal Quinta",
            direccion:"5ª Calle Norte Oriente No.102, Barrio El Cedro, Comitán de Domínguez, Chiapas. ",
            horario:"7:20 a.m. a 6:00 p.m.",
            telefono:"9632668385",
            telefonoTexto:"963 266 83 85",
            lat: 16.263273210532425,
            lng:  -92.13119825521058,
            maps:"https://maps.app.goo.gl/i2ufxgHQy4Kxew646"
        },
        {
            nombre:"Sucursal Central de Abastos",
            direccion:"11ª Calle Sur Poniente No.14, Calzada del Panteón, Comitán de Domínguez, Chiapas.",
            horario:"7:00 a.m. a 5:30 p.m.",
            telefono:"9632668385",
            telefonoTexto:"963 266 83 85",
            lat: 16.239358593997757,
            lng:  -92.13535184417702,
            maps:"https://maps.app.goo.gl/Y1Jh2L7DVkmpSJG2A"
        },
        {
            nombre:"Sucursal Mercado",
            direccion:"11ª Calle Sur Poniente, Calzada del Panteón, Comitán de Domínguez, Chiapas. ",
            horario:"7:15 a.m. a 5:15 p.m.",
            telefono:"9632668385",
            telefonoTexto:"963 266 83 85",
            lat: 16.239571691160986, 
            lng: -92.1349790171251,
            maps: ""
        },
        {
            nombre: "Sucursal Tercera",
            direccion:"3ª Calle Norte Poniente No.57, Barrio de Guadalupe, Comitán de Domínguez, Chiapas. ",
            horario:"7:30 a.m. a 9:30 p.m.",
            telefono:"9632668385",
            telefonoTexto:"963 266 83 85",
            lat: 16.25230989769061,
            lng: -92.1418424484744,
            maps:"https://maps.app.goo.gl/UuJkKLfpiN4UnNDh6"
        },
        {
            nombre:"Sucursal San Antonio",
            direccion:"4ª Calle Norte Poniente No.100, Barrio de Candelaria, Comitán de Domínguez, Chiapas. ",
            horario:"7:40 a.m. a 8:00 p.m.",
            telefono:"9632668385",
            telefonoTexto:"963 266 83 85",
            lat: 16.25102347082758,
            lng:  -92.14530097915768,
            maps:"https://maps.app.goo.gl/iKz3vimhSCxfyjMM6"
        },
        {
            nombre:"Sucursal Ortopedia",
            direccion:"2ª Av. Oriente Sur No.110, Barrio de San Sebastián, Comitán de Domínguez, Chiapas.",
            horario:"8:00 a.m. a 8:00 p.m.",
            telefono:"9632242644",
            telefonoTexto:"963 224 26 44",
            lat: 16.246360413133242,
            lng: -92.13062637544054,
            maps:"https://maps.app.goo.gl/Kukjk1uR17rZGSii7"
        }
    ],

    margaritas: [
        {
            nombre:"Sucursal Margaritas Uno",
            direccion:"1ª Avenida Oriente Norte, Centro, Las Margaritas",
            horario:"8:00 a.m. a 8:00 p.m.",
            telefono:"9632668391",
            telefonoTexto:"963 266 83 91",
            lat: 16.317525394452442,
            lng: -91.9827879472282,
            maps:"https://maps.app.goo.gl/r9z4V3LQgN3osDTH8"
        },
        {
            nombre:"Sucursal Margaritas Centro",
            direccion:"1ª Calle Sur Poniente No. 4b, Centro, Las Margaritas",
            horario:"8:00 a.m. a 9:00 p.m.",
            telefono:"9632668391",
            telefonoTexto:"963 266 83 91",
            lat: 16.314945560093175,
            lng: -91.98227838666931,
            maps: ""
        },
        {
            nombre:"Sucursal Margaritas Tres",
            direccion:"1ª Avenida Oriente Norte No. 12, Centro, Las Margaritas",
            horario:"8:30 a.m. a 6:30 p.m.",
            telefono:"9632668391",
            telefonoTexto:"963 266 83 91",
            lat: 16.31682936778578,
            lng: -91.98257412134299,
            maps: ""
        }
    ]
};



/* ===========================
   ELEMENTOS DEL HTML
=========================== */

const selectorCiudad =
    document.getElementById(
        "ciudad"
    );

const lista =
    document.getElementById(
        "lista-sucursales"
    );

const mapa =
    document.getElementById(
        "mapa"
    );

    const nombreMapa =
    document.getElementById(
        "nombre-mapa"
    );

const contador =
    document.getElementById(
        "contador-sucursales"
    );

/* ===========================
   MOSTRAR SUCURSALES
=========================== */

function mostrarSucursales(ciudad) {
    lista.innerHTML = "";

    const listaCiudad =
        sucursales[ciudad];
    contador.textContent =
        `${listaCiudad.length} sucursales`;

    listaCiudad.forEach(
        (sucursal, indice) => {
            const tarjeta =
                document.createElement(
                    "article"
                );

            tarjeta.classList.add(
                "sucursal"
            );

            tarjeta.innerHTML = `
                <h3>
                    ${sucursal.nombre}
                </h3>
                <p class="dato-sucursal">
                    <img
                        src="img/iconos/ubicacion.png"
                        alt=""
                        class="icono-sucursal">
                    <span>${sucursal.direccion}</span>
                </p>

                <p class="dato-sucursal">
                    <img
                        src="img/iconos/reloj.png"
                        alt=""
                        class="icono-sucursal">
                    <span>${sucursal.horario}</span>
                </p>

                <p class="dato-sucursal">
                    <img
                        src="img/iconos/whatsapp.png"
                        alt=""
                        class="icono-sucursal">
                    <span>${sucursal.telefonoTexto}</span>
                </p>

                <div class="acciones-sucursal">

                    <a
                        class="boton boton-llamar" 
                        href="https://wa.me/52${sucursal.telefono}"
                        target="_blank"
                        rel="noopener noreferrer">                  
                        Enviar WhatsApp
                    </a>
                    ${sucursal.maps?`
                        <a
                            class="boton boton-mapa"
                            href="${sucursal.maps}"
                            target="_blank"
                            rel="noopener noreferrer">
                            Cómo llegar
                        </a>`:`
                        <span
                            class="
                            boton
                            boton-deshabilitado">
                            Mapa pendiente
                        </span>`
                    }
                </div>
            `;


            tarjeta.addEventListener(
                "click",
                function (evento) {
                    if (evento.target.closest("a")
                    ) {
                        return;
                    }
                    seleccionarSucursal(
                        ciudad,
                        indice,
                        tarjeta
                    );
                }
            );


            lista.appendChild(
                tarjeta
            );
        }
    );


    /* Seleccionar automáticamente
       la primera sucursal */

    if (listaCiudad.length > 0) {
        const primeraTarjeta =
            lista.querySelector(
                ".sucursal"
            );
        seleccionarSucursal(
            ciudad,
            0,
            primeraTarjeta
        );
    }
}

/* ===========================
   SELECCIONAR SUCURSAL
=========================== */
function seleccionarSucursal(
    ciudad,
    indice,
    tarjeta) {
    const sucursal =
    sucursales[ciudad][indice];

    /* Quitar selección anterior */
    document
        .querySelectorAll(
            ".sucursal")
        .forEach(elemento =>
                elemento.classList
                    .remove("activa"));

    /* Marcar nueva tarjeta */
    tarjeta.classList.add(
        "activa"
    );

    /* Cambiar nombre del mapa */
    nombreMapa.textContent =
        sucursal.nombre;

    /* Actualizar mapa */

    mostrarMapa(
        sucursal);

}


/* ===========================
   MOSTRAR MAPA
=========================== */

function mostrarMapa(sucursal) {

    if (
        sucursal.lat !== undefined &&
        sucursal.lng !== undefined
    ) {

        mapa.src =
            `https://www.google.com/maps?q=${sucursal.lat},${sucursal.lng}&z=17&output=embed`;

        return;
    }
    mapa.src = "";
}


/* ===========================
   CAMBIO DE CIUDAD
=========================== */

selectorCiudad.addEventListener(
    "change",
    function () {
        mostrarSucursales(
            selectorCiudad.value
        );
    }
);


/* ===========================
   CARGA INICIAL
=========================== */

mostrarSucursales(
    "comitan"
);