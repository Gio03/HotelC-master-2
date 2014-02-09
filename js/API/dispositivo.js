function infoDispositivo(p){
    switch(p){
        case 'nombre':
                        return device.name;
                        break;
        case 'phonegap':
                        return device.cordova;
                        break;
        case 'plataforma':
                        return device.platform;
                        break;
        case 'id':
                        return device.id; 
                        break;
        case 'version':
                        return device.model;
                        
    }

}