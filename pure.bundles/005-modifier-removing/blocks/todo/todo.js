modules.define('todo', ['i-bem-dom', 'jquery'], function(provide, bemDom, $) {

provide(bemDom.decl(this.name, {
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
