class Giphy{

    constructor(){

        this.endpoint = "http://api.giphy.com/v1/gifs";
        this.api_key = "eQiKTP8T1X7vlKMFh9iZAJcCMjsq8dqX";
    }

    getUrl(callback){


        var xhr = new XMLHttpRequest();

        xhr.open("GET",
            this.endpoint+"/random?api_key="+this.api_key
            );

        xhr.responseType = "json";

        xhr.onload = function(){


        callback(this.response.data.images.original.mp4)
        }

        xhr.send();
    }

    static getRandom(callback){


        return new Giphy().getUrl(callback);
    }
}
