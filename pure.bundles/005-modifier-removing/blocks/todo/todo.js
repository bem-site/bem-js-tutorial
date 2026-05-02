modules.define('todo', ['i-bem-dom', 'jquery'], function(provide, bemDom, $) {

var Task = bemDom.declElem('todo', 'task');

provide(bemDom.declBlock(this.name, {
    onSetMod: {
        'js' : {
            'inited' : function() {
                this._domEvents('task').on('click', function(e) {
                    $(e.currentTarget).bem(Task).delMod('visible');
                });
            }
        }
    }
}));

});
