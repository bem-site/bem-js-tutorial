modules.define('i-bem__dom', function(provide, DOM) {

DOM.decl('dj', {
    onSetMod: {
        'running' : {
            'true' : function() {
                var dj = this;
                dj.findBlocksInside('player').forEach(function(player) {
                    var rotation = function (){
                    player.elem('vinyl').rotate({
                        angle:0, 
                        animateTo:360, 
                        callback: rotation,
                        easing: function (x,t,b,c,d){        // t: current time, b: begInnIng value, c: change In value, d: duration
                            return c*(t/d)+b;
                        }
                    });
                    }
                    rotation();
                });
            }
        }
    }
},{
    live: function() {
        this.liveInitOnBlockInsideEvent('change', 'checkbox', function(data) {
            this.setMod('running', data.target.hasMod('checked'));
        });
    }
});

provide(DOM);

});
