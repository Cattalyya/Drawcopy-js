app.controller('ViewdataCtrl',function($scope, sharedDataService, eventListenerService){

    $scope.JSONStrokesData = "No data found";

    eventListenerService.addListener("updateStrokesData", function(){
        
        console.log("called");
        $scope.JSONStrokesData = sharedDataService.getData("JSONStrokesData");

    });

});
