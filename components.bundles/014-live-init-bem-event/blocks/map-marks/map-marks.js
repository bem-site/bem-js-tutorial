modules.define('map-marks', ['i-bem-dom', 'map', 'menu'], function(provide, bemDom, Map, Menu) {

provide(bemDom.declBlock(this.name, {

    onSetMod: {
        'js' : {
            'inited' : function () {
                this._menu = this.findChildBlock(Menu);
                this._map = this.findChildBlock(Map);
            }
        }
    },
    _onMenuCurrent: function(e, data) {
        this._showMap(data.current);
    },
    _showMap: function(elem) {
        var params = elem.params;
        this._map.showAddress(params['address']);
    }

}, {
    lazyInit : true,

    onInit : function() {
        this._events(Menu).on('current', this.prototype._onMenuCurrent);
    }
}));

});
