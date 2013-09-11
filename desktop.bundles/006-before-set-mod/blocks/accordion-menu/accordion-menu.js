modules.define('i-bem__dom', function(provide, DOM) {


DOM.decl('accordion-menu', {
    beforeSetMod: {
    },
    onSetMod: {
        'js' : {
            'inited' : function() {
                console.log('xxx');
            }
        }
    }
});

provide(DOM);

});
