let firstColor = document.querySelector('#color1');
let secondColor = document.querySelector('#color2');
let colorLabel = document.querySelector('h3');

function adjustStyleText() {
  document.body.style.background = `linear-gradient(to right, ${firstColor.value}, ${secondColor.value})`;

  colorLabel.textContent = `linear-gradient(to right, ${firstColor.value}, ${secondColor.value})`;
}

window.addEventListener('load', () => {
  adjustStyleText();
});

[firstColor, secondColor].forEach((box) => {
  box.addEventListener('input', () => {
    adjustStyleText();
  });
});
