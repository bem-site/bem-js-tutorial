modules.define('i-bem__dom', function(provide, DOM) {

DOM.decl('dj', {
    onSetMod: {
        'running' : {
            'true' : function() {
                var dj = this;

                dj.findBlocksInside('player').forEach(function(player) {
                    player.rotate();
                });
            },
            '': function() {
                var dj = this;

                dj.findBlocksInside('player').forEach(function(player) {
                    player.stop();
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
