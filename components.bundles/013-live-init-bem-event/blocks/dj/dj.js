modules.define('i-bem__dom', function(provide, DOM) {

DOM.decl('dj', {
    onSetMod: {
        'js' : {
            'inited' : function() {
                console.log('xxx');
            }
        }
    }
},{
    live: function() {
        this.liveInitOnBlockInsideEvent('init', 'checkbox');
    }
});

provide(DOM);

});
