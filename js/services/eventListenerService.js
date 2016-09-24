app.factory('eventListenerService', function(){

    var listeners = {};

    return {

        addListener : function( nameOfObj, listener){
            if (nameOfObj in listeners){
                listeners[nameOfObj].push(listener)
            } else {
                listeners[nameOfObj] = [listener]
            }
        },
        triggerListeners: function (nameOfObj){
            if(nameOfObj in listeners) {
                angular.forEach( listeners[nameOfObj], function(listener){
                    listener();
                });
            } 
        }


    }

});