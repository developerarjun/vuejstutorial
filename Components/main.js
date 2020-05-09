var comp = {
    data: function(){
        return {
            status : 'Critical'
        };
    },
    template: '<p>Server Status: {{ status }} (<button @click="changeStatus">Change</button>)',
    methods: {
        changeStatus: function(){
            this.status = 'Normal';
        }
    }
};
new Vue({
    el: '#app',
    components: {
        'my-comp': comp
    }
});
new Vue({
    el: '#app2'
}) 