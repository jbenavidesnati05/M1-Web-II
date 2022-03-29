

let inmueble = [
    {id_inmueble:"0001", direccion:"cra 80-30",telefono:"3125", precio:"1100",disponible:true},
    {id_inmueble:"0002", direccion:"cra 83-32",telefono:"3126", precio:"1200",disponible:false},
    {id_inmueble:"0003", direccion:"cra 84-10",telefono:"3127", precio:"1300",disponible:true},
    {id_inmueble:"0004", direccion:"cra 50-10",telefono:"3128", precio:"1400",disponible:false},
    {id_inmueble:"0005", direccion:"cra 40-15",telefono:"3129", precio:"1500",disponible:true},
    {id_inmueble:"0006", direccion:"cra 45-15",telefono:"3195", precio:"1600",disponible:false},
    {id_inmueble:"0007", direccion:"cra 57-85",telefono:"3185", precio:"1700",disponible:true},
    {id_inmueble:"0008", direccion:"cra 78-63",telefono:"3175", precio:"1800",disponible:false},
    {id_inmueble:"0009", direccion:"cra 99-35",telefono:"3165", precio:"1900",disponible:true},
    {id_inmueble:"0010", direccion:"cra 100-32",telefono:"3155", precio:"2000",disponible:false},

]
/*function id_inmueble()
{
    var texto_id_inmueble = function(){
      document.write("solo se aceptan valores numericos");
    }
    

    var label_inmueble = document.getElementById('id_inmueble');
    label_inmueble.addEventListener("focus",texto_id_inmueble);


}*/

/*(function(){
        var id_inmueble = function(){
            mensaje = "solo se aceptan numeros";
            document.getElementById('input_mensaje').value = mensaje;
   };

   var input = document.getElementById('input');
   input.addEventListener('focus',id_inmueble);


}())
*/


let id_inmueble = document.getElementById('id_inmueble');


id_inmueble.onfocus = () =>{
    idinmueble.innerHTML = "Ingresar solo numeros";
}


let direccion = document.getElementById('direccion');

direccion.onfocus = () =>{
    spandireccion.innerHTML = "Ingresar la direccion es obligatorio";
}

let precio = document.getElementById('precio');

precio.onfocus = () =>{
    spanprecio.innerHTML = "el precio debe estar entre 1 millon y 50 millones";
}

 //Message
 let message = document.getElementById('message') 

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

            if(id_inmueble.value != 0 && direccion.value != "" && telefono.value != "" && precio.value != 0){
                let inmmueble = {

                    id_inmueble: parseInt(id_inmueble.value),
                    direccion: direccion.value,
                    telefono: telefono.value,
                    precio: parseInt(precio.value),
                    estado: true

                }

                inmmueble.push(inmmueble)

                message.style.color = "green"
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


