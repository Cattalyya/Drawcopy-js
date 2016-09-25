app.factory('sharedDataService', function(){

    var IMAGE_URLS = ['1.png', "2.png", "3.png", "4.png", "5.png", "6.png", "7.png", "8.png"];
    var PATH_IMAGES = 'img/'
    var DEFAULT_SUBJECT = "Experiment 1";


    var data = {
        subject: DEFAULT_SUBJECT, // default subject 
        selectedImages: []
    };
    

    return {
        getData: function(key) {
            // key includes "subject"
            return data[key]
        },
        setData: function(key, val) {
            data[key] = val
        },
        getImageUrl: function(index) {
            return PATH_IMAGES+IMAGE_URLS[index]
        }

    };

});