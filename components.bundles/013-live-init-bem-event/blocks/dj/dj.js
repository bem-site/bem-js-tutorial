modules.define('i-bem__dom', function(provide, DOM) {

DOM.decl('dj', {
    onSetMod: {
        'running' : {
            'true' : function() {
                this._run = true;
                var dj = this;

                dj.findBlocksInside('player').forEach(function(player) {
                    dj._rotate(player.elem('vinyl'));
                });
            },
            '': function() {
                this._run = false;
            }
        }
    },
    _rotate: function(vinyl) {
        if (!this._run) {
            return;
        }

        var dj = this;

        vinyl.rotate({
            angle:0,
            animateTo:360,
            callback: function() {
                dj._rotate(vinyl);
            },
            easing: function (x,t,b,c,d){        // t: current time, b: begInnIng value, c: change In value, d: duration
                return c*(t/d)+b;
            }
        });
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
