modules.define('call-button', ['i-bem__dom'], function(provide, BEMDOM) {

provide(BEMDOM.decl(this.name, {
    onSetMod: {
        'js' : {
            'inited' : function() {
                this.bindTo('click', function() {
                    this.setMod('calling');
                });
            }
        },
        'calling' : function() {
            this.elem('link').text('Calling...');
        }
    }
}));

});
