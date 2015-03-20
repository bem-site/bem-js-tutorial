modules.define('my-block', ['i-bem__dom'], function(provide, BEMDOM) {

provide(BEMDOM.decl(this.name, {
    onSetMod: {
        'js' : {
            'inited' : function() {
                console.log(this.domElem[0].outerHTML);
            }
        }
    }
}));

});
