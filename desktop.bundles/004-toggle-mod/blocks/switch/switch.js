modules.define('i-bem__dom', function(provide, DOM) {

DOM.decl('switch', {
    onSetMod: {
        'js' : {
            'inited' : function() {
                this.bindTo('click', function() {
                    this.toggleMod('switched', 'on', '');
                });
            }
        }
    }
});

provide(DOM);

});
