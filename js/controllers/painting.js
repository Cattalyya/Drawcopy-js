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

    var updateStrokesData = function(){
        var JSONData = JSON.parse(sketchpad.toJSON());
        var strokes = JSONData.strokes;
        sharedDataService.setData("JSONStrokesData", JSON.stringify(strokes));
        eventListenerService.triggerListeners("updateStrokesData");

    };
    
    $scope.viewData = function(){
        updateStrokesData();
    }

    var changeSketchpadsTo = function(){
        currImgInd = sharedDataService.getData( "currentImgIndex");
        imgName = sharedDataService.getImageName(currImgInd);
        var sketchpads = sharedDataService.getData('sketchpads');
        var canvases = sharedDataService.getData('canvases');
        var currSketchpad = null;
        var sketchDiv = angular.element( document.querySelector('#sketches-div') )
        
        if(imgName in sketchpads){
          
            sketchDiv.html(canvases[imgName]);
            currSketchpad = sketchpads[imgName];

        } else {
            var newCanvas = angular.element("<canvas class='picture-box sketchpad' id='sketchpad-"+imgName+"' style='width:350px; height:350px;'></canvas>")
            sketchDiv.html(newCanvas);
            
            sketchpads[imgName] = new Sketchpad({
              element: '#sketchpad-'+imgName,
              width: 350,
              height: 350,
            });

            // Change stroke size
            sketchpads[imgName].penSize = 15;
            canvases[imgName] = newCanvas;

            sharedDataService.setData('sketchpads', sketchpads);
            sharedDataService.setData('canvases', canvases);
            currSketchpad = sketchpads[imgName];

            
        }
        return currSketchpad
    };

    eventListenerService.addListener("changeImage", changeSketchpadsTo);
    eventListenerService.addListener("updateSetting", changeSketchpadsTo);
    
});