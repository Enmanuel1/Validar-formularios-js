'use strict'
function verificarObjeto(id =  new Array()){
   id.forEach(e =>{
       let elemento = document.getElementById(e) 
       printMessage(elemento)
   })
}

function isValid(elementValue){
    let state;
    if(elementValue.length > 0){
        state = true;
    }else{
        state = false;
    }
    return state;
}

function printMessage(elemento){
    let nombre = elemento.getAttribute("nombre")
       
       if(isValid(elemento.value)){

       }
       else
       {
        toastr.error(`El campo ${nombre} esta vacio`)
       }
}

let campos = [
                "exampleInputEmail1",
                "exampleInputPassword1",
                "exampleInputEmail2",
                "exampleInputPassword2"
            ]

document.getElementById("okgoogle").addEventListener("click",e=>{
    e.preventDefault()
    verificarObjeto(campos)
})