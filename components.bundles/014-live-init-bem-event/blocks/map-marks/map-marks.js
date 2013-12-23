modules.define('i-bem__dom', ['jquery'], function(provide, $, DOM) {

DOM.decl('map-marks', {

    onSetMod: {
        'js' : {
            'inited' : function () {
                this._menu = this.findBlockInside('menu');
            }
        }
    },
    _showMap: function(e, elem) {
        var params = this._menu.elemParams(elem);
    }

}, {
    live: function() {
        this.liveInitOnBlockInsideEvent('current', 'menu', function(e, data){
            this._showMap(e, data.current);
        });
    }
});

provide(DOM);

});
