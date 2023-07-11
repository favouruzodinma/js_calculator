let evaluate = document.getElementById("evaluate");
let result = document.getElementById("result");
// let modal = document.querySelector(".modal");
let modal = document.getElementById("modal");
let calbuttons = document.querySelector(".btn_div");
let calculator = document.getElementById("calculator");
let inputs = document.querySelectorAll("input");
let calText = document.getElementById("calText");
let history = document.querySelector(".history");
let calHis = document.getElementById("calHis");
let btn2 = document.getElementById("btn2");

function display(value){
    evaluate.innerText += value;
    if(evaluate.innerText[0] ==="0"){
        evaluate.innerText ="";
    }
}
function returnToZero(){
    evaluate.innerText = "0";
    result.innerText ="";
}
function del(){
    let str = evaluate.innerText.split("");
    str.pop();
    evaluate.innerText = str.join("");
}
function resul() {
    let eva = evaluate.innerText;
    let res = eval(eva);
    result.innerText = res;
}

function displayModal() {
    if (modal.style.display === "block") {
        modal.style.display = "none";
    } else {        
    setTimeout(() =>{
        modal.style.display = "block";
    },2000);
    }
}

function darkMode(){
    calculator.style.background ="#3a4452c2";
    calculator.style.color="#fff";
    calbuttons.style.background ="rgba(0, 0, 0, 0.829)";
    for(const input of inputs){
        // input.style.color="#fff";
        btn2.style.color="#7a7171"
    }
}
function lightMode() {
    calText.style.color="#3c3c3c";
    calculator.style.background ="#ffffff";
    calculator.style.color="#273238";
    calbuttons.style.background ="#f3f3f3";
    for(const input of inputs){
        input.style.color="#3c3c3c";
        btn2.style.color="#7a7171"

    }
}
function displayHistory() {
    history.style.height = "90vh";
  }
  
  function closeHistory() {
    history.style.height = "0vh";
  }
  
  function clearHistory() {
    calHis.innerHTML = "";
  }

  function displayResult() {
    let eva = evaluate.innerText;
    let res = eval(eva);
    result.innerText = res;
    let historyDiv = document.createElement("div");
    let calHistory = document.createElement("h2");
    let resultHistory = document.createElement("h2");
    historyDiv.appendChild(calHistory);
    historyDiv.appendChild(resultHistory);
    calHis.appendChild(historyDiv);
    calHistory.innerText = eva;
    resultHistory.innerText = res;
  }