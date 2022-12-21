// 1.1 Añade un botón a tu html con el id btnToClick y en tu javascript añade el 
// evento click que ejecute un console log con la información del evento del click

const btn1 = document.createElement("button");
document.body.appendChild(btn1);
btn1.setAttribute("id","btnToClick");

function handleBtn1Click (evento){
console.log(evento)
}

btn1.addEventListener("click", handleBtn1Click)

// 1.2 Añade un evento 'focus' que ejecute un console.log con el valor del input.
const inputFocus = document.querySelector(".focus")

function getInputValue (evento){
    console.log(evento.target.value)
}

inputFocus.addEventListener("focus", getInputValue)

// 1.3 Añade un evento 'input' que ejecute un console.log con el valor del input.

const inputValue = document.querySelector(".value")

function getInputValue2 (evento){
    console.log(evento.target.value)
}

inputValue.addEventListener("input", getInputValue2)

