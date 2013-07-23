modules.define('i-bem__dom', function(provide, DOM) {

DOM.decl('call-button', {
    onSetMod: {
        'js' : {
            'inited' : function() {
                this.bindTo('click', function() {
                    this.setMod('status', 'calling');
                });
            }
        },
        'status' : {
            'calling' : function() {
                this.elem('link').text('Calling...');
            }
        }
    }
});

provide(DOM);

});
