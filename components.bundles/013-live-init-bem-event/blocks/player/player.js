modules.define('i-bem__dom', ['jquery'], function(provide, $, DOM) {

DOM.decl('player', {
    rotate: function() {
        var player = this;

        this._angle = this._angle || 0;
        this._rotate = setInterval(function(){
            player._angle += 3;
            player.elem('vinyl').rotate(player._angle);
        }, 5);
    },
    stop: function() {
        clearInterval(this._rotate);
    }
},{
    live: true
});

provide(DOM);

});
