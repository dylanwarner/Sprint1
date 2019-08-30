// make elements draggable       
// search for all draggable items
console.log('stickers loads');
dragElement(document.getElementsByClassName("draggable"));

// iterate over all of the items that are .draggable
function dragElement(elmnts){
    console.log('function called');
    Array.from(elmnts).forEach((elmnt) => {
        console.log('loop started');
        var elmntX = 0, elmntY = 0, cursorX = 0, cursorY = 0;
        
        elmnt.onmousedown = dragMouseDown;
    
        function dragMouseDown(e) {
          e = e || window.event;
          e.preventDefault();
          // get the mouse cursor position at startup:
          cursorX = e.clientX;
          cursorY = e.clientY;
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
          elmnt.style.top = (elmnt.offsetTop - elmntY) + "px";
          elmnt.style.left = (elmnt.offsetLeft - elmntX) + "px";
        }
        
        function closeDragElement() {
          // stop moving when mouse button is released:
          document.onmouseup = null;
          document.onmousemove = null;
        }
    });
}