modules.define('todo', ['i-bem-dom', 'jquery'], function(provide, bemDom, $) {

provide(bemDom.declBlock(this.name, {
    onSetMod: {
        'js' : {
            'inited' : function() {
                this.bindTo(this._elem('task'), 'click', function(e) {
                    this.delMod($(e.currentTarget), 'visible');
                });
            }
        }
    }
}));

});
