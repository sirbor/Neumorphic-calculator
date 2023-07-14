let input = "";

function appendInput(value) {
  input += value;
  updateDisplay();
}

function clearResult() {
  input = "";
  updateDisplay();
}

function calculate() {
  let result;
  try {
    result = eval(input);
  } catch (error) {
    result = "Error";
  }
  document.getElementById("result").value = result;
}

function updateDisplay() {
  document.getElementById("result").value = input;
}
