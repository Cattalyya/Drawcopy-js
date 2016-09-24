app.controller('SettingCtrl',function($scope, sharedDataService, eventListenerService){

    var data = {};
    data.selectedImage = {};

    $("select").imagepicker();

    $scope.updateSetting = function(){
        sharedDataService.setData("subject",$scope.subject);
        sharedDataService.setData("imagesUrlArray", $);


        eventListenerService.triggerListeners("updateSetting");
    };

});