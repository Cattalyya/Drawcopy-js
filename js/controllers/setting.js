  /**
 * @ngdoc function
 * @name drawcopy.controller:SettingCtrl
 * @description
 * # SettingCtrl
 * Controller for setting modal
 * This controller is responsible for modify images collection for the experiment
 * @requires $scope
 * @requires sharedDataService
 * @requires eventListenerService
 * 
 * @property {String} subject:String Subject of the experiment
 * @property {Array} imageIndices:Array indices of all images
 * 
 * @method {function} getImageUrl:function(index) get image url of image that has index=index
 * @method {function} updateSetting:function updates subject and selected images for an experiment
 */

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
        sharedDataService.setData("selectedImages", selectedImages);
        sharedDataService.setData( "currentImgIndex", 0);
        eventListenerService.triggerListeners("updateSetting");
    };

});