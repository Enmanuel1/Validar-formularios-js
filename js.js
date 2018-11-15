'use strict'

let camposInput = []
let camposSelect = []

function VerifyInputs(id =  new Array()){
   GetInputsId()
   id.forEach(e =>{
       let elemento = document.getElementById(e) 
       let nombreDelCampo = elemento.getAttribute("nombre")
       printMessageForInputs(elemento,nombreDelCampo)
   })
}

function VerifySelect(id = new Array()){
    getSelectId()
    id.forEach(e =>{
        let elemento = document.getElementById(e) 
        let nombreDelCampo = elemento.getAttribute("nombre")
        PrintMessageForSelected(elemento, nombreDelCampo)
    })
}

function InputIsValid(elementValue){
    if(elementValue.length > 0){
        return true
    }else{
        return false
    }
}

function selectIsValid(elementId){
    let valorDelElemento = document.getElementById(elementId).value
    if(valorDelElemento > 0){
        return true
    }else{
        return false
    }
}

function printMessageForInputs(elemento, nombreDelCampo){
    if(!InputIsValid(elemento.value)){
        toastr.error(`El campo ${nombreDelCampo} esta vacio`)
    }
}

function PrintMessageForSelected(elemento, nombreDelCampo){
    if(!selectIsValid(elemento.id)){
        toastr.error(`El campo ${nombreDelCampo} esta vacio`)
    }
}

function GetInputsId(){
    let elementos = document.getElementsByTagName("input")
    if(camposInput.length === 0 ){
        for (let x = 0; x < elementos.length; x++) {
            camposInput.push(elementos[x].id)
        }
    }
}

function getSelectId(){
    let elementos = document.getElementsByTagName("select")
    if(camposSelect.length === 0){
        for(let x = 0; x < elementos.length; x++){
            camposSelect.push(elementos[x].id)
        }
    }
}

document.getElementById("okgoogle").addEventListener("click", e =>{
    e.preventDefault()
    VerifyInputs(camposInput)
    VerifySelect(camposSelect)
})