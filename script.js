//  Div Red color
let redColor = document.querySelector("#redDiv");
let colorRed = function () {
  redColor.style.backgroundColor = "red";
};
redColor.addEventListener("click", colorRed);

//  Div Blue color
let blueColor = document.querySelector("#blueDiv");
let colorBlue = function () {
  blueColor.style.backgroundColor = "blue";
};
blueColor.addEventListener("click", colorBlue);

//  Div Green color
let greenColor = document.querySelector("#greeDiv");
let colorGreen = function () {
  greenColor.style.backgroundColor = "green";
};
greenColor.addEventListener("click", colorGreen);

//  Div yellow color
let yellowColor = document.querySelector("#yellowDiv");
let colorYellow = function () {
  yellowColor.style.backgroundColor = "yellow";
};
yellowColor.addEventListener("click", colorYellow);

// -----------------

{
  let input_Text = document.querySelector("#textInput");
  let pText = document.querySelector("#innerhtmlText");
  let buttonEvent = document.querySelector("#buttonAll");
  buttonEvent.addEventListener("click", function () {
    let inner_html = input_Text.value;
    pText.innerText = inner_html;
  });
}
