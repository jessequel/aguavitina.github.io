// ORDER

var modal = document.getElementById("myModal");

var btn = document.getElementById("btn");

var span = document.getElementsByClassName("close")[0];

btn.onclick = function() {
  modal.style.display = "block";
}

span.onclick = function() {
  modal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}


window.addEventListener("load", function(){
  setTimeout(
      function open(event){
          document.querySelector(".modal").style.display = "block";
      },
      1000
  )
});


document.querySelector("#close").addEventListener("click", function(){
  document.querySelector(".modal").style.display = "none";
});
