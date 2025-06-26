var occupato;
var films;


function dragstartHandler(ev) {
    // Add the target element's id to the data transfer object
    ev.dataTransfer.setData("text/plain", ev.target.id);
}

function dragoverHandler(ev) {
  ev.preventDefault();
  ev.dataTransfer.dropEffect = "move";
}
function dropHandler(ev) {
  ev.preventDefault();
  // Get the id of the target and add the moved element to the target's DOM
  const data = ev.dataTransfer.getData("text/plain");
  // Check if the target is an image inside the selezionefilm div
  if (ev.target.parentNode.classList.contains('selezionefilm')) {
      // If the target is an image inside selezionefilm, append to the parent div instead
      ev.target.parentNode.appendChild(document.getElementById(data));
      occupato=false;
  } else if (occupato!=true){
      // Otherwise, append to the target div directly
      ev.target.appendChild(document.getElementById(data));
      occupato=true;
  }
    if (ev.target.id=="contenitore"){
      document.getElementById("gif").src=films[data];
    }
}
window.addEventListener("DOMContentLoaded", () => {
  const draggableElements = document.querySelectorAll('[draggable="true"]');
  // Get the element by id
  // Add the ondragstart event listener
  draggableElements.forEach(element => {
    element.addEventListener("dragstart", dragstartHandler);
  });
});
function gestoreLoad(){
  try{
    films = {
      locandina1: "foto_sito/gifs/cittaincantata.gif",
      locandina2: "foto_sito/gifs/porcorosso.gif",
      locandina3: "foto_sito/gifs/laputa.gif",
      locandina4: "foto_sito/gifs/terramare.gif",
      locandina5: "foto_sito/gifs/sospiri.gif",
      locandina6: "foto_sito/gifs/howl.gif",
      locandina7: "foto_sito/gifs/totoro.gif",
      locandina8: "foto_sito/gifs/principessa.gif",
      locandina9: "foto_sito/gifs/mononoke.gif",
  }
  }
  catch (e){
    alert ("gestoreLoad"+e)
  }
}
window.onload=gestoreLoad;