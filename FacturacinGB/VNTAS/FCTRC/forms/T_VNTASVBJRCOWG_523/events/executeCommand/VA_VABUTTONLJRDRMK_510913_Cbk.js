
//Start signature to Callback event to VA_VABUTTONLJRDRMK_510913
task.executeCommandCallback.VA_VABUTTONLJRDRMK_510913 = function(entities, executeCommandCallbackEventArgs) {
    let nav = executeCommandCallbackEventArgs.commons.api.navigation; 
    nav.closeModal({});
};
