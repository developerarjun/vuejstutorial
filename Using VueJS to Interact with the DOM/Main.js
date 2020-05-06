new Vue({
    el: '#app',
    data: {
        title: "Hello!!",
        link: "http://google.com",
        finishedLink: '<a href="http://google.com">Google</a>',
        counter: 0,
        x: 0,
        y: 0,
        name: "Arjun",
        secondCounter: 0,
        attachedRed: false,
        attachedGreen: false,
        color: "blue",
        colorProperty: "black",
        width: 100,
    },
    computed:{
        output : function(){
            console.log("Computed");
            return this.counter > 10 ? "Greater than 10": "Lower than 10";
        },
        divClass: function(){
            return{
                red: this.attachedRed
            }
        },
        myStyle: function(){
            return {
                backgroundColor: this.colorProperty,
                width: this.width + 'px'
            }
        }
    },
    watch: {
      counter: function(){
          var vm = this;
          setTimeout(function(){
            vm.counter = 0;
          },2000)
      }  
    },
    methods: {
        sayHello: function(){
            this.title = "Hello World";
            return this.title;
        },
        updateCoordinates: function(event){
            this.x=event.clientX;
            this.y=event.clientY;
        },
        alertMe : function(){
            alert("Alert");
        },
        result: function(){
            console.log("Result");
            return this.counter > 10 ? "Greater than 10": "Lower than 10";
        }
    }
});