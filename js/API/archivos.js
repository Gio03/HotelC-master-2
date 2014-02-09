function subirFoto(foto,nom){
            
            var options = new FileUploadOptions();
            options.fileKey="archivo";
            options.fileName="foto-Gio";
            options.mimeType="image/jpeg";

            var params = {};
            params.value1 = "Registros";
            params.value2 = "toma de foto";
            params.value3 = "Hotel Cenet"
            options.params = params;

            var ft = new FileTransfer();
            ft.upload(foto, ("http://igitsoft.com/pgtest.php"), function(r){
                If(r.response == 1){
                    //caja de dialogo que nos permite tener más de una opción
                    //4 parametros
                    navigator.notification.confirm("Registro realizado satisfactoriamente",function(btn){
                        switch(btn){
                            case 1:
                                navigator.notification.vibrate(2500);
                                break;
                            case 2:
                                navigator.notification.beep(2);
                                break;
                        }
                        window.location.href = "#home";
                        //Guardar usuario
                            guardaUsuario(nom,infoDispositivo('id'));
                                    },"Registro","Vibrar,Beep,Aceptar");
                }else{
                    navigator.notification.alert("Error al subir el archivo",null,"Error de servidor","Aceptar");
                }
            }, fail, options);
}