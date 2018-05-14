new Vue ({
    el: '#vue-app',
    data:{
        newTask: '',
        tasks: [],
        endpoint: "http://api.giphy.com/v1/gifs",
        api_key: "eQiKTP8T1X7vlKMFh9iZAJcCMjsq8dqX"

    },

    methods:{
        addTask: function(task){
            this.tasks.push(task);
            this.newTask="";
        },
        removeTask: function(task){
            for(i=0; i< this.tasks.length; i++){
                if(task === this.tasks[i]){
                    this.tasks.splice(i,1);
                };
            };
            Giphy.getRandom(function(videoURL){
                document.getElementById('gif').src = videoURL;
            })
        },



        enviar: function(){

            var firebaseRef = firebase.database().ref().child("lista");
            var messageText = document.getElementById("mainText").value;


            firebaseRef.push().set(messageText);
        }
    }
});
