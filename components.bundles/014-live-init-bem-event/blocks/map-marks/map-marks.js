modules.define('i-bem__dom', ['jquery'], function(provide, $, DOM) {

DOM.decl('map-marks', {

    onSetMod: {
        'js' : {
            'inited' : function () {
                console.log(222);
            }
        }
    },
    _showMap: function(e, elem) {
        console.log('show map');
        var params = this.elemParams(elem);
        console.log(params);
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
