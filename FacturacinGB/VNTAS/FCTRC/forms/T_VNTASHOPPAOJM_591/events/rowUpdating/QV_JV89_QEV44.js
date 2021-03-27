
//gridRowUpdating QueryView: QV_JV89_QEV44
//Se ejecuta antes de que los datos modificados en una grilla sean comprometidos.
task.gridRowUpdating.QV_JV89_QEV44 = function (entities,gridRowUpdatingEventArgs) {

     gridRowUpdatingEventArgs.commons.execServer = true;
     //gridRowUpdatingEventArgs.commons.serverParameters.Cliente = true;

};




