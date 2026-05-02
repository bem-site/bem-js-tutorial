modules.define('dj', ['i-bem-dom', 'checkbox', 'player'], function(provide, bemDom, Checkbox, Player) {

provide(bemDom.declBlock(this.name, {
    onSetMod: {
        'running' : {
            'true' : function() {
                var dj = this;

                dj.findChildBlocks(Player).forEach(function(player) {
                    player.rotate();
                });
            },
            '': function() {
                var dj = this;

                dj.findChildBlocks(Player).forEach(function(player) {
                    player.stop();
                });
            }
        }
    }
},{
    lazyInit : true,

    onInit : function() {
        this._events(Checkbox).on({ modName : 'checked', modVal : '*' }, function(e) {
            this.setMod('running', e.target.hasMod('checked'));
        });
    }
}));

});
