modules.define('i-bem__dom', function(provide, DOM) {

DOM.decl('square', {
    onSetMod: {
        'js' : {
            'inited' : function() {
                this.bindTo('click', function() {
                    this.setMod('theme', 'new-year');
                });
            }
        }
    }
});

provide(DOM);

});
