modules.define('call-button', ['i-bem-dom'], function(provide, bemDom) {

provide(bemDom.decl(this.name, {
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
