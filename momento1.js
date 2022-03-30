

let inmmuebles = [
    
    {
        ID: 1,
        direccion: "cra 81-30",
        telefono: "4622564",
        precio: 100,
        estado: true 
    },
    {
        ID: 2,
        direccion: "cra 81-32",
        telefono: "4622565",
        precio: 150,
        estado: true 
    },
    {
        ID: 3,
        direccion: "cra 82-56",
        telefono: "4622586",
        precio: 5500,
        estado: true 
    },
    {
        ID: 4,
        direccion: "cra 85-56",
        telefono: "4622568",
        precio: 4100,
        estado: false 
    },
    {
        ID: 5,
        direccion: "cra 85-16",
        telefono: "4625326",
        precio: 19100,
        estado: false 
    }
    
    
]


//Message
let message = document.getElementById('message') 

//ID

let inputID = document.getElementById('IDInput')
let labelID = document.getElementById('IDLabel')

inputID.addEventListener('focus', ()=>{
    labelID.innerText = "Solo se aceptan números"
})
inputID.addEventListener('blur', ()=>{
    labelID.innerText = ""
})

//Telefono

let inputTelefono = document.getElementById('telefonoInput')


//Direción

let inputDireccion = document.getElementById('direccionInput')
let labelDireccion = document.getElementById('direccionLabel')

inputDireccion.addEventListener('focus', ()=>{
    labelDireccion.innerText = "La dirección es obligatoria"
})
inputDireccion.addEventListener('blur', ()=>{
    labelDireccion.innerText = ""
})

//Precio

let inputPrecio = document.getElementById('precioInput')
let labelPrecio = document.getElementById('precioLabel')

inputPrecio.addEventListener('focus', ()=>{
    labelPrecio.innerText = "El precio debe estar entre 100 y 500 millones"
})
inputPrecio.addEventListener('blur', ()=>{
    labelPrecio.innerText = ""
})

//Estado
let inputEstado = document.getElementById('estadoInput')


//Buttons

let enviarButton = document.getElementById('btnEnviar')
let buscarButton = document.getElementById('btnBuscar')
let listarButton = document.getElementById('btnListar')

    //Enviar
    enviarButton.addEventListener('click', () => {
        setTimeout(validarCampos, 4000)
        message.innerText = "Validando datos"
    })
    //Buscar
    buscarButton.addEventListener('click', () => {
        setTimeout(buscarInmueble, 4000)
        message.innerText = "Buscando inmueble"
    })
    //Listar
    listarButton.addEventListener('click', ()=>{
        setTimeout(listarInmuebles, 4000)
        message.innerText = "Listando inmuebles"
    })



//Funciones

function validarCampos(){

    if(inputID.value != 0 && inputDireccion.value != "" && inputTelefono.value != "" && inputPrecio.value != 0){
        let inmmueble = {

            ID: parseInt(inputID.value),
            direccion: inputDireccion.value,
            telefono: inputTelefono.value,
            precio: parseInt(inputPrecio.value),
            estado: true

        }

        inmmuebles.push(inmmueble)

        message.style.color = "blue"
        message.innerText = "Registrado correctamente"
        setTimeout(()=> message.innerText = "", 3000)
        setTimeout(()=> message.style.color = "black", 4000)
    }
    else{
        message.style.color = "red"
        message.innerText = "Datos incorrectos"
        setTimeout(()=> message.innerText = "", 3000)
        setTimeout(()=> message.style.color = "black", 4000)
    }
    
}

function buscarInmueble(){
    let IDInmueble= inputID.value
    if( IDInmueble!= 0){

        let encontrado = false
        let inmuebleEncontrado = {}
        
        inmmuebles.forEach(inmmueble => {
            if(IDInmueble == inmmueble.ID){
                encontrado = true
                inmuebleEncontrado = inmmueble
            }
        });

        if(encontrado){

            if(inmuebleEncontrado.estado){

                inputID.value = inmuebleEncontrado.ID
                inputDireccion.value = inmuebleEncontrado.direccion
                inputTelefono.value = inmuebleEncontrado.telefono
                inputPrecio.value = inmuebleEncontrado.precio
                inputEstado.value = "Activo"

                message.style.color = "green"
                message.innerText = "Inmueble encontrado"
                setTimeout(()=> message.innerText = "", 3000)
                setTimeout(()=> message.style.color = "black", 4000)
            }
            else{
                message.style.color = "red"
                message.innerText = "Inmueble inactivo"
                setTimeout(()=> message.innerText = "", 3000)
                setTimeout(()=> message.style.color = "black", 4000)
            }
            
        }
        else{       
            message.style.color = "red"
            message.innerText = "Inmueble no encontrado"
            setTimeout(()=> message.innerText = "", 3000)
            setTimeout(()=> message.style.color = "black", 4000)
        }

    }
    else{
        message.style.color = "red"
        message.innerText = "ID invalido"
        setTimeout(()=> message.innerText = "", 3000)
        setTimeout(()=> message.style.color = "black", 4000)
    }
}

function listarInmuebles(){
    
    promesa = new Promise(function(resolve, reject){
        if(inmmuebles != []){
            resolve(inmmuebles)
        }
        else{
            reject("No hay inmuebles")
        }
    })
    
    promesa
    .then(inmmuebles => {

        console.log(inmmuebles)
        
        let registrosInmuebles = ""
        inmmuebles.forEach(inmmueble => {
            registrosInmuebles += 
            `
            <tr>
                <td>
                    ${inmmueble.ID}
                </td>
                <td>
                    ${inmmueble.direccion}
                </td>
                <td>
                    ${inmmueble.telefono}
                </td>
                <td>
                    ${inmmueble.precio}
                </td>
                <td>
                    ${inmmueble.estado == true ? "Activo" : "Inactivo"}
                </td>
            </tr>
            `
        })

        table = `
        
        <table>
            <tr>
                <th>
                    ID
                </th>
                <th>
                    Dirección
                </th>
                <th>
                    Telefono
                </th>
                <th>
                    Precio
                </th>
                <th>
                    Estado
                </th>
            </tr>
            ${
                registrosInmuebles
            }
        </table>

        `

        document.getElementById("container").innerHTML = table

        message.style.color = "green"
        message.innerText = "Inmmuebles listados"
        setTimeout(()=> message.innerText = "", 3000)
        setTimeout(()=> message.style.color = "black", 4000)
        
    })
    .catch(message => {
        if(message == "No hay inmuebles"){
            message.style.color = "red"
            message.innerText = "No hay inmuebles para listar"
            setTimeout(()=> message.innerText = "", 3000)
            setTimeout(()=> message.style.color = "black", 4000)
        }
    })
}

