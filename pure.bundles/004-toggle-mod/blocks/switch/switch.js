modules.define('switch', ['i-bem-dom'], function(provide, bemDom) {

provide(bemDom.decl(this.name, {
    onSetMod: {
        'js' : {
            'inited' : function() {
                this.bindTo('click', function() {
                    this.toggleMod('switched', 'on', 'off');
                });
            }
        }
    }
}));

});
