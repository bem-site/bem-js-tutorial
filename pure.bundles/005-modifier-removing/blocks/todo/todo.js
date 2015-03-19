modules.define('todo', ['i-bem__dom', 'jquery'], function(provide, BEMDOM, $) {

provide(BEMDOM.decl(this.name, {
    onSetMod: {
        'js' : {
            'inited' : function() {
                this.bindTo(this.elem('task'), 'click', function(e) {
                    this.delMod($(e.currentTarget), 'visible');
                });
            }
        }
    }
}));

});
