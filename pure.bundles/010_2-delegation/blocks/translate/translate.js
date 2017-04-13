modules.define('translate', ['i-bem-dom'], function(provide, bemDom) {

provide(bemDom.decl(this.name, {
    onSetMod: {
        'js' : {
            'inited' : function() {
                this.setMod(this.elem('prompt'), 'visible', true);
            }
        }
    },
    onElemSetMod: {
        'prompt': {
            'visible': function(elem) {
                elem.text(this.params['prompt']);
            }
        }
    }
},{
    live: function() {
        this.liveInitOnEvent('click');
    }
}));

});
