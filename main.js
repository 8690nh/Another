function sum() {
    let A = +document.getElementById("A").value;
    let B = +document.getElementById("B").value;
    let X = A + B;
    document.getElementById("Result").innerHTML="Result : " +X;
}
function sub() {
    let A = +document.getElementById("A").value;
    let B = +document.getElementById("B").value;
    let X = A - B;
    document.getElementById("Result").innerHTML="Result : " +X;
}
function mul() {
    let A = +document.getElementById("A").value;
    let B = +document.getElementById("B").value;
    let X = A * B;
    document.getElementById("Result").innerHTML="Result : " +X;
}
function div() {
    let A = +document.getElementById("A").value;
    let B = +document.getElementById("B").value;
    let X = A / B;
    document.getElementById("Result").innerHTML="Result : " +X;
}