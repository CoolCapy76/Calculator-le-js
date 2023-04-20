// функций за калкулация
function add(num1, num2) {
    return num1 + num2;
  }
  
  function subtract(num1, num2) {
    return num1 - num2;
  }
  
  function multiply(num1, num2) {
    return num1 * num2;
  }
  
  function divide(num1, num2) {
    return num1 / num2;
  }
  
//Главна калкулация
  function handleCalculation(event) {
    event.preventDefault();
    const number1 = parseInt(document.querySelector("input#num1").value);
    const number2 = parseInt(document.querySelector("input#num2").value);
    const operator = document.querySelector("input[name='operator']:checked").value;
  
    let result;
    if (operator === "+") {
      result = add(number1, number2);
    } else if (operator === "-") {
      result = subtract(number1, number2);
    } else if (operator === "*") {
      result = multiply(number1, number2);
    } else if (operator === "/") {
      result = divide(number1, number2);
    }
  
    document.getElementById("sum").innerText = result;
  }
  
  //Извеждане на решението
  window.addEventListener("load", function() {
    const form = document.getElementById("calculator");
    form.addEventListener("submit", handleCalculation);
  });

  