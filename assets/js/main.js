res.forEach(function(element){
   caja.innerHTML += "<li>" + element.title + "</li>";
    })

function agregarTarea(){
  var input = document.getElementById("tarea").value;
  var lisTarea = document.getElementsByClassName("tareas-list");
  lisTarea[0].innerHTML += "<li>" + input +"</li>";

}