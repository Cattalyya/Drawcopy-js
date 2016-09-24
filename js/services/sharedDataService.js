app.factory('sharedDataService', function(){

    var data = {
        subject: "Experiment 1", // default subject
        imagesUrlArray: ["1.png", "2.png", "3.png", "4.png", "5.png", "6.png", "7.png", "8.png"],
        isSelectedImage:{}
    };

    return {

        getData: function(key) {
            // key includes "subject"
            return data[key]
        },

        setData: function(key, val) {
            data[key] = val
        },

    };

});