modules.define('i-bem__dom', ['jquery'], function(provide, $, DOM) {

DOM.decl('map-marks', {

    onSetMod: {
        'js' : {
            'inited' : function () {
                this._menu = this.findBlockInside('menu');
                this._map = this.findBlockInside('map');
            }
        }
    },
    _showMap: function(e, elem) {
        var params = this._menu.elemParams(elem);
        this._map.showAddress(params['address']);
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
