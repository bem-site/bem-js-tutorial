modules.define('i-bem__dom', ['jquery', 'ymaps'], function(provide, $, ymaps, DOM) {

DOM.decl('map', {

    onSetMod: {
        'js' : {
            'inited' : function () {
                var myMap = new ymaps.Map (this.domElem[0], {
                    center: [55.76, 37.64],
                    zoom: 7
                });
            }
        }
    }

});

provide(DOM);

});
