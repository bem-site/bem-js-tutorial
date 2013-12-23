modules.define('i-bem__dom', ['jquery'], function(provide, $, DOM) {

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

}, {
    live: function() {
        $.getScript("http://api-maps.yandex.ru/2.0-stable/?load=package.standard&lang=ru-RU");
        return false;
    }
});

provide(DOM);

});
