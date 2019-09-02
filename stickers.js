// make elements draggable       
// search for all draggable items
var cursorX = 0;
var cursorY = 0;
var elmntX = 0;
var elmntY = 0;
var elmnt = null;
var stickerClone = null;

function dragMouseDown(e, element) {
  elmnt = element;
  e = e || window.event;
  e.preventDefault();
  // get the mouse cursor position at startup:
  cursorX = e.clientX;
  cursorY = e.clientY;
  if (element.id == 'original'){
    stickerClone = element.cloneNode(true);
    element.id = '';
  }
  document.onmouseup = closeDragElement;
  // call a function whenever the cursor moves:
  document.onmousemove = elementDrag;
}

function elementDrag(e) {
  e = e || window.event;
  e.preventDefault();
  // calculate the new cursor position:
  elmntX = cursorX - e.clientX;
  elmntY = cursorY - e.clientY;
  cursorX = e.clientX;
  cursorY = e.clientY;
  // set the element's new position:
  if (elmnt.style.transform == "scale(0.75)"){
    elmnt.style.transform = "scale(0.77)";
  }
  else if (elmnt.style.transform == "scale(0.5)"){
    elmnt.style.transform = "scale(0.52)";
  }
  else if (elmnt.style.transform == "scale(0.52)" || elmnt.style.transform == "scale(0.77)"){}
  else {
    elmnt.style.transform = "scale(0.52)";
  }
  elmnt.style.top = (elmnt.offsetTop - elmntY) + "px";
  elmnt.style.left = (elmnt.offsetLeft - elmntX) + "px";
}

function closeDragElement() {
  // stop moving when mouse button is released:
  if (elmnt.style.transform == "scale(0.77)"){
    elmnt.style.transform = "scale(0.75)";
  }
  else {
    elmnt.style.transform = "scale(0.5)"
  }
  document.onmouseup = null;
  document.onmousemove = null;
  document.getElementById('image-scroller').appendChild(stickerClone);
}

function scaleSticker (sticker) {
  if (sticker.style.transform == "scale(0.5)"){
    sticker.style.transform = "scale(0.75)";
  }
  else{
    sticker.style.transform = "scale(0.5)"
  }
}