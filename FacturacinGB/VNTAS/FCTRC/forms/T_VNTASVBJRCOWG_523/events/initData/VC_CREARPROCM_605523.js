
     
//Evento initData : Inicialización de datos del formulario, después de este evento se realiza el seguimiento de cambios en los datos
//ViewContainer: CrearProductoJms
task.initData.VC_CREARPROCM_605523 = function (entities, initDataEventArgs){

    initDataEventArgs.commons.execServer = false;
    if(entities.ProductoDRA.codigo!=""){
        //actualizar
        initDataEventArgs.commons.api.viewState.show('VA_VABUTTONDPKKAET_915913'); //actualizar
        initDataEventArgs.commons.api.viewState.hide('VA_VABUTTONLJRDRMK_510913'); //nuevo
        initDataEventArgs.commons.api.viewState.readOnly('VA_CODIGOLMSTUGCIW_417913', true);
    }else{
        //nuevo
        
        initDataEventArgs.commons.api.viewState.hide('VA_VABUTTONDPKKAET_915913'); //actualizar
        initDataEventArgs.commons.api.viewState.show('VA_VABUTTONLJRDRMK_510913'); //nuevo
        initDataEventArgs.commons.api.viewState.readOnly('VA_CODIGOLMSTUGCIW_417913', false);
    }

};