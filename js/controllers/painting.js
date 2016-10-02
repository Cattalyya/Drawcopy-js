app.controller('PaintingCtrl',function($scope, sharedDataService, eventListenerService){

    var sketchpad = new Sketchpad({
      element: '#sketchpad',
      width: 400,
      height: 400,
    });


    var updateStrokesData = function(){
        var JSONData = JSON.parse(sketchpad.toJSON());
        console.log(JSONData);
        var strokes = JSONData.strokes;
        sharedDataService.setData("JSONStrokesData", JSON.stringify(strokes));
        eventListenerService.triggerListeners("updateStrokesData");


        // log data
        strokes.forEach(function(stroke){
            var lines = stroke.lines
            lines.forEach(function(line){
                console.log(line.start, line.end);
            })
        })
    };

    $scope.viewData = function(){
        updateStrokesData();

    }

    


});