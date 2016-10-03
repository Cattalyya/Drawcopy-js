 /**
  * @ngdoc function
 * @name drawcopy.controller:PaintingCtrl
 * @description
 * # PaintingCtrl
 * Controller for painting canvas area
 * This controller is responsible for getting strokes data from painting area
 * @requires $scope
 * @requires sharedDataService
 * @requires eventListenerService
 * 
 * @method {function} viewData: update the "JSONStrokesData" from current strokes data in sharedDataService
 */

app.controller('PaintingCtrl',function($scope, sharedDataService, eventListenerService){

    var sketchpad = new Sketchpad({
      element: '#sketchpad',
      width: 350,
      height: 350,
    });


    var updateStrokesData = function(){
        var JSONData = JSON.parse(sketchpad.toJSON());
        var strokes = JSONData.strokes;
        sharedDataService.setData("JSONStrokesData", JSON.stringify(strokes));
        eventListenerService.triggerListeners("updateStrokesData");

    };
    
    $scope.viewData = function(){
        updateStrokesData();
    }


    


});