//Obtenemos el select
const select = document.getElementById("selectTypes");
//Variable para guardar el id del equipo del equipo
let idEquipo;
//Variable para guardar la direccion de los EQUIPOS de la api
const direccionEquipoApi = "https://www.balldontlie.io/api/v1/teams";
//Variable para guardar la direccion de los JUGADORES de la api
const direccionJugadoresApi = "https://www.balldontlie.io/api/v1/players";


//Este fetch rellena el select con todos los equipos
fetch(direccionEquipoApi)
    .then(response => { return response.json(); })
    .then(data => {

        var cantidadEquipos = Object.keys(data.data).length; //Obtener la cantidad total de equipos
        for (let i = 0; i < cantidadEquipos; i++) {


            const selectTypes = document.getElementById("selectTypes")
            let optionElement = document.createElement("option");
            optionElement.textContent = data.data[i].name;
            optionElement.setAttribute("value", data.data[i].id)
            selectTypes.appendChild(optionElement)
        }

    });

    //Cuando se rellenan los option para el select, como value se le pasa el id del equipo y con este metodo se obtiene
    function obtenerEquipo() {
        idEquipo = select.value;
    }


    //Con este metodo saco la informacion del equipo y la muestro por pantalla
    function mostrarMensajeConsola() {
        
        //Este if sirve para que no te de ningun error en la consola cuando no eliges ningun equipo
        if (idEquipo != undefined) {
            fetch(`${direccionEquipoApi}/${idEquipo}`)
                    .then(response => {return response.json()})
                    .then(data => {
           
            
                    console.log(`La abreviacion de ${data.full_name} es: ${data.abbreviation}`)

                    }) //Fin del fecth
        }//Fin del if
    }//Fin de la funcion


    // --------------------------------------------------------------------------------------------------------
    //AMPLIACION

    fetch(direccionJugadoresApi)
    .then(response => { return response.json(); })
    .then(data => {

        //Obtener la cantidad total de equipos
        var cantidadJugadores = Object.keys(data.data).length; 
        console.log(data)

        for (let i = 0; i < cantidadJugadores; i++) {


            const selectTypes = document.getElementById("selectTypes")
            let optionElement = document.createElement("option");
            optionElement.textContent = data.data[i].name;
            optionElement.setAttribute("value", data.data[i].id)
            selectTypes.appendChild(optionElement)
        }

    });

    