const checkboxes = Array.from(document.querySelectorAll('input[type="checkbox"]'));

let lastChecked;

const handleCheck = (e) => {
  let inBetween = false;
  if(e.shiftKey && e.srcElement.checked){
    checkboxes.forEach((item) => {
      if(item === e.srcElement || item === lastChecked){
        inBetween = !inBetween;
      }

      if(inBetween){
        item.checked = true;
      }
    })
  }
  lastChecked = e.srcElement;
}

lastChecked = null;

checkboxes.forEach((item) => {
  item.addEventListener('click', handleCheck);
});
