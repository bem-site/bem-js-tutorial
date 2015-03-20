modules.define('switch', ['i-bem__dom'], function(provide, BEMDOM) {

provide(BEMDOM.decl(this.name, {
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
