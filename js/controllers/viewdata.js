/**
 * @ngdoc function
 * @name drawcopy.controller:ViewdataCtrl
 * @description
 * # ViewdataCtrl
 * Controller for view json data modal
 * This controller is responsible for displaying json data of strokes in a current canvas.
 * @requires $scope
 * @requires sharedDataService
 * @requires eventListenerService
 * 
 * @property {String} JSONStrokesData:String od JSON data that represents strokes of drawing in the current canvas
*/

app.controller('ViewdataCtrl',function($scope, sharedDataService, eventListenerService){

    $scope.JSONStrokesData = "No data found";

    eventListenerService.addListener("updateStrokesData", function(){
        
        $scope.JSONStrokesData = sharedDataService.getData("JSONStrokesData");

    });

     $scope.downloadDrawingURL = function(){

        currImgInd = sharedDataService.getData( "currentImgIndex");
        selectedImages = sharedDataService.getData( "selectedImages");
        imgName = sharedDataService.getImageName(selectedImages[currImgInd]);

        console.log('sketchpad'+imgName)
        var cnvs = document.getElementById('sketchpad-'+imgName);

        console.log(cnvs)

        var dataURL = cnvs.toDataURL('image/png');
        // sharedDataService.setData("dataURL");
        window.open(dataURL);
        console.log(dataURL);
    }

});
