modules.define('translate', ['i-bem__dom'], function(provide, BEMDOM) {

provide(BEMDOM.decl(this.name, {
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
