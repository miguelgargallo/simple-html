$(document).ready(function() {
  $("#miBoton").click(function() {
    $("body").toggleClass("night");
    $("header").toggleClass("night");
    $("button").toggleClass("night");
    
    // Cambia el texto del botón según el modo actual
    if ($("body").hasClass("night")) {
      $("#miBoton").text("Modo día");
    } else {
      $("#miBoton").text("Modo noche");
    }
  });
});
