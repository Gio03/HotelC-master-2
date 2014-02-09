function enviarDatos(nom,mail,tel,foto){
$.ajax({
        type: "POST",
        url: "http://igitsoft.com/pgtest.php",
        data: { "nom="+nom+"&mail="+mail+"&tel="+tel} //& es para ir sumando datos a lo que vamos a ir enviando
    }).done(function(msg) {
        if(msg==1){
              subirFoto(foto,nom);
        }else{
               //parametros mensaje, acción después de aceptar, titulo de alerta, nombre del boton
            navigator.notification.alert("Error al procesar datos",null, "Error","Aceptar");
        }
        alert( "Data Saved: " + msg );}
    );

}

