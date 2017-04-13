modules.define('my-block', ['i-bem-dom'], function(provide, bemDom) {

provide(bemDom.decl(this.name, {
    onSetMod: {
        'js' : {
            'inited' : function() {
                console.log(this.domElem[0].outerHTML);
            }
        }
    }
}));

});
