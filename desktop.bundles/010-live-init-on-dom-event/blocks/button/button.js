modules.define('i-bem__dom', function(provide, DOM) {

DOM.decl('button', {
    onSetMod: {
        'js' : {
            'inited' : function() {
                console.log('Initialization');
            }
        }
    }
},{
    live: function() {
        this.liveInitOnEvent('click', function(e) {
            console.log('Event callback');
        });
    }
});

provide(DOM);

});
