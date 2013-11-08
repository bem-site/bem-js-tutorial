modules.define('i-bem__dom', function(provide, DOM) {

DOM.decl('my-block', {
    onSetMod: {
        'js' : {
            'inited' : function() {
                console.log(this.domElem[0].outerHTML);
            }
        }
    }
});

provide(DOM);

});
