new Vue({
    el: '#app',
    data: {
        playerHealth: 100,
        monsterHealth: 100,
        isGameRunning: false,
        turns: []
    },
    methods: {
        startGame: function(){
            this.isGameRunning = true;
            this.playerHealth = 100;
            this.monsterHealth = 100;
            this.turns = [];
        },
        attack: function(){
            var min = 3;
            var max = 10;
            var damage = this.calculateDamage(max,min);
            this.monsterHealth -= damage;
            this.turns.unshift({
                isPlayer: true,
                text: 'Player hits monster for ' + damage
            });
            if(this.checkWin()) return;
           this.monsterAttack();  
        },
        specialAttack: function(){
            var min =  10;
            var max = 20;
            var damage = this.calculateDamage(max,min)
            this.monsterHealth -= damage;
            this.turns.unshift({
                isPlayer: true,
                text: 'Player hits monster hard  for ' + damage 
            });
            if(this.checkWin()) return;
            this.monsterAttack();
        },
        heal: function(){
            if(this.playerHealth <= 90){
                this.playerHealth += 10;
            }else{
                this.playerHealth = 100;
            }
            this.turns.unshift({
                isPlayer: true,
                text: 'Player heals for 10'
            });
            this.monsterAttack();
        },
        giveUp: function(){
            this.isGameRunning = false;
        },
        calculateDamage: function(max,min){
            return Math.max(Math.floor(Math.random() * max)+1,min);
        },
        checkWin: function(){
            if(this.monsterHealth <= 0){
                if(confirm("You won! Do you want new game?")){
                    this.startGame();
                }else{
                    this.isGameRunning = false;
                }
                return true;
            }else if(this.playerHealth <= 0){
                if(confirm("You Lost! Do you want new game?")){
                    this.startGame();
                }else{
                    this.isGameRunning = false;
                }
                return true;
            }
            return false;
        },
        monsterAttack: function(){
            var min = 5;
            var max = 12;
            var damage = this.calculateDamage(max,min);
            this.playerHealth -= damage;
            this.checkWin();
            this.turns.unshift({
                isPlayer: false,
                text: 'Monster hits Player for ' + damage 
            });
        }
    }
});