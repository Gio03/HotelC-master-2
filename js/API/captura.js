function tomarFoto(){
        
        // start image capture
        navigator.device.capture.captureImage(function(mediaFiles) {
            //var i, path, len;
           // for (i = 0, len = mediaFiles.length; i < len; i += 1) {
              var  path = mediaFiles[0].fullPath;
                $('regFoto').attr('rel',path);
            $('#regMFoto').html('<img src="'+path+'"  style ="widt: 100%;" />');
            //attr un atributo obtiene, dos parametros los asigna
                // do something interesting with the file
            }
        }, function(error) {
            navigator.notification.alert('Error code: ' + error.code, null, 'Capture Error');
        }, {limit:2});
}