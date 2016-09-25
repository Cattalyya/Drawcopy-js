app.controller('SettingCtrl',function($scope, sharedDataService, eventListenerService){

    $scope.imageIndices = sharedDataService.getData("imageIndices");
    $scope.getImageUrl = sharedDataService.getImageUrl;
    $scope.subject = sharedDataService.getData("subject");
    var selectedImages = null;

    var changeSelectedImgListener = function(selectedImg) { 
        selectedImages = selectedImg.map( function(index){
            // index system start with 1  
            // map to zero-based index system
            return parseInt(index)-1
        });
    };

    var data = {};

    $("select").imagepicker({
        changed: function(oldSelectedImg, updatedSelectedImg){
            changeSelectedImgListener(updatedSelectedImg);
        }
    });

    $scope.updateSetting = function(){
        sharedDataService.setData("subject",$scope.subject);
        sharedDataService.setData("selectedImages", selectedImages)
        console.log(selectedImages)
        eventListenerService.triggerListeners("updateSetting");
    };

});