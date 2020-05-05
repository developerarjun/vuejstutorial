new Vue({
    el: '#app',
    data: {
        title: "Hello!!",
        link: "http://google.com",
        finishedLink: '<a href="http://google.com">Google</a>',
        counter: 0,
        x: 0,
        y: 0,
        name: "Arjun"
    },
    methods: {
        sayHello: function(){
            this.title = "Hello World";
            return this.title;
        },
        increaseCounter: function(step,event){
            console.log(event);
            this.counter += step;
        },
        updateCoordinates: function(event){
            this.x=event.clientX;
            this.y=event.clientY;
        },
        alertMe : function(){
            alert("Alert");
        }
    }
});