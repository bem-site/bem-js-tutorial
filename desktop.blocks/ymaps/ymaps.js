modules.define('ymaps', ['loader_type_js'], function(provide, loader) {

var provideYMaps = function() {
    ym.ready(function() {
        provide(ym);
    });
};

typeof ym !== 'undefined'?
    provideYMaps() :
    loader(
        'http://api-maps.yandex.ru/2.0.30/?coordorder=longlat&ns=ym&lang=ru-RU&load=package.full%2Clayer.storage%2CtemplateLayoutFactory%2Cpackage.editor%2Cutil.dom.element%2Cutil.array%2CgeoObject.overlayFactory.staticGraphics%2Cprojection.Mercator%2Cutil.bounds%2Ccontrol.Base%2CgeoObject.geometryFactory',
        provideYMaps);

});
