 /**
 * @ngdoc function
 * @name drawcopy.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller for index.html
 * This controller is responsible for changing current image 
 * @requires $scope
 * @requires sharedDataService
 * @requires eventListenerService
 * 
 * @property {String} subject:String Subject of the experiment
 * @property {String} currentImageUrl:String current selected image url
 * 
 * @method {function} previousImage:function apply new image 
 * @method {function} nextImage:function This holds the reservation details of the current/selected reservation.
 */

var app =angular.module('drawcopy',[])

app.controller('MainCtrl',function($scope, sharedDataService, eventListenerService){ 

    $scope.subject = sharedDataService.getData("subject")
    $scope.currentImageUrl = "";

    var selectedImageIndexes = sharedDataService.getData("selectedImages");
    var imgIndex = 0;
    var numImages = 0;


    var updateMainCtrlData = function() {
        $scope.subject = sharedDataService.getData("subject");
        selectedImageIndexes = sharedDataService.getData("selectedImages");
        $scope.currentImageUrl = sharedDataService.getImageUrl(selectedImageIndexes[0]);
        numImages = selectedImageIndexes.length
        imgIndex = 0;
    }

    eventListenerService.addListener("updateSetting", updateMainCtrlData);
    eventListenerService.addListener("updateSetting", updateMainCtrlData);

    $scope.previousImage = function(){
        imgIndex--;
        if (imgIndex<0){
            imgIndex = numImages-1
        }
        console.log(imgIndex);
        $scope.currentImageUrl = sharedDataService.getImageUrl(selectedImageIndexes[imgIndex]);
        
    }

    $scope.nextImage = function(){
        console.log(imgIndex);
        imgIndex++;
        if (imgIndex>=numImages){
            imgIndex = 0
        }
        console.log(imgIndex);
        $scope.currentImageUrl = sharedDataService.getImageUrl(selectedImageIndexes[imgIndex]);
    }


});