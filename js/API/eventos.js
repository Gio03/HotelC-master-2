$(function(){
    document.addEventListener("deviceready",function(){
        //Registro
        if(!estaRegistrado())
            window.location.href = "#registro";
        
        $('#regEnv').tap(function(){
            var nom = $('#regNom').val();
            var mail = $('#regMail').val();
            var tel = $('#regTel').val();
            var foto = $('#regFoto').attr('rel');
            if(nom != '' && mail != '' && tel != '' && foto != '' && foto != undefined){
                enviarDatos(nom, mail, tel, foto);
            }else{
                navigator.notification.alert('Todos los campos son requeridos', null, "Registro", "Instentar de nuevo");
            }
        });
    }, false);
});

    $('#regFoto').tap(function(){
        tomarFoto();
    });
//Secion de Registro FIN
},false);
});