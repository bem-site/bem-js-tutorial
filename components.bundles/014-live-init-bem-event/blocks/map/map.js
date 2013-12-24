modules.define('i-bem__dom', ['jquery', 'ymaps'], function(provide, $, ymaps, DOM) {

DOM.decl('map', {

    onSetMod: {
        'js' : {
            'inited' : function () {
                console.log('map', this.domElem);
                ymaps.ready(function(){
                    console.log('ymaps');
                });
            }
        }
    }

});

provide(DOM);

});
