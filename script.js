let ColorMixerBtn = document.getElementById('ColorMixerBtn');

ColorMixerBtn.addEventListener('click', () => {
  let firstColor = document.getElementById('firstColor').value;
  let secoundColor = document.getElementById('secoundColor').value;
  let colorBox = document.getElementById('colorBox');
  let result = firstColor + secoundColor;

  switch (result) {
    case 'redblue':
      colorBox.style.backgroundColor = "purple";
      break;
    case 'redyellow':
      colorBox.style.backgroundColor = "orange";

      break;
    case 'bluered':
      colorBox.style.backgroundColor = "purple";

      break;
    case 'yellowred':
      colorBox.style.backgroundColor = "orange";
      break;
    case 'blueyellow':
      colorBox.style.backgroundColor = "green";

      break;
    case 'yellowblue':
      colorBox.style.backgroundColor = "green";
      break;
    default:
      console.log("Invalid");
  }
});