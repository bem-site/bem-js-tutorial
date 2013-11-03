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
});

provide(DOM);

});
