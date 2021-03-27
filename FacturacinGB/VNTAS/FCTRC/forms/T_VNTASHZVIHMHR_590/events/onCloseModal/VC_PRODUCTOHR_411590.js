
    
//Evento onCloseModalEvent : Evento que actua como listener cuando se cierra ventanas modales.
//ViewContainer: Producto
task.onCloseModalEvent = function (entities, onCloseModalEventArgs){

    onCloseModalEventArgs.commons.execServer = false;
    if(onCloseModalEventArgs.closedViewContainerId=='VC_CREARPROCM_605523'){
        onCloseModalEventArgs.commons.api.grid.refresh('QV_XT10_KSM84');
    }

};