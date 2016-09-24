var app =angular.module('drawcopy',[])

app.controller('MainCtrl',function($scope, sharedDataService, eventListenerService){ 

    $scope.subject = sharedDataService.getData("subject")

    var updateMainCtrlData = function() {
        $scope.subject = sharedDataService.getData("subject");
    }

    eventListenerService.addListener("updateSetting", updateMainCtrlData);


});