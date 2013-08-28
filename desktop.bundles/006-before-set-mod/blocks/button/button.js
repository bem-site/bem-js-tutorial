modules.define('i-bem__dom', function(provide, DOM) {


DOM.decl('button', {
    beforeSetMod: {
        'focused' : function() {
            if (this.hasMod('disabled')) {
                return false;
            }
        }
    },
    onSetMod: {
        'js' : {
            'inited' : function() {
                this.bindTo('click', function(){
                    this.setMod('focused', true);
                });
                this.bindTo('focusin focusout', function(e){
                    this.setMod('focused', e.type == 'focusin'? true : false);
                });
            }
        },
        'focused' : {
            true: function() {
                this.domElem.focus();
            },
            '': function() {
                this.domElem.blur();
            }
        }
    }
});

provide(DOM);

});
