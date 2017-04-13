modules.define('call-button', ['i-bem-dom'], function(provide, bemDom) {

provide(bemDom.declBlock(this.name, {
    onSetMod: {
        'js' : {
            'inited' : function() {
                this._domEvents().on('click', function() {
                    this.setMod('calling');
                });
            }
        },
        'calling' : function() {
            this._elem('link').text('Calling...');
        }
    }
}));

});
