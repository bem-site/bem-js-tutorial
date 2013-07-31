modules.define('i-bem__dom', function(provide, DOM) {

DOM.decl('todo', {
    onSetMod: {
        'js' : {
            'inited' : function() {
                this.bindTo(this.elem('task'), 'click', function(e) {
                    this.delMod(e.domElem, 'visible');
                });
            }
        }
    }
});

provide(DOM);

});
