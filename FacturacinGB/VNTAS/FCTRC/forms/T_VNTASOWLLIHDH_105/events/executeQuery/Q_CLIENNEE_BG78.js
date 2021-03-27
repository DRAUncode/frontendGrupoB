
//ClienteQuery_BG78 Entity: Cliente
task.executeQuery.Q_CLIENNEE_BG78 = function(executeQueryEventArgs){
    executeQueryEventArgs.commons.execServer = true;
    //executeQueryEventArgs.commons.serverParameters.Cliente = true;
    
    executeQueryEventArgs.parameters.nombreBusqueda = executeQueryEventArgs.commons.api.vc.model.ClienteB.nombre
};