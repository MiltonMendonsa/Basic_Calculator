function turnOff() {
    var inputField=document.getElementById("inputField")
    inputField.style.visibility="hidden"
}
function turnOn() {
    var inputField=document.getElementById("inputField")
    inputField.style.visibility="visible"
}
function getValues(num) {
    var inputValues=document.getElementById("inputValues")
    inputValues.value += num
    console.log(inputValues.value)
}
var inputValues=document.getElementById("inputValues")
function clearOneChar() {
    inputValues.value = inputValues.value.slice(0,-1)
}
function clearAllChar() {
    inputValues.value = ""
}
function calculate() {
    inputValues.value = eval(inputValues.value)
}