modules.define('translate', ['i-bem-dom'], function(provide, bemDom) {

provide(bemDom.declBlock(this.name, {
    onSetMod: {
        'js' : {
            'inited' : function() {
                var prompt = this._elem('prompt');
                prompt.domElem.text(this.params.prompt);
                prompt.setMod('visible', true);
            }
        }
    }
},{
    lazyInit: true,

    onInit: function() {
        this._domEvents().on('click', function() {});
    }
}));

});
